import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import { Link } from "react-router-dom";
import "./SectionCompleteBar.css";

function SectionCompleteBar({ sectionId, nextPath, nextLabel }) {
  const { user } = useAuth();
  const { progress, markSectionComplete } = useProgress();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const done = !!progress.completedSections[sectionId];

  const handleMark = async () => {
    if (busy || done) return;
    setBusy(true);
    setError("");
    try {
      await markSectionComplete(sectionId);
    } catch {
      setError("Could not sync to server. Marked complete on this device.");
    } finally {
      setBusy(false);
    }
  };

  if (!user) {
    return (
      <div className="scb-wrap scb-wrap--guest">
        <span>
          <Link to="/signup">Create a free account</Link> to track your progress.
        </span>
        {nextPath && (
          <Link to={nextPath} className="scb-next">
            {nextLabel || "Next"} →
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className={`scb-wrap${done ? " scb-wrap--done" : ""}`}>
      {done ? (
        <span className="scb-done-label">✓ Section complete</span>
      ) : (
        <button
          type="button"
          className="scb-mark-btn"
          onClick={handleMark}
          disabled={busy}
        >
          {busy ? "Saving…" : "Mark as complete"}
        </button>
      )}
      {error ? <span className="scb-error">{error}</span> : null}
      {nextPath && (
        <Link to={nextPath} className="scb-next">
          {nextLabel || "Next"} →
        </Link>
      )}
    </div>
  );
}

export default SectionCompleteBar;
