"use client";

import { Popover } from "@radix-ui/themes";
import { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Tooltip = ({ content, children, className = "" }: TooltipProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <span className={`inline-flex cursor-help ${className}`}>{children}</span>
      </Popover.Trigger>

      <Popover.Content
        side="top"
        align="center"
        sideOffset={8}
        size="1"
        className="w-max! max-w-55! rounded-md! border! border-[#DAB025]/50! bg-[#111936]! px-3! py-2! text-center! text-xs! text-gray-200! shadow-lg!"
      >
        {content}
      </Popover.Content>
    </Popover.Root>
  );
};
