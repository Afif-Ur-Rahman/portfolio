"use client";

import { FloatingIcons } from "@/components";
import { Projects } from "@/ui/projects";
import { AboutMe, Hero, Skills } from "./blocks";
import { useTrackVisitor } from "@/hooks";

export const Home = () => {
  const { count } = useTrackVisitor();

  return (
    <>
      <Hero count={count} />
      <AboutMe />
      <Skills />
      <Projects />
      <FloatingIcons />
    </>
  );
};
