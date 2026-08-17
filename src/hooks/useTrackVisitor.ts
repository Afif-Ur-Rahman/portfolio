"use client";

import { useEffect } from "react";
import { useVisitorStore } from "@/store";

export const useTrackVisitor = () => {
  const { setSiteCount, setIsLoading, isContact, setIsContact, setVisitorId } =
    useVisitorStore();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/visitor", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setVisitorId(data.visitorId);
          setSiteCount(data.totalVisitors);
        } else setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isContact, setIsContact };
};
