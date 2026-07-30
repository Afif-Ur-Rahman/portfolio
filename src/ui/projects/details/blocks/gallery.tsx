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

export const Gallery = ({ gallery }: GalleryProps) => {
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
          className="rounded-xl overflow-hidden border border-[#DAB025]/30 shadow-2xl bg-[#0d1650]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0a1240] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>

          <div className="relative w-full bg-[#0a1240] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
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
