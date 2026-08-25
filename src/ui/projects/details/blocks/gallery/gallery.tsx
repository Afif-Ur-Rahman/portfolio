"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Battery, Mac, Signal, Wifi } from "@/components/svgs";
import { cn } from "@/utils";

import { GalleryItem, useGallery } from "./useGallery";

type GalleryProps = {
  gallery: GalleryItem[];
  isMobile?: boolean;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export const Gallery = ({ gallery, isMobile = false }: GalleryProps) => {
  const {
    activeIndex,
    direction,
    active,
    isLoading,
    setIsHovered,
    setIsLoading,
    handleSelect,
    tabRefs,
  } = useGallery(gallery);

  return (
    <section id="gallery" className="w-full bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#DAB025] uppercase">
            A Look Inside
          </span>
          <h2 className="text-3xl font-bold text-[#003B73] md:text-4xl">Gallery</h2>
        </div>
        <p className="mb-8 max-w-2xl text-[#09113F]/60">Explore the project screen by screen.</p>

        {/* Tabs */}
        <div className="scrollbar-hide mb-4 flex gap-2 overflow-x-auto pb-1">
          {gallery.map((item, index) => (
            <button
              key={item.title}
              ref={el => {
                tabRefs.current[index] = el;
              }}
              onClick={() => handleSelect(index)}
              className={cn(
                "relative shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                index === activeIndex
                  ? "border-[#DAB025] text-[#09113F]"
                  : "border-[#09113F]/20 bg-transparent text-[#09113F]/70 hover:border-[#DAB025]/60 hover:text-[#09113F]",
              )}
            >
              {index === activeIndex && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-[#DAB025]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          ))}
        </div>

        <div
          className={cn(
            "overflow-hidden rounded-xl border border-[#DAB025]/30 bg-[#0d1650] shadow-2xl",
            isMobile ? "mx-auto max-w-xs" : "max-h-145",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isMobile ? (
            <div className="relative border-b border-white/10 bg-[#0a1240]">
              <div className="absolute top-2 left-1/2 h-4 w-18 -translate-x-1/2 rounded-2xl bg-[#DAB025]/40" />

              <div className="flex items-center justify-between px-5 py-2.5">
                <span className="text-xs font-semibold tracking-wide text-white/90">
                  {`${new Date().getHours().toString().padStart(2, "0")} : ${new Date().getMinutes().toString().padStart(2, "0")}`}
                </span>
                <div className="flex items-center gap-1.5">
                  <Signal />
                  <Wifi />
                  <Battery />
                </div>
              </div>
            </div>
          ) : (
            <Mac />
          )}

          <div
            className={cn(
              "relative w-full overflow-hidden bg-[#0a1240]",
              isMobile ? "h-130" : "h-auto",
            )}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full w-full"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1920}
                  height={1080}
                  className={cn(
                    "h-full w-full transition-opacity duration-500",
                    isMobile ? "rounded-b-xl" : "h-auto",
                    isLoading ? "opacity-0" : "opacity-100",
                  )}
                  priority={activeIndex === 0}
                  onLoad={() => setIsLoading(false)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-2 text-[#09113F]/70">{active.description}</p>
      </div>
    </section>
  );
};
