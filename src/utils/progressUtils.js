export function normalizeTimestamp(value) {
  if (value === null || value === undefined || value === "") return null;

  const numericValue = Number(value);
  if (Number.isFinite(numericValue)) {
    return numericValue < 1e12 ? numericValue * 1000 : numericValue;
  }

  const dateValue = Date.parse(value);
  return Number.isFinite(dateValue) ? dateValue : null;
}

export function formatRelativeCompletion(value) {
  const timestamp = normalizeTimestamp(value);
  if (timestamp === null) return "Completed recently";

  const diffMs = Date.now() - timestamp;
  const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));

  if (diffDays <= 0) return "Completed today";
  if (diffDays === 1) return "Completed 1 day ago";
  return `Completed ${diffDays} days ago`;
}

export function formatCompletionDate(value) {
  const timestamp = normalizeTimestamp(value);
  if (timestamp === null) return "Unknown completion date";
  return new Date(timestamp).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function isOverdueForReview(value, windowDays = 14) {
  const timestamp = normalizeTimestamp(value);
  if (timestamp === null) return false;

  const cutoff = Date.now() - windowDays * 24 * 60 * 60 * 1000;
  return timestamp <= cutoff;
}
