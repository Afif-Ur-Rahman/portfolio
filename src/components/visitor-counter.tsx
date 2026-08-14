"use client";

import { Eye } from "lucide-react";
import { Tooltip } from "./tooltip";

interface VisitorCounterProps {
  count: number | null;
  label?: string;
}

export const VisitorCounter = ({
  count,
  label = "No. of people visited this site",
}: VisitorCounterProps) => {
  if (count === null) return null;

  return (
    <Tooltip content={label}>
      <span className="inline-flex cursor-help items-center gap-2 rounded-full border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-2 text-xs font-medium text-[#DAB025] transition-all duration-500 ease-in-out hover:bg-[#DAB025]/15">
        <Eye size={14} strokeWidth={2} />
        <span>
          {count.toLocaleString()} {count === 1 ? "visitor" : "visitors"}
        </span>
      </span>
    </Tooltip>
  );
};
