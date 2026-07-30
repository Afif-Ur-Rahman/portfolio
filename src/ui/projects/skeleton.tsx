import { Loader2 } from "lucide-react";

export const Skeleton = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-[#003B73]/20 via-[#DAB025]/30 to-[#003B73]/20 bg-size-[200%_100%]" />

      <Loader2 className="h-6 w-6 animate-spin text-[#DAB025]" />
    </div>
  );
};
