import { Eye } from "lucide-react";

interface VisitorCounterProps {
  count: number | null;
}

export const VisitorCounter = ({ count }: VisitorCounterProps) => {
  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DAB025]/10 px-3 py-1 text-xs font-medium text-[#DAB025]">
      <Eye size={13} />
      {count?.toLocaleString()} {`visitor${count === 1 ? "" : "s"}`}
    </span>
  );
};
