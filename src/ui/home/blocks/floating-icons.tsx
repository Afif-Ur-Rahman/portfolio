"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="mailto:afifurrahman444@gmail.com"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A3D91] text-white shadow-lg transition hover:scale-110 hover:bg-[#082f6d]"
      >
        <Mail size={26} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/afif-ur-rahman786/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-lg transition hover:scale-110 hover:bg-[#005e93]"
      >
        <FaLinkedin size={26} />
      </Link>

      <Link
        href="https://github.com/afif-Ur-Rahman/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#171515] text-white shadow-lg transition hover:scale-110 hover:bg-black"
      >
        <FaGithub size={26} />
      </Link>
    </div>
  );
};
