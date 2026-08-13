"use client";

import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VisitorCounterProps {
  count: number | null;
}

export const VisitorCounter = ({ count }: VisitorCounterProps) => {
  const [showOnClick, setShowOnClick] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setShowOnClick(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowOnClick(false);
    }, 3000);
  };

  if (count === null) return null;

  return (
    <div
      className={`group relative inline-flex ${
        showOnClick ? "tooltip-visible" : ""
      }`}
      onClick={handleClick}
    >
      {/* Tooltip */}
      <div
        className={`
          pointer-events-none absolute bottom-full left-1/2 z-50 mb-2
          w-max max-w-55 -translate-x-1/2
          rounded-md border border-[#DAB025]/50 bg-[#111936]
          px-3 py-2 text-center text-xs text-gray-200
          shadow-lg
          transition-all duration-500 ease-in-out
          
          ${
            showOnClick
              ? "translate-y-0 opacity-100"
              : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          }

          after:absolute after:left-1/2 after:top-full
          after:-translate-x-1/2
          after:border-l-[6px] after:border-r-[6px] after:border-t-[6px]
          after:border-l-transparent after:border-r-transparent
          after:border-t-[#DAB025]/50
          after:content-['']

          before:absolute before:left-1/2 before:top-full
          before:z-10 before:-translate-x-1/2 before:-translate-y-px
          before:border-l-[5px] before:border-r-[5px] before:border-t-[5px]
          before:border-l-transparent before:border-r-transparent
          before:border-t-[#111936]
          before:content-['']
        `}
      >
        No. of people visited this site
      </div>

      {/* Counter */}
      <span className="inline-flex cursor-help items-center gap-2 rounded-full border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-2 text-xs font-medium text-[#DAB025] transition-all duration-500 ease-in-out hover:bg-[#DAB025]/15">
        <Eye size={14} strokeWidth={2} />

        <span>
          {count.toLocaleString()} {count === 1 ? "visitor" : "visitors"}
        </span>
      </span>
    </div>
  );
};
