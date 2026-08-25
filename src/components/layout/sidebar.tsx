// components/MobileNavDrawer.tsx
"use client";

import { X, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

import { handleNavClick } from "@/utils";

interface MobileNavDrawerProps {
  title: string;
  page: string;
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  activeSection: string;
  onNavigate: (href: string) => void;
}

export const MobileSidebar: React.FC<MobileNavDrawerProps> = ({
  title,
  page,
  isOpen,
  onClose,
  navLinks,
  activeSection,
  onNavigate,
}) => {
  const [firstName, ...rest] = title.split(" ");
  const lastName = rest.join(" ");

  return (
    <div
      className={`fixed inset-0 z-110 transition-opacity duration-300 lg:hidden ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`absolute top-0 right-0 flex h-full max-w-xs min-w-[50%] flex-col justify-between overflow-hidden border-l border-[#DAB025]/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.98)_0%,rgba(9,17,63,0.96)_52%,rgba(2,6,23,0.98)_100%)] shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(218,176,37,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(9,17,63,0.20),transparent_35%)]" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="text-xl font-bold text-white">
              <span className="text-[#DAB025]">{firstName}</span>
              {lastName ? ` ${lastName}` : ""}
            </span>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-[#DAB025]/80 transition hover:bg-white/10 hover:text-[#DAB025]"
              aria-label="Close menu"
            >
              <X size="1.6rem" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 border-b border-white/10 px-3 py-5">
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={e => {
                        onNavigate(href);
                        handleNavClick(e, href);
                        onClose();
                      }}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-linear-to-r from-[#DAB025]/25 via-[#DAB025]/15 to-[#09113F]/40 text-white shadow-lg ring-1 shadow-[#DAB025]/10 ring-[#DAB025]/20 ring-inset"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex-1">{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-4 py-5">
            {page === "home" ? (
              <a
                href="/resume.pdf"
                download
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#DAB025]/20 bg-[#DAB025]/10 px-4 py-3 text-base font-medium text-white transition hover:bg-[#DAB025]/20"
              >
                <Download size={18} />
                Download Resume
              </a>
            ) : (
              <Link
                href="/#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#DAB025] px-6 py-3 text-sm text-white transition-colors hover:bg-[#DAB025]"
              >
                <ArrowLeft size={15} />
                Back to All Projects
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
