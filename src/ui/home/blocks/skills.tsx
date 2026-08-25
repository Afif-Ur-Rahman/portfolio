"use client";

import { SKILL_GROUPS } from "./constants";

export const Skills = () => {
  return (
    <section id="skills" className="w-full scroll-mt-8 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 p-6">
        <div className="flex flex-col gap-4">
          <span className="inline-block w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#DAB025] uppercase">
            Skills
          </span>

          <h2 className="text-4xl leading-tight font-bold text-[#003B73] md:text-5xl">
            Tools & Technologies
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            <span className="font-semibold text-[#003B73]">Tools</span> and technologies I use to
            build reliable, full‑stack applications — from crafting intuitive user interfaces and
            responsive layouts to designing scalable backend systems,{" "}
            <span className="font-semibold text-[#003B73]">APIs</span>, and databases.{" "}
            <span className="font-semibold text-[#003B73]">My</span> stack emphasizes clean
            architecture, performance, and maintainability, ensuring every project is
            production‑ready and future‑proof.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(group => (
            <div
              key={group.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#DAB025] hover:shadow-xl"
            >
              <h3 className="mb-5 text-lg font-bold text-[#0A4A8A]">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map(item => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      title={item.name}
                      className="group flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DAB025] hover:shadow-sm"
                    >
                      <Icon className="h-4 w-4 shrink-0" style={{ color: item.color }} />
                      <span className="text-xs font-medium text-[#09113F]">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
