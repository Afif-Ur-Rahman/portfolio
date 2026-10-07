"use client";

import { PROJECTS } from "./constants";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-8 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl leading-[1.05] font-normal tracking-tight text-[#003B73] md:text-6xl">
            Featured Work
          </h2>

          <p className="text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            A selection of projects I&apos;ve built — from polished user interfaces and responsive
            layouts to scalable backends, <span className="font-semibold text-[#003B73]">APIs</span>
            , and databases. Each one prioritizes clean architecture, performance, and
            maintainability so the result is production-ready and future-proof.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
