"use client";

import { STATS } from "./constants";

export const Stats = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#DAB025] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#DAB025]/10 transition-colors duration-300 group-hover:bg-[#DAB025]">
                  <Icon className="h-8 w-8 text-[#DAB025] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="text-3xl font-bold leading-tight text-[#0A4A8A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
