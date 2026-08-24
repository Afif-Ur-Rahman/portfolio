"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ParticleBackground } from "@/components";

export const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-[#09113F]">
      <ParticleBackground variant="footer" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(218,176,37,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(10,74,138,0.35),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Want to see more of my work?
        </h2>
        <Link
          href="/#projects"
          className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#DAB025] px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#DAB025] hover:text-[#003B73]"
        >
          <ArrowLeft size={15} />
          Back to All Projects
        </Link>
      </div>
    </section>
  );
};
