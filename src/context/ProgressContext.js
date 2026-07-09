import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProgressContext = createContext(null);
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

function storageKey(username) {
  return `calcvoyager_progress_${username}`;
}

function loadProgress(username) {
  if (!username) return defaultProgress();
  try {
    const raw = localStorage.getItem(storageKey(username));
    return raw ? { ...defaultProgress(), ...JSON.parse(raw) } : defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return {
    completedSections: {},   // { "partial-1": true, "vector-1": true }
    completedSectionTimestamps: {},
    completedSectionMetadata: {},
    quizScores: {},          // { "partial-1-mcq141": { score: 2, total: 3 } }
    bookmarks: [],           // [{ id, title, path, addedAt }]
    solverHistory: [],       // [{ input, result, timestamp }]
    lastVisited: {},         // { "partial-derivatives": timestamp }
  };
}

function normalizeProgressPayload(payload) {
  return {
    completedSections: payload?.completedSections || {},
    completedSectionTimestamps: payload?.completedSectionTimestamps || {},
    completedSectionMetadata: payload?.completedSectionMetadata || {},
    quizScores: payload?.quizScores || {},
    bookmarks: payload?.bookmarks || [],
    solverHistory: payload?.solverHistory || [],
    lastVisited: payload?.lastVisited || {},
    solverUses: payload?.solverUses ?? 0,
  };
}

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(() => loadProgress(user?.username));
  const [isHydrated, setIsHydrated] = useState(false);

  // Reload when user changes
  useEffect(() => {
    setProgress(loadProgress(user?.username));
    setIsHydrated(false);
  }, [user?.username]);

  const persist = useCallback(
    (next) => {
      if (!user?.username) return;
      try {
        localStorage.setItem(storageKey(user.username), JSON.stringify(next));
      } catch {}
    },
    [user?.username]
  );

  useEffect(() => {
    if (!user?.accessToken) {
      setIsHydrated(true);
      return;
    }

    let cancelled = false;

    async function fetchProgress() {
      try {
        const response = await fetch(`${API_URL}/api/progress/`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to load progress");
        }

        const payload = await response.json();
        if (!cancelled) {
          setProgress((prev) => ({
            ...prev,
            ...normalizeProgressPayload(payload),
          }));
          persist({
            ...defaultProgress(),
            ...normalizeProgressPayload(payload),
          });
        }
      } catch {
        if (!cancelled) {
          setProgress((prev) => ({ ...prev, completedSectionTimestamps: prev.completedSectionTimestamps || {} }));
        }
      } finally {
        if (!cancelled) {
          setIsHydrated(true);
        }
      }
    }

    fetchProgress();
    return () => {
      cancelled = true;
    };
  }, [user?.accessToken, persist]);

  const markSectionComplete = useCallback(
    async (sectionId) => {
      if (!user?.accessToken) {
        setProgress((prev) => {
          const next = {
            ...prev,
            completedSections: { ...prev.completedSections, [sectionId]: true },
            completedSectionTimestamps: {
              ...prev.completedSectionTimestamps,
              [sectionId]: Date.now(),
            },
          };
          persist(next);
          return next;
        });
        return;
      }

      const response = await fetch(`${API_URL}/api/progress/section/complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({ section_id: sectionId }),
      });

      if (!response.ok) {
        throw new Error("Could not mark section complete");
      }

      const payload = await response.json();
      const completedAt = payload.completed_at ?? Date.now();
      setProgress((prev) => {
        const next = {
          ...prev,
          completedSections: { ...prev.completedSections, [sectionId]: true },
          completedSectionTimestamps: {
            ...prev.completedSectionTimestamps,
            [sectionId]: completedAt,
          },
          completedSectionMetadata: {
            ...prev.completedSectionMetadata,
            [sectionId]: {
              needs_review: false,
              days_since_completion: 0,
            },
          },
        };
        persist(next);
        return next;
      });
    },
    [persist, user?.accessToken]
  );

  const saveQuizScore = useCallback(
    (quizId, score, total) => {
      setProgress((prev) => {
        const existing = prev.quizScores[quizId];
        // Only update if new score is better
        if (existing && existing.score >= score) return prev;
        const next = {
          ...prev,
          quizScores: { ...prev.quizScores, [quizId]: { score, total } },
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const addBookmark = useCallback(
    (bookmark) => {
      setProgress((prev) => {
        if (prev.bookmarks.find((b) => b.id === bookmark.id)) return prev;
        const next = {
          ...prev,
          bookmarks: [{ ...bookmark, addedAt: Date.now() }, ...prev.bookmarks],
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const removeBookmark = useCallback(
    (id) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          bookmarks: prev.bookmarks.filter((b) => b.id !== id),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const isBookmarked = useCallback(
    (id) => progress.bookmarks.some((b) => b.id === id),
    [progress.bookmarks]
  );

  const addSolverHistory = useCallback(
    (entry) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          solverHistory: [{ ...entry, timestamp: Date.now() }, ...prev.solverHistory].slice(0, 50),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const recordVisit = useCallback(
    (pageId) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          lastVisited: { ...prev.lastVisited, [pageId]: Date.now() },
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  // Compute overall stats
  const stats = {
    totalSections: 12, // 7 partial + 5 vector
    completedCount: Object.keys(progress.completedSections).length,
    bookmarkCount: progress.bookmarks.length,
    quizzesTaken: Object.keys(progress.quizScores).length,
    solverUses: progress.solverHistory.length || progress.solverUses || 0,
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        stats,
        markSectionComplete,
        saveQuizScore,
        addBookmark,
        removeBookmark,
        isBookmarked,
        addSolverHistory,
        recordVisit,
        isHydrated,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
