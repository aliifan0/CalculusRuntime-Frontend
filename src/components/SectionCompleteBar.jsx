import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import { Link } from "react-router-dom";
import "./SectionCompleteBar.css";

function SectionCompleteBar({ sectionId, nextPath, nextLabel }) {
  const { user } = useAuth();
  const { progress, markSectionComplete } = useProgress();

  const done = !!progress.completedSections[sectionId];

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
          className="scb-mark-btn"
          onClick={() => markSectionComplete(sectionId)}
        >
          Mark as complete
        </button>
      )}
      {nextPath && (
        <Link to={nextPath} className="scb-next">
          {nextLabel || "Next"} →
        </Link>
      )}
    </div>
  );
}

export default SectionCompleteBar;
