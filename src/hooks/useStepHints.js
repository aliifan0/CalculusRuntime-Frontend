import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Progressive "Show Me a Hint" state for tool pages.
 * Reveals hint/step entries one at a time instead of dumping the full solution.
 */
export function useStepHints(steps = [], resetKey = "") {
  const [visibleCount, setVisibleCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setVisibleCount(0);
    setFeedback("");
  }, [resetKey]);

  const total = steps?.length ?? 0;
  const allRevealed = total > 0 && visibleCount >= total;

  const visibleSteps = useMemo(
    () => (steps ?? []).slice(0, visibleCount),
    [steps, visibleCount]
  );

  const revealHint = useCallback(() => {
    if (!steps || steps.length === 0) {
      setFeedback("Run the tool first so hints can walk through the solution steps.");
      return;
    }
    if (visibleCount >= steps.length) {
      setFeedback("All hints are already revealed.");
      return;
    }
    setVisibleCount((n) => n + 1);
    setFeedback("");
  }, [steps, visibleCount]);

  const resetHints = useCallback(() => {
    setVisibleCount(0);
    setFeedback("");
  }, []);

  return {
    visibleCount,
    total,
    visibleSteps,
    allRevealed,
    feedback,
    revealHint,
    resetHints,
    hasMore: total > 0 && visibleCount < total,
  };
}
