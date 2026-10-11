import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  fallback?: string;
};

const AUTOPLAY_MS = 3000;

export const useGallery = (gallery: GalleryItem[]) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = gallery[activeIndex];
  const isPaused = isHovered || isDragging || lightboxOpen;

  // Keep React state in sync with Embla
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    const onDown = () => setIsDragging(true);
    const onUp = () => setIsDragging(false);

    emblaApi.on("select", onSelect).on("reInit", onSelect);
    emblaApi.on("pointerDown", onDown).on("pointerUp", onUp);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
      emblaApi.off("pointerDown", onDown).off("pointerUp", onUp);
    };
  }, [emblaApi]);

  const handleSelect = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  // Wrap around even if Embla can't loop (e.g. very few slides)
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    else emblaApi.scrollTo(0);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollPrev()) emblaApi.scrollPrev();
    else emblaApi.scrollTo(gallery.length - 1);
  }, [emblaApi, gallery.length]);

  // Autoplay (restarts after every slide change / un-pause)
  useEffect(() => {
    if (!emblaApi || gallery.length <= 1 || isPaused) return;
    const id = setInterval(scrollNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [emblaApi, gallery.length, isPaused, activeIndex, scrollNext]);

  // Keep the active tab centered
  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    const container = activeTab?.parentElement;
    if (!activeTab || !container) return;

    container.scrollTo({
      left: activeTab.offsetLeft - container.clientWidth / 2 + activeTab.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return {
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
  };
};
