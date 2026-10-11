"use client";

import { Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Skeleton } from "@/components";
import { cn } from "@/utils";

import type { GalleryItem } from "../useGallery";

type GallerySlideProps = {
  item: GalleryItem;
  index: number;
  isMobile: boolean;
  isActive: boolean;
  onSelect: (index: number) => void;
  onExpand: () => void;
};

export const GallerySlide = ({
  item,
  index,
  isMobile,
  isActive,
  onSelect,
  onExpand,
}: GallerySlideProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0 pl-4",
        isMobile ? "basis-[68%] sm:basis-[38%] lg:basis-[26%]" : "basis-[88%] md:basis-[72%]",
      )}
    >
      <div
        onClick={() => (isActive ? onExpand() : onSelect(index))}
        className={cn(
          "group relative overflow-hidden rounded-xl border bg-[#0d1650] shadow-2xl transition-all duration-500",
          isActive
            ? "scale-100 cursor-zoom-in border-[#DAB025]/40 opacity-100"
            : "scale-[0.92] cursor-pointer border-white/10 opacity-50 hover:opacity-80",
        )}
      >
        <div
          className={cn("relative w-full bg-[#0a1240]", isMobile ? "aspect-9/19" : "aspect-video")}
        >
          {!loaded && <Skeleton />}

          <Image
            src={item.image}
            alt={item.title}
            fill
            draggable={false}
            sizes={isMobile ? "(max-width: 640px) 70vw, 30vw" : "(max-width: 768px) 88vw, 72vw"}
            priority={index === 0}
            className={cn(
              "object-cover object-top transition-opacity duration-500 select-none",
              loaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setLoaded(true)}
            onError={e => {
              if (item.fallback && !e.currentTarget.src.endsWith(item.fallback)) {
                e.currentTarget.src = item.fallback;
              }
            }}
          />

          {isActive && (
            <span className="pointer-events-none absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#09113F]/80 text-[#DAB025] opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 size={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
