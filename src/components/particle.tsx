"use client";

import Particles from "@tsparticles/react";
import { useMemo } from "react";

import type { ISourceOptions } from "@tsparticles/engine";

export const ParticleBackground = ({ variant = "hero" }: { variant?: "hero" | "footer" }) => {
  const options: ISourceOptions = useMemo(() => {
    const colors =
      variant === "footer" ? ["#BFA020", "#073A6A", "#FFFFFF"] : ["#DAB025", "#0A4A8A", "#FFFFFF"];

    return {
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 70,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: colors },
        opacity: { value: { min: 0.2, max: 0.6 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 140,
          color: colors[0],
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: { grab: { distance: 160, links: { opacity: 0.5 } } },
      },
      detectRetina: true,
    };
  }, [variant]);

  return (
    <Particles
      id={`particles-${variant}`}
      options={options}
      className="absolute inset-0 h-full w-full"
    />
  );
};
