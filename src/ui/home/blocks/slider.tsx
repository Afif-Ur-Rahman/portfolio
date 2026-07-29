"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Slider = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {images.map((src, i) => {
            const isActive = i === selectedIndex + 1;

            return (
              <div
                key={i}
                className="shrink-0 basis-full px-2 sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ease-in-out ${
                    isActive
                      ? "aspect-2/3 scale-90 z-10"
                      : "aspect-2/3 scale-80 opacity-70"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Zaitoon Heights"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex ? "w-6 bg-[#DAB025]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
