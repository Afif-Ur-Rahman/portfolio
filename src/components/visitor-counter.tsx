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
  if (count === null && !isLoading) return null;

  return (
    <Tooltip content={label}>
      <span className="inline-flex cursor-help items-center gap-2 rounded-full border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-2 text-xs font-medium text-[#DAB025] transition-all duration-300 hover:bg-[#DAB025]/15">
        <Eye size={14} strokeWidth={2} />

        {isLoading ? (
          <Loader2 size={13} strokeWidth={2} className="animate-spin" />
        ) : (
          <span>{count?.toLocaleString()}</span>
        )}

        <span>visitors</span>
      </span>
    </Tooltip>
  );
};
