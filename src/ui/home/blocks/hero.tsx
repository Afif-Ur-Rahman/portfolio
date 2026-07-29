"use client";

import { handleNavClick } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/banner.png"
        alt="The Conqueror Developers Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-16">
        <div className="max-w-3xl">
          <h1
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
            style={{
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Welcome to{" "}
            <TypeAnimation
              sequence={["The Conqueror Developers", 1000]}
              wrapper="span"
              speed={45}
              cursor={false}
              repeat={0}
              className="text-[#DAB025]"
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              }}
            />
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] md:text-xl">
            We are a trusted name in property development and construction,
            delivering thoughtfully designed residential and commercial projects
            built on quality, transparency, and lasting value.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="rounded-md bg-amber-500 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              Explore Now
            </Link>

            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="rounded-md border border-white px-8 py-3 font-semibold text-white transition hover:bg-[#0A4A8A] hover:border-[#0A4A8A]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
