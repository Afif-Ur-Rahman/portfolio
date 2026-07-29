"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="mailto:theconqueror.office@gmail.com"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A3D91] text-white shadow-lg transition hover:scale-110 hover:bg-[#082f6d]"
      >
        <Mail size={30} />
      </Link>

      <Link
        href="https://wa.me/923240047777"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
};
