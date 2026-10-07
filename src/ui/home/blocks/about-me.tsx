"use client";

import CountUp from "react-countup";

import { COUNTS, QUICK_FACTS, TECH_ICONS } from "./constants";

export const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-8 bg-white">
      <div className="mx-auto mb-6 max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="min-w-0 flex-2">
              <h2 className="font-display text-3xl leading-[1.05] font-normal tracking-tight text-[#003B73] md:text-6xl">
                Full-Stack Developer
              </h2>

              <h3 className="mt-2 text-xl font-medium text-[#DAB025] md:text-2xl">
                Based in Lahore, Pakistan
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                I design and build complete web applications end-to-end — from database schema and
                API architecture to polished, responsive interfaces. My recent work includes a full
                real estate management platform built with Next.js, TypeScript, Node.js, Express,
                and MongoDB.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                I care about clean, maintainable code and understanding how things work under the
                hood — I regularly implement algorithms and data structures by hand rather than
                leaning on shortcuts, because I believe strong fundamentals lead to better
                engineering decisions.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:w-72 lg:shrink-0">
              {QUICK_FACTS.map(fact => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="group flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DAB025]/10 transition-colors duration-300 group-hover:bg-[#DAB025]">
                      <Icon className="h-5 w-5 text-[#DAB025] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-wider text-gray-400 uppercase">
                        {fact.label}
                      </p>
                      <p className="mt-0.5 text-base font-medium text-[#003B73]">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-2">
            <p className="mb-4 text-center font-mono text-xs tracking-wider text-gray-400 uppercase lg:text-left">
              Core Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-start">
              {TECH_ICONS.map(tech => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <Icon
                      className="h-10 w-10 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-6 rounded-2xl bg-[#003B73] py-8 text-center md:grid-cols-4">
            {COUNTS.map(stat => (
              <div key={stat.label}>
                <h3 className="font-display text-3xl font-normal text-[#DAB025] md:text-6xl">
                  <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                </h3>
                <p className="mt-2 text-sm font-medium text-white md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
