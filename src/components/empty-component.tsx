interface CustomerProps {
  heading?: string;
  description?: string;
  icon: React.ElementType;
}

export const EmptyComponent = ({
  heading = "Data not Found",
  description,
  icon: Icon,
}: CustomerProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/8 px-6 py-24 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(9,17,63,0.20),transparent_36%)]" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {Icon && (
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-[#DAB025]/10">
            <Icon className="h-6 w-6 text-[#DAB025]" />
          </div>
        )}

        <h3 className="mb-1 text-base font-semibold text-white">{heading}</h3>

        {description && <p className="text-sm text-slate-400">{description}</p>}
      </div>
    </div>
  );
};
