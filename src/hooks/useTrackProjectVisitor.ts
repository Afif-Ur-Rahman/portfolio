"use client";

import { useEffect, useState } from "react";

export const useTrackProjectVisitor = (projectId: string) => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!projectId) return;

    fetch(`/api/project-visitor/${projectId}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCount(data.totalVisitors);
      })
      .catch(() => {});
  }, [projectId]);

  return { count };
};
