"use client";

import { useEffect } from "react";
import { useVisitorStore } from "@/store";

export const useTrackProjectVisitor = (projectId: string) => {
  const { setProjectCount, setIsLoading, isContact, setIsContact } =
    useVisitorStore();

  useEffect(() => {
    if (!projectId) return;

    setIsLoading(true);
    fetch(`/api/project-visitor/${projectId}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProjectCount(data.totalVisitors);
        else setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  return { isContact, setIsContact };
};
