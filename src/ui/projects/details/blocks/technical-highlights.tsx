import { CheckCircle2 } from "lucide-react";

type ProjectTechnicalHighlightsProps = {
  highlights: string[];
};

export const TechnicalHighlights = ({ highlights }: ProjectTechnicalHighlightsProps) => {
  return (
    <section id="highlights" className="w-full bg-[#09113F]/3 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#DAB025] uppercase">
            Under The Hood
          </span>
          <h2 className="text-3xl font-bold text-[#003B73] md:text-4xl">Technical Highlights</h2>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map(point => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#DAB025]" />
              <span className="text-sm leading-6 text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
