"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({ content, children, className = "" }: TooltipProps) => {
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

  return (
    <div className={`group relative inline-flex ${className}`} onClick={handleClick}>
      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-55 -translate-x-1/2 rounded-md border border-[#DAB025]/50 bg-[#111936] px-3 py-2 text-center text-xs text-gray-200 shadow-lg transition-all duration-500 ease-in-out ${
          showOnClick
            ? "translate-y-0 opacity-100"
            : "translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        } before:absolute before:top-full before:left-1/2 before:z-10 before:-translate-x-1/2 before:-translate-y-px before:border-t-[5px] before:border-r-[5px] before:border-l-[5px] before:border-t-[#111936] before:border-r-transparent before:border-l-transparent before:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-[6px] after:border-r-[6px] after:border-l-[6px] after:border-t-[#DAB025]/50 after:border-r-transparent after:border-l-transparent after:content-['']`}
      >
        {content}
      </div>

      {children}
    </div>
  );
};
