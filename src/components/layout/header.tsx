"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { handleNavClick } from "@/utils";
import { navLinks } from "./constants";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        mobileMenu || isScrolled
          ? "bg-[#09113F] shadow-md py-4"
          : "bg-[#09113F]/40 py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            <span className="text-[#DAB025]">Afif</span> Ur Rahman
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-medium text-white transition hover:text-[#DAB025] hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/assets/MERN-Afif-Ur-Rahman.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-white lg:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-[#09113F] transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setMobileMenu(false);
                }}
                className="rounded-lg px-4 py-4 text-lg font-medium text-white transition hover:bg-white/10 hover:text-[#DAB025]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            download
            onClick={() => setMobileMenu(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#DAB025] py-4 text-center font-semibold text-black transition hover:bg-amber-400"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};
