import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";
import { useProgress } from "../context/ProgressContext";
import "../pages/Leaderboard.css";

const integrationStyles = `
.study-guide-page {
  min-height: 100vh;
  overflow-x: clip;
}

.partial-derivatives-guide .sidebar {
  align-items: center;
  background: #0f0e0d;
  border-bottom: 1px solid rgba(200, 146, 42, 0.3);
  border-right: 0;
  display: flex;
  gap: 0;
  height: auto;
  inset: auto;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 2rem;
  position: sticky;
  right: 0;
  scrollbar-width: none;
  top: var(--header-h, 72px);
  width: 100%;
  z-index: 120;
  -ms-overflow-style: none;
  overscroll-behavior-x: contain;
}

.partial-derivatives-guide .sidebar::-webkit-scrollbar {
  display: none;
  height: 0;
}

.vector-calculus-guide nav {
  top: 64px;
}

.vector-calculus-guide > div > main {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.55) inset;
}

.partial-derivatives-guide .sb-brand {
  border-bottom: 0;
  border-right: 1px solid rgba(200, 146, 42, 0.3);
  flex: 0 0 auto;
  margin-right: 0.5rem;
  padding: 0.65rem 1.1rem 0.65rem 0;
}

.partial-derivatives-guide .sb-sub {
  display: none;
}

.partial-derivatives-guide .sb-title {
  color: #e8b84b;
  font-size: 0.9rem;
  font-style: normal;
  white-space: nowrap;
}

.partial-derivatives-guide .sb-group {
  display: none;
}

.partial-derivatives-guide .sb-link {
  border-bottom: 2px solid transparent;
  border-left: 0;
  color: rgba(250, 247, 242, 0.76);
  flex: 0 0 auto;
  font-family: 'Source Sans 3', system-ui, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  padding: 0.85rem 0.8rem;
  text-transform: uppercase;
  white-space: nowrap;
}

.partial-derivatives-guide .sb-link:hover,
.partial-derivatives-guide .sb-link.active {
  background: transparent;
  border-bottom-color: #c8922a;
  border-left-color: transparent;
  color: #e8b84b;
}

.partial-derivatives-guide .sb-link .sn {
  color: #c8922a;
  font-size: 0.68rem;
}

.partial-derivatives-guide .main {
  margin-left: 0;
  max-width: none;
  padding: 0;
}

.partial-derivatives-guide .ch-hdr {
  background:
    linear-gradient(135deg, rgba(15, 14, 13, 0.97), rgba(39, 53, 64, 0.97)),
    repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(200, 146, 42, 0.06) 40px, rgba(200, 146, 42, 0.06) 41px);
  border-bottom: 0;
  color: #faf7f2;
  margin-bottom: 0;
  overflow: hidden;
  padding: 3.4rem 2rem 3rem;
  position: relative;
}

.partial-derivatives-guide .ch-hdr::after {
  background: linear-gradient(90deg, transparent, #c8922a, #2a5c45, transparent);
  content: "";
  height: 1px;
  inset: auto 0 0;
  opacity: 0.8;
  position: absolute;
}

.partial-derivatives-guide .ch-eye {
  color: #e8b84b;
  font-family: 'Source Sans 3', system-ui, sans-serif;
}

.partial-derivatives-guide .ch-title {
  color: #faf7f2;
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.partial-derivatives-guide .ch-sub {
  color: rgba(250, 247, 242, 0.74);
}

.partial-derivatives-guide .ch-orn {
  color: #e8b84b;
}

.partial-derivatives-guide .main > p,
.partial-derivatives-guide .main > .toc,
.partial-derivatives-guide .main > .section,
.partial-derivatives-guide .main > .mcq-section,
.partial-derivatives-guide .main > .pg-foot {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}

.partial-derivatives-guide .main > p {
  padding: 3rem 2rem 0;
}

.partial-derivatives-guide .main > .toc {
  background: #ffffff;
  border: 1px solid #d6cfc4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  margin-bottom: 3.5rem;
  margin-top: 2rem;
}

.partial-derivatives-guide .toc-h {
  color: #3d4f6b;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
}

.partial-derivatives-guide .toc-a {
  color: #3d4f6b;
}

.partial-derivatives-guide .main > .divider {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}

.partial-derivatives-guide .section,
.partial-derivatives-guide .mcq-section {
  background: transparent;
  padding-left: 2rem;
  padding-right: 2rem;
}

.partial-derivatives-guide .sec-badge,
.partial-derivatives-guide .mcq-section-badge {
  color: #c8922a;
  font-family: 'Source Sans 3', system-ui, sans-serif;
}

.partial-derivatives-guide .sec-title,
.partial-derivatives-guide .mcq-section-title {
  color: #3d4f6b;
  font-family: 'Playfair Display', Georgia, serif;
}

.partial-derivatives-guide .box,
.partial-derivatives-guide .mcq-card,
.partial-derivatives-guide .sum-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.partial-derivatives-guide .fml {
  background: #f7f4ff;
  border-left: 4px solid #3d4f6b;
  border-radius: 0 6px 6px 0;
}

.partial-derivatives-guide .pg-foot {
  color: #7a7268;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (max-width: 920px) {
  .partial-derivatives-guide .sidebar {
    top: var(--header-h, 72px);
  }

  .vector-calculus-guide nav {
    top: var(--header-h, 72px);
  }
}

@media (max-width: 640px) {
  .partial-derivatives-guide .sidebar {
    padding: 0 1rem;
  }

  .partial-derivatives-guide .sb-brand {
    display: none;
  }

  .partial-derivatives-guide .ch-hdr {
    padding: 2.4rem 1rem 2.2rem;
  }

  .partial-derivatives-guide .main > p,
  .partial-derivatives-guide .section,
  .partial-derivatives-guide .mcq-section,
  .partial-derivatives-guide .pg-foot {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
`;

