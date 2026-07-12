import { useState } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

/**
 * Objective 14 — appear after a quiz so learners can publish anonymized scores.
 */
export default function SubmitToLeaderboard({
  quizId,
  score,
  total,
  className = "",
}) {
  const { publishQuizToLeaderboard, progress } = useProgress();
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  if (!quizId || !total) return null;

  const alreadyIn = Boolean(progress.leaderboardOptIn);
  const pct = Math.round((score / total) * 100);

  const handleSubmit = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await publishQuizToLeaderboard(quizId, score, total);
      setStatus(
        `Submitted ${score}/${total} (${pct}%). You now appear on the leaderboard.`
      );
    } catch {
      setStatus("Could not reach the server. Your score was saved locally.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={`lb-submit ${className}`.trim()}>
      <div className="lb-submit__row">
        <button
          type="button"
          className="lb-submit__btn"
          onClick={handleSubmit}
          disabled={busy}
        >
          {busy
            ? "Submitting…"
            : alreadyIn
              ? "Update Leaderboard Score"
              : "Submit to Leaderboard"}
        </button>
        <Link className="lb-submit__link" to="/leaderboard">
          View leaderboard →
        </Link>
      </div>
      {status ? (
        <p className="lb-submit__status" role="status">
          {status}
        </p>
      ) : (
        <p className="lb-submit__hint">
          Publishes an anonymized quiz average. You can opt out anytime on the leaderboard page.
        </p>
      )}
    </div>
  );
}
