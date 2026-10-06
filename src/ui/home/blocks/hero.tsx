"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { ParticleBackground, Skeleton, VisitorCounter } from "@/components";
import { useVisitorStore } from "@/store";
import { handleNavClick } from "@/utils";

export const Hero = () => {
  const { siteCount: count, isLoading: isCountLoading } = useVisitorStore();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#09113F]"
    >
      <ParticleBackground variant="hero" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(218,176,37,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(10,74,138,0.35),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:justify-between lg:pt-16">
        <div className="flex w-full flex-1 shrink-0 flex-col items-center justify-center lg:w-auto">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#DAB025]/30 shadow-[0_0_60px_rgba(218,176,37,0.25)] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            {isLoading && <Skeleton loaderClassName="h-10 w-10 sm:h-12 sm:w-12" />}

            <Image
              src="https://res.cloudinary.com/yeepb6vh/image/upload/f_auto,q_auto,w_768/v1790415049/afif.jpg"
              alt="Afif Ur Rahman"
              fill
              sizes="(max-width: 1024px) 320px, 384px"
              className={`object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              priority
              onLoad={() => setIsLoading(false)}
              onError={e => {
                if (!e.currentTarget.src.endsWith("/images/profile.jpg")) {
                  e.currentTarget.src = "/images/profile.jpg";
                }
              }}
            />
          </div>

          <div className="mt-5">
            <VisitorCounter count={count} isLoading={isCountLoading} />
          </div>
        </div>

        <div className="flex flex-2 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-5 font-mono text-lg tracking-tight text-[#DAB025]">
            Hi, I&apos;m Afif Ur Rahman
          </p>

          <h1 className="font-display max-w-2xl text-5xl leading-[1.08] font-normal tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block">I build</span>
            <span className="my-2 flex h-[2.3em] w-full items-center justify-center text-center md:h-[1.2em] md:max-w-[22ch] lg:justify-start lg:text-left">
              <TypeAnimation
                sequence={[
                  "Full-Stack Web Apps",
                  1500,
                  "MERN stack Projects",
                  1500,
                  "Next.js Applications",
                  1500,
                  "Scalable REST APIs",
                  1500,
                  "Real-World Products",
                  1500,
                ]}
                wrapper="span"
                speed={45}
                deletionSpeed={65}
                cursor
                repeat={Infinity}
                className="text-[#DAB025] italic"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
            A full-stack developer specializing in Next.js, TypeScript, and Node.js — turning ideas
            into fast, reliable, production-ready applications from database to UI.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#projects"
              onClick={e => handleNavClick(e, "#projects")}
              className="rounded-md bg-[#DAB025] px-8 py-3 text-sm font-medium tracking-wide text-[#09113F] transition hover:bg-[#c49a1f] hover:shadow-[0_0_20px_rgba(218,176,37,0.4)]"
            >
              View My Work
            </Link>

            <a
              href="/assets/Fullstack-Afif-Ur-Rahman.pdf"
              download
              className="rounded-md border border-[#DAB025]/60 px-8 py-3 text-sm font-medium tracking-wide text-[#DAB025] transition hover:border-[#DAB025] hover:bg-[#DAB025]/10 hover:text-[#E8C84A]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
