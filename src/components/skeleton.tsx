import { cn } from "@/utils";
import { Loader2 } from "lucide-react";

type SkeletonProps = {
  className?: string;
  shimmerClassName?: string;
  loaderClassName?: string;
};

export const Skeleton = ({
  className,
  shimmerClassName,
  loaderClassName,
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 animate-shimmer bg-linear-to-r from-[#003B73]/20 via-[#DAB025]/30 to-[#003B73]/20 bg-size-[200%_100%]",
          shimmerClassName,
        )}
      />
      <Loader2
        className={cn("h-6 w-6 animate-spin text-[#DAB025]", loaderClassName)}
      />
    </div>
  );
};