function renderLatex(root) {
  root.normalize();
  renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
    strict: false,
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  });
}

function setupMcqs(root, { publishQuizToLeaderboard, saveQuizScore, setLeaderboardOptIn } = {}) {
  const cards = Array.from(root.querySelectorAll(".mcq-card"));
  if (!cards.length) return [];

  const scores = {};
  const totals = {};
  const answeredCount = {};
  const state = {};
  const answered = {};
  const cleanups = [];
  const submitHosts = {};

  cards.forEach((card) => {
    const section = card.dataset.section;
    totals[section] = (totals[section] || 0) + 1;
    scores[section] = 0;
    answeredCount[section] = 0;
  });

  const updateScoreDisplay = (section) => {
    const el = root.querySelector(`#score${section}`);
    if (el) el.textContent = `${scores[section] || 0} / ${totals[section] || 0}`;
  };

  const ensureSubmitHost = (section) => {
    if (submitHosts[section]) return submitHosts[section];
    const sectionEl =
      root.querySelector(`.mcq-section[id="mcq${section}"], .mcq-section[data-section="${section}"]`) ||
      root.querySelector(`#score${section}`)?.closest(".mcq-section") ||
      cards.find((c) => c.dataset.section === section)?.closest(".mcq-section");
    if (!sectionEl) return null;

    let host = sectionEl.querySelector(`[data-lb-submit="${section}"]`);
    if (!host) {
      host = document.createElement("div");
      host.dataset.lbSubmit = section;
      host.className = "lb-submit";
      host.innerHTML = `
        <div class="lb-submit__row">
          <button type="button" class="lb-submit__btn" disabled>Submit to Leaderboard</button>
          <a class="lb-submit__link" href="/leaderboard">View leaderboard →</a>
        </div>
        <p class="lb-submit__hint">Answer every question in this quiz, then submit an anonymized score.</p>
      `;
      sectionEl.appendChild(host);
      const btn = host.querySelector(".lb-submit__btn");
      const onSubmit = async () => {
        const score = scores[section] || 0;
        const total = totals[section] || 0;
        if (answeredCount[section] < total) return;
        const quizId = `guide-mcq-${section}`;
        btn.disabled = true;
        try {
          if (publishQuizToLeaderboard) {
            await publishQuizToLeaderboard(quizId, score, total);
          } else {
            await saveQuizScore?.(quizId, score, total);
            await setLeaderboardOptIn?.(true);
          }
          const hint = host.querySelector(".lb-submit__hint, .lb-submit__status");
          if (hint) {
            hint.className = "lb-submit__status";
            hint.textContent = `Submitted ${score}/${total}. You now appear on the leaderboard.`;
          }
          btn.textContent = "Update Leaderboard Score";
        } finally {
          btn.disabled = false;
        }
      };
      btn?.addEventListener("click", onSubmit);
      cleanups.push(() => btn?.removeEventListener("click", onSubmit));
      cleanups.push(() => host.remove());
    }
    submitHosts[section] = host;
    return host;
  };

  const refreshSubmitVisibility = (section) => {
    const host = ensureSubmitHost(section);
    if (!host) return;
    const btn = host.querySelector(".lb-submit__btn");
    const done = answeredCount[section] >= (totals[section] || 0);
    if (btn) btn.disabled = !done;
    const hint = host.querySelector(".lb-submit__hint");
    if (hint && !host.querySelector(".lb-submit__status")) {
      hint.textContent = done
        ? "Quiz complete — submit your anonymized score to the leaderboard."
        : "Answer every question in this quiz, then submit an anonymized score.";
    }
  };

  const applyStyles = (card, chosen, correct, revealed) => {
    card.querySelectorAll(".mcq-opt").forEach((opt) => {
      const option = opt.dataset.opt;
      opt.classList.remove("correct", "wrong", "selected");
      if (!option) return;
      if (revealed) {
        if (option === correct) opt.classList.add("correct");
        else if (option === chosen) opt.classList.add("wrong");
      } else if (option === chosen) {
        opt.classList.add("selected");
      }
    });
  };

  cards.forEach((card) => {
    const section = card.dataset.section;
    const correctAnswer = card.dataset.answer;
    const key = `${section}-${card.dataset.q}`;
    const options = card.querySelector(".mcq-options");
    const revealButton = card.querySelector(".mcq-reveal-btn");
    const answerPanel = card.querySelector(".mcq-answer");

    state[key] = { chosen: null };
    answered[key] = false;

    const chooseOption = (event) => {
      if (answered[key]) return;
      const option = event.target.closest(".mcq-opt");
      if (!option) return;
      state[key].chosen = option.dataset.opt;
      applyStyles(card, state[key].chosen, correctAnswer, false);
    };

    const revealAnswer = () => {
      if (answered[key]) return;

      if (!state[key].chosen) {
        const original = revealButton.textContent;
        revealButton.textContent = "Pick an option first!";
        window.setTimeout(() => {
          revealButton.textContent = original;
        }, 1600);
        return;
      }

      answered[key] = true;
      revealButton.disabled = true;
      revealButton.textContent = "Revealed";
      applyStyles(card, state[key].chosen, correctAnswer, true);
      answerPanel?.classList.add("visible");

      if (state[key].chosen === correctAnswer) {
        scores[section] = (scores[section] || 0) + 1;
      }

      answeredCount[section] = (answeredCount[section] || 0) + 1;
      updateScoreDisplay(section);
      refreshSubmitVisibility(section);
      if (answerPanel) {
        renderLatex(answerPanel);
      }
    };

    options?.addEventListener("click", chooseOption);
    revealButton?.addEventListener("click", revealAnswer);
    cleanups.push(() => options?.removeEventListener("click", chooseOption));
    cleanups.push(() => revealButton?.removeEventListener("click", revealAnswer));
    updateScoreDisplay(section);
    ensureSubmitHost(section);
    refreshSubmitVisibility(section);
  });

  return cleanups;
}

