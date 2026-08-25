"use client";

import { FloatingIcons } from "@/components";
import { useTrackVisitor } from "@/hooks";

import { AboutMe, Hero, Skills } from "./blocks";

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
