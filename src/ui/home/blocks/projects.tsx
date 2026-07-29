"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "./constants";

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            Projects
          </span>
          <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
            Featured Work
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-gray-600">
            A selection of projects I&apos;ve built and shipped.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-[#09113F]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003B73]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#DAB025]/10 px-3 py-1 text-xs font-semibold text-[#DAB025]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#0A4A8A] hover:text-[#DAB025] hover:underline"
                    >
                      <Github size={16} />
                      Source Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