function setupSidebar(root) {
  const sections = Array.from(root.querySelectorAll(".section[id], .mcq-section[id]"));
  const links = Array.from(
    root.querySelectorAll('.sb-link[href^="#"], .sidebar-link[href^="#"], .toc-a[href^="#"], .toc-item-link[href^="#"]'),
  );
  if (!sections.length || !links.length) return () => {};

  const sidebar = root.querySelector(".sidebar");
  const keepActiveLinkVisible = (link) => {
    if (!sidebar) return;
    const linkBox = link.getBoundingClientRect();
    const sidebarBox = sidebar.getBoundingClientRect();
    const padding = 24;

    if (linkBox.left < sidebarBox.left + padding) {
      sidebar.scrollTo({
        left: sidebar.scrollLeft - (sidebarBox.left + padding - linkBox.left),
        behavior: "smooth",
      });
    } else if (linkBox.right > sidebarBox.right - padding) {
      sidebar.scrollTo({
        left: sidebar.scrollLeft + (linkBox.right - sidebarBox.right + padding),
        behavior: "smooth",
      });
    }
  };

  const scrollToTarget = (event) => {
    const link = event.currentTarget;
    const hash = link.getAttribute("href");
    const target = hash ? root.querySelector(hash) : null;
    if (!target) return;

    event.preventDefault();
    const headerHeight = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
    ) || 72;
    const sidebarHeight = sidebar ? sidebar.getBoundingClientRect().height : 0;
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      sidebarHeight -
      14;

    window.history.pushState(null, "", hash);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    keepActiveLinkVisible(link);
  };

  links.forEach((link) => link.addEventListener("click", scrollToTarget));
  const cleanups = [
    () => links.forEach((link) => link.removeEventListener("click", scrollToTarget)),
  ];

  if (!window.IntersectionObserver) return () => cleanups.forEach((cleanup) => cleanup());

  let lastActive = null;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link =
        root.querySelector(`.sb-link[href="#${entry.target.id}"]`) ||
        root.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
      if (link && link !== lastActive) {
        links.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
        lastActive = link;
        keepActiveLinkVisible(link);
      }
    });
  }, { rootMargin: "-10% 0px -65% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
  cleanups.push(() => observer.disconnect());
  return () => cleanups.forEach((cleanup) => cleanup());
}

