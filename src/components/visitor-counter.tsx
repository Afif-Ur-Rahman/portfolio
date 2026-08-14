"use client";

import { Eye, Loader2 } from "lucide-react";
import { Tooltip } from "./tooltip";

interface VisitorCounterProps {
  count: number | null;
  label?: string;
  isLoading: boolean;
}

export const VisitorCounter = ({
  count,
  isLoading,
  label = "No. of people visited this site",
}: VisitorCounterProps) => {
  if (isLoading) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-2 text-xs font-medium text-[#DAB025]">
        <Loader2 size={14} strokeWidth={2} className="animate-spin" />
      </span>
    );
  }

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
