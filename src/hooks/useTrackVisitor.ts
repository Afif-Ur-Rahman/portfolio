"use client";

import { useEffect, useState } from "react";

export const useTrackVisitor = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCount(data.totalVisitors);
      })
      .catch(() => {});
  }, []);

  return { count };
};
