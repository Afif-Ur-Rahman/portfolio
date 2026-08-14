"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ParticleBackground, Skeleton, VisitorCounter } from "@/components";
import { useState } from "react";

type ProjectHeaderProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  count: number | null;
};

export const Hero = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  count,
}: ProjectHeaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="case-study"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#09113F]"
    >
      <ParticleBackground variant="hero" />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#DAB025 1px, transparent 1px), linear-gradient(90deg, #DAB025 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
                Case Study
              </span>

              <VisitorCounter
                count={count}
                label="No. of people visited this project"
              />
            </div>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#DAB025]/30 bg-[#DAB025]/10 px-3 py-1 text-xs font-semibold text-[#DAB025]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#DAB025] px-6 py-3 text-sm font-bold text-[#09113F] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_2px_rgba(218,176,37,0.4)]"
              >
                Visit Live Site
                <ExternalLink size={15} />
              </Link>
            )}
          </div>

          <div className="relative w-full overflow-hidden rounded-xl border border-[#DAB025]/30 shadow-2xl aspect-16/14 md:max-h-100 lg:max-h-none">
            {isLoading && (
              <Skeleton loaderClassName="h-8 w-8 sm:h-10 sm:w-10" />
            )}

            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              priority
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
