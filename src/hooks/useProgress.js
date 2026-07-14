// src/hooks/useProgress.js
// Fetches from Python backend: GET /progress/summary

import { useState, useEffect, useCallback } from "react";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

export function useProgress() {
  const [progress, setProgress] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  const fetchProgress = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      const res = await fetch(`${API_BASE}/progress/summary`, {
        method: "GET",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (res.status === 401) throw new Error("Unauthorized — please log in again");
      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const json = await res.json();
      if (!json.success) throw new Error(json.error || "Unknown error");
      setProgress(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  return { progress, loading, error, refetch: fetchProgress };
}
