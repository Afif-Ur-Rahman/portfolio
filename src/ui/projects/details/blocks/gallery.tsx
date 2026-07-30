"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

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
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const active = gallery[activeIndex];

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setActive([index, index > activeIndex ? 1 : -1]);
  };

  useEffect(() => {
    if (gallery.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setActive(([prevIndex]) => {
        const nextIndex = (prevIndex + 1) % gallery.length;
        return [nextIndex, 1];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length, isHovered, activeIndex]);

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

        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {gallery.map((item, index) => (
            <button
              key={item.title}
              onClick={() => handleSelect(index)}
              className={cn(
                "relative shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border whitespace-nowrap",
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
            isMobile ? "max-w-xs mx-auto" : "",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isMobile ? (
            <div className="relative bg-[#0a1240] border-b border-white/10">
              {/* Notch */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-28 bg-[#DAB025]/40 rounded-2xl" />

              <div className="flex items-center justify-between px-5 py-2.5">
                <span className="text-white/90 text-xs font-semibold tracking-wide">
                  {`${new Date().getHours().toString().padStart(2, "0")} : ${new Date().getMinutes().toString().padStart(2, "0")}`}
                </span>
                <div className="flex items-center gap-1.5">
                  {/* Signal */}
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.75 h-1.5 rounded-sm bg-white/80" />
                    <span className="w-0.75 h-2 rounded-sm bg-white/80" />
                    <span className="w-0.75 h-2.5 rounded-sm bg-white/80" />
                    <span className="w-0.75 h-3 rounded-sm bg-white/80" />
                  </div>
                  {/* WiFi */}
                  <svg
                    className="w-3.5 h-3.5 text-white/80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 18c.8 0 1.5.7 1.5 1.5S12.8 21 12 21s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-4.2-3.3c1.1-1.1 2.6-1.7 4.2-1.7s3.1.6 4.2 1.7l-1.4 1.4c-.8-.8-1.8-1.2-2.8-1.2s-2 .4-2.8 1.2l-1.4-1.4zm-2.9-2.9C7.1 9.6 9.4 8.5 12 8.5s4.9 1.1 7.1 3.3l-1.4 1.4C15.9 11.4 14 10.5 12 10.5s-3.9.9-5.7 2.7l-1.4-1.4z" />
                  </svg>
                  {/* Battery */}
                  <div className="flex items-center gap-0.5">
                    <div className="w-6 h-3 rounded-[3px] border border-white/80 p-px">
                      <div className="h-full w-4/5 rounded-[1px] bg-white/80" />
                    </div>
                    <div className="w-0.5 h-1.5 rounded-r-sm bg-white/80" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop browser chrome */
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0a1240] border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
          )}

          {/* Image container */}
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
                    "w-full h-full",
                    isMobile ? "rounded-b-xl" : "h-auto",
                  )}
                  priority={activeIndex === 0}
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
