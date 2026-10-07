import { CheckCircle2 } from "lucide-react";

type ProjectTechnicalHighlightsProps = {
  highlights: string[];
};

export const TechnicalHighlights = ({ highlights }: ProjectTechnicalHighlightsProps) => {
  return (
    <section id="highlights" className="w-full bg-[#09113F]/3 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-5xl leading-[1.05] font-normal tracking-tight text-[#003B73] md:text-6xl">
            Technical Highlights
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map(point => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#DAB025]" />
              <span className="text-[15px] leading-6 text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
