"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";
import { Battery, Mac, Signal, Wifi } from "@/components/svgs";
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            A Look Inside
          </span>
          <h2 className="text-3xl font-bold text-[#003B73] md:text-4xl">
            Gallery
          </h2>
        </div>
        <p className="text-[#09113F]/60 mb-8 max-w-2xl">
          Explore the project screen by screen.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
          {gallery.map((item, index) => (
            <button
              key={item.title}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => handleSelect(index)}
              className={cn(
                "relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border whitespace-nowrap cursor-pointer",
                index === activeIndex
                  ? "text-[#09113F] border-[#DAB025]"
                  : "bg-transparent text-[#09113F]/70 border-[#09113F]/20 hover:border-[#DAB025]/60 hover:text-[#09113F]",
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
            "rounded-xl overflow-hidden border border-[#DAB025]/30 shadow-2xl bg-[#0d1650]",
            isMobile ? "max-w-xs mx-auto" : "max-h-145",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isMobile ? (
            <div className="relative bg-[#0a1240] border-b border-white/10">
              <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-28 bg-[#DAB025]/40 rounded-2xl" />

              <div className="flex items-center justify-between px-5 py-2.5">
                <span className="text-white/90 text-xs font-semibold tracking-wide">
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
              "relative w-full bg-[#0a1240] overflow-hidden",
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
                className="w-full h-full"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1920}
                  height={1080}
                  className={cn(
                    "w-full h-full transition-opacity duration-500",
                    isMobile ? "rounded-b-xl" : "h-auto",
                    isLoading ? "opacity-0" : "opacity-100",
                  )}
                  priority={activeIndex === 0}
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="text-[#09113F]/70 mt-2">{active.description}</p>
      </div>
    </section>
  );
};
