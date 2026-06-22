import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProgressContext = createContext(null);

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
    quizScores: {},          // { "partial-1-mcq141": { score: 2, total: 3 } }
    bookmarks: [],           // [{ id, title, path, addedAt }]
    solverHistory: [],       // [{ input, result, timestamp }]
    lastVisited: {},         // { "partial-derivatives": timestamp }
  };
}

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(() => loadProgress(user?.username));

  // Reload when user changes
  useEffect(() => {
    setProgress(loadProgress(user?.username));
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

  const markSectionComplete = useCallback(
    (sectionId) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          completedSections: { ...prev.completedSections, [sectionId]: true },
        };
        persist(next);
        return next;
      });
    },
    [persist]
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
    solverUses: progress.solverHistory.length,
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
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
