import { Loader2 } from "lucide-react";

const Loader = ({ label = "", labelColor = "text-black", loaderColor = "text-black" }) => {
  return (
    <div className="flex h-50 items-center justify-center">
      <div className="flex items-center space-x-2">
        <Loader2 className={`h-6 w-6 animate-spin ${loaderColor}`} />
        <span className={`${labelColor} font-medium`}>Loading {label}...</span>
      </div>
    </div>
  );
};

export default Loader;
