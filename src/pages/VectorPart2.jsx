import { useEffect } from "react";
import { useProgress } from "../context/ProgressContext";
import BookmarkButton from "../components/BookmarkButton";
import SectionCompleteBar from "../components/SectionCompleteBar";
import VectorCalculusGuide from "./VectorCalculusGuide";
import "./GuidePart.css";

function VectorPart2() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("vector-2");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Part 2 of 2</span>
          <span className="guide-part-title">Vector Calculus — Green's Theorem &amp; Surfaces</span>
        </div>
        <BookmarkButton
          id="vector-2"
          title="Vector Calculus — Part 2"
          path="/vector-calculus/2"
        />
      </div>
      <VectorCalculusGuide part={2} />
      <SectionCompleteBar
        sectionId="vector-2"
        nextPath="/ai-solver"
        nextLabel="Try the AI Solver"
      />
    </div>
  );
}

export default VectorPart2;
