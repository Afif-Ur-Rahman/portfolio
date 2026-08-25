interface EmptyProps {
  heading?: string;
  description?: string;
  icon: React.ElementType;
  variant?: "dark" | "light";
}

const VARIANT_STYLES = {
  dark: {
    wrapper: "border-white/10 bg-white/8 shadow-black/20",
    overlay:
      "bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(9,17,63,0.20),transparent_36%)]",
    iconWrapper: "border-white/10 bg-white/10 shadow-[#DAB025]/10",
    heading: "text-white",
    description: "text-slate-400",
  },
  light: {
    wrapper: "border-gray-200 bg-white shadow-black/5",
    overlay:
      "bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(10,74,138,0.06),transparent_36%)]",
    iconWrapper: "border-gray-200 bg-[#DAB025]/10 shadow-[#DAB025]/10",
    heading: "text-[#09113F]",
    description: "text-gray-500",
  },
};

export const EmptyComponent = ({
  heading = "Data not Found",
  description,
  icon: Icon,
  variant = "dark",
}: EmptyProps) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border px-6 py-24 text-center shadow-2xl backdrop-blur-xl ${styles.wrapper}`}
    >
      <div className={`pointer-events-none absolute inset-0 ${styles.overlay}`} />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {Icon && (
          <div
            className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-lg ${styles.iconWrapper}`}
          >
            <Icon className="h-6 w-6 text-[#DAB025]" />
          </div>
        )}

        <h3 className={`mb-1 text-base font-semibold ${styles.heading}`}>{heading}</h3>

        {description && <p className={`text-sm ${styles.description}`}>{description}</p>}
      </div>
    </div>
  );
};
