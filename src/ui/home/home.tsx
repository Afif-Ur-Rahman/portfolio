"use client";

import { FloatingIcons } from "@/components";
import { Projects } from "@/ui/projects";
import { AboutMe, Hero, Skills } from "./blocks";
import { useTrackVisitor } from "@/hooks";

export const Home = () => {
  useTrackVisitor();

  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <FloatingIcons />
    </>
  );
};
