"use client";

import { FloatingIcons } from "@/components";
import { AboutMe, Hero, Skills } from "./blocks";
import { useTrackVisitor } from "@/hooks";
import { Projects } from "../projects";
import { Suggestions } from "../suggestions";

export const Home = () => {
  const { isContact, setIsContact } = useTrackVisitor();

  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Suggestions />
      <FloatingIcons isContact={isContact} setIsContact={setIsContact} />
    </>
  );
};
