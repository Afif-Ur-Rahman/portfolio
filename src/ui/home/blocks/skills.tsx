"use client";

import { SKILL_GROUPS } from "./constants";

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            Skills
          </span>
          <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
            Tech Stack
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            Tools and technologies I use to build reliable, full-stack
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#DAB025] hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#DAB025]/10 transition-colors duration-300 group-hover:bg-[#DAB025]">
                  <Icon className="h-7 w-7 text-[#DAB025] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="text-lg font-bold text-[#0A4A8A]">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#09113F]/5 px-3 py-1 text-xs font-medium text-[#09113F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
