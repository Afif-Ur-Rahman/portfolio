"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCount(data.totalVisitors);
      })
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DAB025]/10 px-3 py-1 text-xs font-medium text-[#DAB025]">
      <Eye size={13} />
      {count.toLocaleString()} visitors
    </span>
  );
};
