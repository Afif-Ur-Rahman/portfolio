"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ParticleBackground, Skeleton, VisitorCounter } from "@/components";
import { useVisitorStore } from "@/store";

type ProjectHeaderProps = {
  title: string;
  description: string;
  image: string;
  fallback?: string;
  tags: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
};

export const Hero = ({
  title,
  description,
  image,
  fallback,
  tags,
  liveUrl,
  playStoreUrl,
  appStoreUrl,
}: ProjectHeaderProps) => {
  const { projectCounts: count, isLoading: isCountLoading } = useVisitorStore();
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
            <VisitorCounter
              count={count}
              label="No. of people visited this project"
              isLoading={isCountLoading}
            />

            <h1 className="font-display mt-4 text-5xl leading-[1.05] font-normal tracking-tight text-white md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-[#DAB025]/30 bg-[#DAB025]/10 px-3 py-1 font-mono text-xs font-medium text-[#DAB025]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#DAB025] px-6 py-3 text-sm font-medium tracking-wide text-[#09113F] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_2px_rgba(218,176,37,0.4)]"
                >
                  Visit Live Site
                  <ExternalLink size={15} />
                </Link>
              )}

              {playStoreUrl && (
                <Link
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:-translate-y-0.5"
                >
                  <Image
                    src="/assets/svgs/google-store.svg"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </Link>
              )}

              {appStoreUrl && (
                <Link
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:-translate-y-0.5"
                >
                  <Image
                    src="/assets/svgs/apple-store.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </Link>
              )}
            </div>
          </div>

          <div className="relative aspect-16/14 w-full overflow-hidden rounded-xl border border-[#DAB025]/30 shadow-2xl md:max-h-100 lg:max-h-none">
            {isLoading && <Skeleton loaderClassName="h-8 w-8 sm:h-10 sm:w-10" />}

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
              onError={e => {
                if (fallback && !e.currentTarget.src.endsWith(fallback)) {
                  e.currentTarget.src = fallback;
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
