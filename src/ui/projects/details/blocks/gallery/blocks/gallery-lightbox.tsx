"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

import type { GalleryItem } from "../useGallery";

type GalleryLightboxProps = {
  item: GalleryItem;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const SWIPE_DISTANCE = 80;
const SWIPE_VELOCITY = 500;

const navButtonClass =
  "absolute hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#DAB025]/40 text-[#DAB025] transition-colors hover:bg-[#DAB025] hover:text-[#09113F] sm:flex";

export const GalleryLightbox = ({ item, open, onClose, onPrev, onNext }: GalleryLightboxProps) => {
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    const { offset, velocity } = info;

    if (offset.x < -SWIPE_DISTANCE || velocity.x < -SWIPE_VELOCITY) onNext();
    else if (offset.x > SWIPE_DISTANCE || velocity.x > SWIPE_VELOCITY) onPrev();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#09113F]/90 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#DAB025]/40 text-[#DAB025] transition-colors hover:bg-[#DAB025] hover:text-[#09113F]"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous"
            className={`${navButtonClass} left-6`}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={e => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next"
            className={`${navButtonClass} right-6`}
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={item.image}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            dragSnapToOrigin
            onDragEnd={handleDragEnd}
            className="flex max-h-full max-w-5xl cursor-grab flex-col items-center gap-4 active:cursor-grabbing"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1920}
              height={1080}
              draggable={false}
              className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg border border-[#DAB025]/30 object-contain shadow-2xl select-none"
              onError={e => {
                if (item.fallback && !e.currentTarget.src.endsWith(item.fallback)) {
                  e.currentTarget.src = item.fallback;
                }
              }}
            />
            <div className="text-center">
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              {item.description && (
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-300">{item.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
