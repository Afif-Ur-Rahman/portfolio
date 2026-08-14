import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#09113F]">
      <Loader2 className="h-10 w-10 animate-spin text-[#DAB025]" />
    </div>
  );
}
