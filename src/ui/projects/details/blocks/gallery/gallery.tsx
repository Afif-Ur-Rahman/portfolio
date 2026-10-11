"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { GalleryLightbox, GallerySlide, GalleryTabs } from "./blocks";
import { GalleryItem, useGallery } from "./useGallery";

type GalleryProps = {
  gallery: GalleryItem[];
  isMobile?: boolean;
};

const arrowClass =
  "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#DAB025]/40 bg-[#09113F]/80 text-[#DAB025] backdrop-blur transition-colors hover:bg-[#DAB025] hover:text-[#09113F] sm:flex";

export const Gallery = ({ gallery, isMobile = false }: GalleryProps) => {
  const {
    emblaRef,
    activeIndex,
    active,
    isPaused,
    setIsHovered,
    lightboxOpen,
    setLightboxOpen,
    handleSelect,
    scrollNext,
    scrollPrev,
    tabRefs,
  } = useGallery(gallery);

  return (
    <section id="gallery" className="w-full bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-3xl leading-[1.05] font-normal tracking-tight text-[#003B73] md:text-6xl">
            Gallery
          </h2>
        </div>
        <p className="mb-8 max-w-2xl text-base text-[#09113F]/60 md:text-lg">
          Explore the project screen by screen.
        </p>

        <GalleryTabs
          gallery={gallery}
          activeIndex={activeIndex}
          isHovered={isPaused}
          onSelect={handleSelect}
          tabRefs={tabRefs}
        />

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={emblaRef}
            tabIndex={0}
            aria-roledescription="carousel"
            onKeyDown={e => {
              if (e.key === "ArrowLeft") scrollPrev();
              if (e.key === "ArrowRight") scrollNext();
            }}
            className="overflow-hidden py-4 outline-none"
          >
            <div className="-ml-4 flex cursor-grab touch-pan-y touch-pinch-zoom active:cursor-grabbing">
              {gallery.map((item, index) => (
                <GallerySlide
                  key={item.title}
                  item={item}
                  index={index}
                  isMobile={isMobile}
                  isActive={index === activeIndex}
                  onSelect={handleSelect}
                  onExpand={() => setLightboxOpen(true)}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous"
            className={`${arrowClass} left-2`}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next"
            className={`${arrowClass} right-2`}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-3 flex items-start justify-between gap-6">
          <div className="min-h-14 flex-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-[15px] leading-6 text-[#09113F]/70"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <span className="shrink-0 font-mono text-xs tracking-wider text-[#09113F]/40">
            <span className="text-[#DAB025]">{String(activeIndex + 1).padStart(2, "0")}</span>
            {" / "}
            {String(gallery.length).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-2 text-center font-mono text-[11px] tracking-wider text-[#09113F]/35 uppercase">
          <span className="sm:hidden">Swipe · Tap to expand</span>
          <span className="hidden sm:inline">Drag · Arrow keys · Click to expand</span>
        </p>
      </div>

      <GalleryLightbox
        item={active}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </section>
  );
};
