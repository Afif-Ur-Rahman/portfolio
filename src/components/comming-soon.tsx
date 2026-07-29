"use client";

import { Clock3, Sparkles } from "lucide-react";

export const CommingSoon = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(9,17,63,0.20),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center m-4">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-[#DAB025]/20 bg-[#DAB025]/10 shadow-xl shadow-[#DAB025]/10">
          <Clock3 className="h-11 w-11 text-[#DAB025]" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#DAB025]">
          <Sparkles className="h-3.5 w-3.5" />
          Work in Progress
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
          <span className="bg-linear-to-r from-[#DAB025] to-[#DAB025]/60 bg-clip-text text-transparent">
            {" "}
            Coming Soon
          </span>
        </h1>

        {description && (
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            {description}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Status
            </p>
            <p className="mt-1 text-lg font-semibold text-[#DAB025]">
              In Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Expected
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Available Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
