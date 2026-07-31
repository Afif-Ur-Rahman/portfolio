import { useState, useEffect, useRef } from "react";

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

export const useGallery = (gallery: GalleryItem[]) => {
  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const active = gallery[activeIndex];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelect = (index: number) => {
    if (index === activeIndex) return;
    setActive([index, index > activeIndex ? 1 : -1]);
  };

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (!activeTab) return;

    const container = activeTab.parentElement;
    if (!container) return;

    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;
    const containerWidth = container.clientWidth;
    const targetScrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    if (gallery.length <= 1 || isHovered || isLoading) return;

    const interval = setInterval(() => {
      setActive(([prevIndex]) => {
        const nextIndex = (prevIndex + 1) % gallery.length;
        return [nextIndex, 1];
      });
      setIsLoading(true);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length, isHovered, activeIndex, isLoading]);

  return {
    activeIndex,
    direction,
    active,
    isLoading,
    isHovered,
    setIsHovered,
    setIsLoading,
    handleSelect,
    tabRefs,
  };
};
