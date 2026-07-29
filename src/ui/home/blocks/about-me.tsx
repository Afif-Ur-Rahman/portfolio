"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { COUNTS } from "./constants";

export const AboutUs = () => {
  return (
    <section id="about" className="bg-white scroll-mt-32">
      <div className="flex flex-col items-center gap-14 lg:flex-row mx-auto max-w-7xl mb-6 px-6">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
            About Me
          </span>

          <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
            The Conqueror Developers
          </h2>

          <h3 className="text-2xl font-semibold text-[#DAB025]">
            With Guaranteed On-Time Completion
          </h3>

          <p className="text-lg leading-8 text-gray-600">
            Driven by trust, innovation, and excellence, The Conqueror
            Developers has established itself as a leading real estate brand in
            Bahria Town Lahore.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            We focus on creating modern residential and commercial spaces that
            reflect quality craftsmanship, contemporary architecture, and
            guaranteed on-time delivery—providing our clients with exceptional
            lifestyles and high-return investment opportunities.
          </p>

          <div>
            <Link
              href="#projects"
              className="rounded-lg bg-[#003B73] px-7 py-3 font-semibold text-white transition hover:bg-[#DAB025]"
            >
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-[#003B73] py-8 text-center">
            {COUNTS.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-xl font-bold text-[#DAB025] md:text-5xl">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>

                <p className="mt-2 text-sm font-medium text-white md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-1024/1535 w-full overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about.png"
              alt="The Conqueror Developers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
