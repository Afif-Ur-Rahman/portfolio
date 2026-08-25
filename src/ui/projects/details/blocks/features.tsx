type Feature = {
  label: string;
  detail: string;
};

type ProjectFeaturesProps = {
  features: Feature[];
};

export const Features = ({ features }: ProjectFeaturesProps) => {
  return (
    <section id="features" className="w-full bg-[#09113F]/3 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-[#DAB025]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#DAB025] uppercase">
            What It Does
          </span>
          <h2 className="text-3xl font-bold text-[#003B73] md:text-4xl">Core Features</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => (
            <div
              key={feature.label}
              className="rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#DAB025] hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-[#003B73]">{feature.label}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
