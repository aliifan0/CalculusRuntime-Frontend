import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import "./Leaderboard.css";

function quizAveragePercent(quizScores) {
  const entries = Object.values(quizScores || {});
  if (entries.length === 0) return 0;
  const sum = entries.reduce((acc, q) => {
    if (!q?.total) return acc;
    return acc + (q.score / q.total) * 100;
  }, 0);
  return Math.round(sum / entries.length);
}

function BarChart({ title, subtitle, rows, valueKey, maxValue, valueSuffix = "" }) {
  const ceiling = Math.max(maxValue || 1, ...rows.map((r) => Number(r[valueKey]) || 0), 1);

  if (!rows.length) {
    return (
      <section className="lb-board">
        <header className="lb-board__head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </header>
        <p className="lb-board__empty">No scores yet. Finish a quiz and submit to appear here.</p>
      </section>
    );
  }

  return (
    <section className="lb-board">
      <header className="lb-board__head">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className="lb-chart" role="img" aria-label={title}>
        {rows.map((row, index) => {
          const value = Number(row[valueKey]) || 0;
          const width = Math.max(4, Math.round((value / ceiling) * 100));
          return (
            <div
              key={row.id}
              className={`lb-chart__row${row.isYou ? " lb-chart__row--you" : ""}`}
            >
              <div className="lb-chart__meta">
                <span className="lb-rank">#{index + 1}</span>
                <span className="lb-name">
                  {row.label}
                  {row.isYou ? <em> (you)</em> : null}
                </span>
                <span className="lb-score">
                  {value}
                  {valueSuffix}
                </span>
              </div>
              <div className="lb-chart__track" aria-hidden="true">
                <div
                  className={`lb-chart__fill${row.isYou ? " lb-chart__fill--you" : ""}`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Leaderboard() {
  const { user } = useAuth();
  const { progress, stats, setLeaderboardOptIn } = useProgress();
  const optedIn = Boolean(progress.leaderboardOptIn);

  const youStats = useMemo(() => {
    const topics = stats.completedCount || 0;
    const quizPct = quizAveragePercent(progress.quizScores);
    return {
      id: "you",
      label: user?.username
        ? `Learner ${user.username.slice(0, 1).toUpperCase()}`
        : "You",
      topics,
      quizPct,
      isYou: true,
    };
  }, [progress.quizScores, stats.completedCount, user?.username]);

  const quizCount = Object.keys(progress.quizScores || {}).length;
  const hasProgress = youStats.topics > 0 || quizCount > 0;

  // Real data only — no hardcoded peer entries.
  const topicRows = useMemo(
    () => (optedIn && hasProgress ? [youStats] : []),
    [optedIn, hasProgress, youStats],
  );
  const quizRows = useMemo(
    () => (optedIn && quizCount > 0 ? [youStats] : []),
    [optedIn, quizCount, youStats],
  );

  return (
    <main className="lb-page">
      <header className="lb-hero">
        <p className="lb-kicker">Your progress</p>
        <h1>Leaderboard</h1>
        <p className="lb-lead">
          Anonymized ranking from your real quiz scores and completed topics.
          Submit a quiz from Practice or any study-guide quiz to appear here.
        </p>
      </header>

      <section className="lb-privacy">
        <div>
          <h2>Share anonymized progress?</h2>
          <p>
            When enabled, your topic completion and quiz averages appear here as
            an anonymous learner entry. Turn this off anytime.
          </p>
          {!user && (
            <p className="lb-note">
              <Link to="/login">Sign in</Link> to save your opt-in preference
              with your progress.
            </p>
          )}
          {quizCount === 0 && (
            <p className="lb-note">
              No quiz scores yet. Finish a quiz and tap{" "}
              <strong>Submit to Leaderboard</strong>, or try{" "}
              <Link to="/practice">Practice</Link>.
            </p>
          )}
        </div>
        <label className="lb-toggle">
          <input
            type="checkbox"
            checked={optedIn}
            onChange={(e) => setLeaderboardOptIn(e.target.checked)}
            aria-label="Opt in to anonymized leaderboard"
          />
          <span className="lb-toggle__ui" aria-hidden="true" />
          <span className="lb-toggle__text">
            {optedIn ? "Opted in" : "Opted out"}
          </span>
        </label>
      </section>

      {!optedIn ? (
        <div className="lb-empty" role="status">
          <h2>Leaderboard hidden</h2>
          <p>
            You are opted out. Enable the toggle above, or use{" "}
            <strong>Submit to Leaderboard</strong> after a quiz, to show your
            anonymized progress graphs.
          </p>
        </div>
      ) : !hasProgress ? (
        <div className="lb-empty" role="status">
          <h2>No progress yet</h2>
          <p>
            Complete a study-guide section or submit a quiz score — then your
            real stats will show here. There is no placeholder peer data.
          </p>
        </div>
      ) : (
        <>
          <div className="lb-summary">
            <div className="lb-stat">
              <span className="lb-stat__num">{youStats.topics}</span>
              <span className="lb-stat__label">Topics completed</span>
            </div>
            <div className="lb-stat">
              <span className="lb-stat__num">{youStats.quizPct}%</span>
              <span className="lb-stat__label">Quiz average</span>
            </div>
            <div className="lb-stat">
              <span className="lb-stat__num">{quizCount}</span>
              <span className="lb-stat__label">Quizzes recorded</span>
            </div>
          </div>

          <div className="lb-grid">
            <BarChart
              title="Topics completed"
              subtitle="Your anonymized progress"
              rows={topicRows}
              valueKey="topics"
              maxValue={Math.max(12, youStats.topics)}
              valueSuffix=" topics"
            />
            <BarChart
              title="Quiz average"
              subtitle="Average across submitted quizzes"
              rows={quizRows}
              valueKey="quizPct"
              maxValue={100}
              valueSuffix="%"
            />
          </div>
        </>
      )}
    </main>
  );
}
