"use client";

import { PROJECTS } from "../constants";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            Projects
          </span>

          <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
            Featured Work
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            A selection of projects I&apos;ve built — from polished user
            interfaces and responsive layouts to scalable backends,{" "}
            <span className="font-semibold text-[#003B73]">APIs</span>, and
            databases. Each one prioritizes clean architecture, performance, and
            maintainability so the result is production-ready and future-proof.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
