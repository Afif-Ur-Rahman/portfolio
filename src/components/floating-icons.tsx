"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { GmailIcon } from "@/components/svgs";

export const FloatingIcons = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-10 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ease-in-out origin-bottom ${
          showAll
            ? "translate-y-0 opacity-100 max-h-75"
            : "translate-y-4 opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <Link
          href="https://wa.me/923156690902"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1EBE5D]"
        >
          <FaWhatsapp size={26} />
        </Link>

        <Link
          href="mailto:afifurrahman444@gmail.com"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition hover:scale-105 hover:bg-gray-50"
        >
          <GmailIcon size={24} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/afif-ur-rahman786/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-lg transition hover:scale-105 hover:bg-[#005e93]"
        >
          <FaLinkedin size={26} />
        </Link>

        <Link
          href="https://github.com/afif-Ur-Rahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#171515] text-white shadow-lg transition hover:scale-105 hover:bg-black"
        >
          <FaGithub size={26} />
        </Link>
      </div>

      <div className="relative flex h-12 w-12 items-center justify-center">
        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#DAB025] text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? (
            <X size={26} color="#0A3D91" />
          ) : (
            <Phone size={26} color="#0A3D91" />
          )}
        </div>
      </div>
    </div>
  );
};
