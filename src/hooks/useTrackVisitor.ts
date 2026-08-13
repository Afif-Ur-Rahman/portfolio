"use client";

import { useEffect } from "react";

export function useTrackVisitor() {
  useEffect(() => {
    fetch("/api/visitor", { method: "POST" }).catch(() => {});
  }, []);
}