function StudyGuideShell({
  guideClass = "partial-derivatives-guide",
  title,
  styles = "",
  markup,
  children,
}) {
  const rootRef = useRef(null);
  const { saveQuizScore, setLeaderboardOptIn, publishQuizToLeaderboard } = useProgress();
  const resolvedClass = guideClass || "partial-derivatives-guide";

  useEffect(() => {
    if (title) {
      const previous = document.title;
      document.title = `${title} · CalcVoyager`;
      return () => {
        document.title = previous;
      };
    }
    return undefined;
  }, [title]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const cleanups = [
      ...setupMcqs(root, { publishQuizToLeaderboard, saveQuizScore, setLeaderboardOptIn }),
      setupSidebar(root),
    ];
    const topButton = root.querySelector("#top-btn");
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    topButton?.addEventListener("click", scrollTop);
    cleanups.push(() => topButton?.removeEventListener("click", scrollTop));

    renderLatex(root);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [markup, children, publishQuizToLeaderboard, saveQuizScore, setLeaderboardOptIn]);

  return (
    <main className={`study-guide-page ${resolvedClass}`}>
      <style>{styles + integrationStyles}</style>
      {markup ? (
        <div ref={rootRef} dangerouslySetInnerHTML={{ __html: markup }} />
      ) : (
        <div ref={rootRef}>{children}</div>
      )}
    </main>
  );
}

export default StudyGuideShell;
