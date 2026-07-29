"use client";

import { handleNavClick } from "@/utils";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ParticleBackground } from "@/components";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#09113F]"
    >
      <ParticleBackground />

      {/* Soft glow accents on top of the particles */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(218,176,37,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(10,74,138,0.35),transparent_40%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center">
        <span className="mb-4 inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
          Hi, I&apos;m Afif Ur Rahman
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          <span className="block">I build</span>
          <span className="mx-auto mt-2 flex h-[2.4em] w-full max-w-[19ch] items-center justify-center text-center md:h-[1.3em] md:max-w-[20ch]">
            <TypeAnimation
              sequence={[
                "Full-Stack Web Apps",
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
              className="text-[#DAB025]"
            />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
          A full-stack developer specializing in Next.js, TypeScript, and
          Node.js — turning ideas into fast, reliable, production-ready
          applications from database to UI.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            onClick={(e) => handleNavClick(e, "#projects")}
            className="rounded-md bg-amber-500 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            View My Work
          </Link>

          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-white px-8 py-3 font-semibold text-white transition hover:bg-[#0A4A8A] hover:border-[#0A4A8A]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
