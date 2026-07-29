"use client";

import CountUp from "react-countup";
import { COUNTS } from "./constants";

export const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-32 bg-white">
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <div className="flex flex-col gap-4">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            About Me
          </span>

          <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
            Full-Stack Developer
          </h2>

          <h3 className="text-2xl font-semibold text-[#DAB025]">
            Based in Lahore, Pakistan
          </h3>

          {/* TODO: personalize these paragraphs */}
          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            I design and build complete web applications end-to-end — from
            database schema and API architecture to polished, responsive
            interfaces. My recent work includes a full real estate management
            platform built with Next.js, TypeScript, Node.js, Express, and
            MongoDB.
          </p>

          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            I care about clean, maintainable code and understanding how things
            work under the hood — I regularly implement algorithms and data
            structures by hand rather than leaning on shortcuts, because I
            believe strong fundamentals lead to better engineering decisions.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-6 rounded-2xl bg-[#003B73] py-8 text-center md:grid-cols-4">
            {COUNTS.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-xl font-bold text-[#DAB025] md:text-5xl">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
                <p className="mt-2 text-sm font-medium text-white md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
