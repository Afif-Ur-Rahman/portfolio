"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryItem } from "../useGallery";

type GalleryLightboxProps = {
  item: GalleryItem;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

type Point = { x: number; y: number };
type Transform = { scale: number; x: number; y: number };

const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;
const DOUBLE_TAP_MS = 300;
const TAP_MOVE_LIMIT = 10;
const SWIPE_DISTANCE = 80;

const navButtonClass =
  "absolute hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#DAB025]/40 text-[#DAB025] transition-colors hover:bg-[#DAB025] hover:text-[#09113F] sm:flex";

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

type ZoomableImageProps = {
  item: GalleryItem;
  onPrev: () => void;
  onNext: () => void;
};

// Keyed by image in the parent, so zoom resets on every slide change
const ZoomableImage = ({ item, onPrev, onNext }: ZoomableImageProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const transformRef = useRef<Transform>(transform);
  const pointers = useRef(new Map<number, Point>());
  const pinch = useRef<{ dist: number; scale: number } | null>(null);
  const pan = useRef<{ start: Point; origin: Point } | null>(null);
  const tap = useRef<{ start: Point; time: number } | null>(null);
  const lastTap = useRef(0);

  // Clamp scale + pan so the image never leaves its frame
  const apply = useCallback((next: Transform) => {
    const scale = Math.min(MAX_SCALE, Math.max(1, next.scale));
    const el = frameRef.current;

    let x = 0;
    let y = 0;

    if (el && scale > 1) {
      const maxX = (el.offsetWidth * (scale - 1)) / 2;
      const maxY = (el.offsetHeight * (scale - 1)) / 2;
      x = Math.min(maxX, Math.max(-maxX, next.x));
      y = Math.min(maxY, Math.max(-maxY, next.y));
    }

    const value = { scale, x, y };
    transformRef.current = value;
    setTransform(value);
  }, []);

  // Wheel / trackpad pinch zoom (must be non-passive to block page zoom)
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const current = transformRef.current;
      apply({ ...current, scale: current.scale * Math.exp(-e.deltaY * 0.0025) });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [apply]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setIsDragging(true);

    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: distance(a, b), scale: transformRef.current.scale };
      pan.current = null;
      tap.current = null;
    } else if (pointers.current.size === 1) {
      const start = { x: e.clientX, y: e.clientY };
      pan.current = { start, origin: { x: transformRef.current.x, y: transformRef.current.y } };
      tap.current = { start, time: Date.now() };
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const ratio = distance(a, b) / pinch.current.dist;
      apply({ ...transformRef.current, scale: pinch.current.scale * ratio });
      return;
    }

    // Only pan while zoomed in; at 1x the gesture is treated as a swipe on release
    if (pointers.current.size === 1 && pan.current && transformRef.current.scale > 1) {
      apply({
        scale: transformRef.current.scale,
        x: pan.current.origin.x + (e.clientX - pan.current.start.x),
        y: pan.current.origin.y + (e.clientY - pan.current.start.y),
      });
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const hadOnePointer = pointers.current.size === 1;
    pointers.current.delete(e.pointerId);

    if (pointers.current.size === 0) {
      setIsDragging(false);
      pan.current = null;
      pinch.current = null;

      if (hadOnePointer && tap.current) {
        const dx = e.clientX - tap.current.start.x;
        const dy = e.clientY - tap.current.start.y;
        const isTap = Math.hypot(dx, dy) < TAP_MOVE_LIMIT && Date.now() - tap.current.time < 300;

        if (isTap) {
          const now = Date.now();
          if (now - lastTap.current < DOUBLE_TAP_MS) {
            lastTap.current = 0;
            apply(
              transformRef.current.scale > 1
                ? { scale: 1, x: 0, y: 0 }
                : { scale: DOUBLE_TAP_SCALE, x: 0, y: 0 },
            );
          } else {
            lastTap.current = now;
          }
        } else if (
          transformRef.current.scale === 1 &&
          Math.abs(dx) > SWIPE_DISTANCE &&
          Math.abs(dx) > Math.abs(dy)
        ) {
          if (dx < 0) onNext();
          else onPrev();
        }
      }

      tap.current = null;
      if (transformRef.current.scale < 1.05) apply({ scale: 1, x: 0, y: 0 });
    } else if (pointers.current.size === 1) {
      // One finger lifted after a pinch: keep panning with the other, no swipe
      const [rest] = [...pointers.current.values()];
      pan.current = {
        start: rest,
        origin: { x: transformRef.current.x, y: transformRef.current.y },
      };
      pinch.current = null;
      tap.current = null;
    }
  };

  const isZoomed = transform.scale > 1;

  return (
    <div
      ref={frameRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={`touch-none overflow-hidden rounded-lg border border-[#DAB025]/30 shadow-2xl select-none ${
        isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
      }`}
    >
      <div
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transition: isDragging ? "none" : "transform 0.2s ease-out",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={1920}
          height={1080}
          draggable={false}
          className="block h-auto max-h-[78vh] w-auto max-w-full object-contain"
          onError={e => {
            if (item.fallback && !e.currentTarget.src.endsWith(item.fallback)) {
              e.currentTarget.src = item.fallback;
            }
          }}
        />
      </div>
    </div>
  );
};

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

    // Stop the browser from zooming the whole page (iOS pinch, Ctrl + wheel)
    const preventGesture = (e: Event) => e.preventDefault();
    const preventCtrlWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    document.addEventListener("wheel", preventCtrlWheel, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("wheel", preventCtrlWheel);
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex touch-none items-center justify-center bg-[#09113F]/90 p-4 backdrop-blur-md"
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
            className="flex max-h-full max-w-5xl flex-col items-center gap-4"
            onClick={e => e.stopPropagation()}
          >
            <ZoomableImage item={item} onPrev={onPrev} onNext={onNext} />

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
