"use client";

import { FEATURES, ZAITOON_HEIGHT } from "./constants";
import { Slider } from "./slider";

export const Projects = () => {
  return (
    <section id="projects" className="bg-white scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-4">
            <span className="w-fit inline-block rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DAB025]">
              Our Projects
            </span>

            <h2 className="text-4xl font-bold leading-tight text-[#003B73] md:text-5xl">
              Zaitoon Heights
            </h2>

            <h3 className="text-2xl font-semibold text-[#DAB025]">
              A New Standard of Living
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              Zaitoon Heights is a premium residential development by The
              Conqueror Developers, crafted to offer comfort, elegance, and
              lasting value to every resident.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
              {FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DAB025]/10 transition-colors duration-300 group-hover:bg-[#DAB025]">
                      <Icon className="h-6 w-6 text-[#DAB025] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003B73]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Slider images={ZAITOON_HEIGHT} />
        </div>
      </div>
    </section>
  );
};
