"use client";

import { FloatingIcons } from "@/components";
import { Projects } from "@/ui/projects";
import { AboutMe, Hero, Skills } from "./blocks";

export const Home = () => {
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
