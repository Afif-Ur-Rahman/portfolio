import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const Footer = () => {
  return (
    <section className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-[#003B73] md:text-3xl">
          Want to see more of my work?
        </h2>
        <Link
          href="/#projects"
          className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#DAB025] px-6 py-3 text-sm font-bold text-[#003B73] transition-colors hover:bg-[#DAB025]"
        >
          <ArrowLeft size={15} />
          Back to All Projects
        </Link>
      </div>
    </section>
  );
};
