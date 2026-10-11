"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils";

import { GalleryItem } from "../useGallery";

import type { RefObject } from "react";

type GalleryTabsProps = {
  gallery: GalleryItem[];
  activeIndex: number;
  isHovered: boolean;
  onSelect: (index: number) => void;
  tabRefs: RefObject<(HTMLButtonElement | null)[]>;
};

export const GalleryTabs = ({
  gallery,
  activeIndex,
  isHovered,
  onSelect,
  tabRefs,
}: GalleryTabsProps) => {
  return (
    <div className="relative mb-6 border-b border-[#09113F]/10">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto sm:gap-4">
        {gallery.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.title}
              ref={el => {
                tabRefs.current[index] = el;
              }}
              onClick={() => onSelect(index)}
              className={cn(
                "group relative flex shrink-0 cursor-pointer items-baseline gap-2 px-3 pt-2 pb-3.5 whitespace-nowrap transition-colors duration-300",
                isActive ? "text-[#09113F]" : "text-[#09113F]/45 hover:text-[#09113F]/80",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[10px] tracking-wider transition-colors duration-300",
                  isActive ? "text-[#DAB025]" : "text-[#09113F]/30 group-hover:text-[#DAB025]/70",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium sm:text-[15px]">{item.title}</span>

              {/* Hover hint for inactive tabs */}
              {!isActive && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-[#DAB025]/40 transition-transform duration-300 group-hover:scale-x-100" />
              )}

              {/* Active underline + autoplay progress */}
              {isActive && (
                <motion.span
                  layoutId="gallery-active-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden rounded-full bg-[#DAB025]/25"
                >
                  <span
                    key={`${activeIndex}-${isHovered}`}
                    className="block h-full bg-[#DAB025]"
                    style={{
                      animation: "tab-progress 4s linear forwards",
                      animationPlayState: isHovered ? "paused" : "running",
                    }}
                  />
                </motion.span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
