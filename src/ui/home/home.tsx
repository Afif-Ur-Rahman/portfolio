"use client";

import { AboutUs, FloatingIcons, Hero, Projects, Stats } from "./blocks";

export const Home = () => {
  return (
    <>
      <Hero />
      <FloatingIcons />
      <div className="flex flex-col gap-10 py-20">
        <Stats />
        <AboutUs />
        <Projects />
      </div>
    </>
  );
};
