"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { handleNavClick } from "@/utils";
import { navLinks } from "./constants";
import { MobileSidebar } from "./sidebar";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = navRefs.current[activeSection];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  const isActive = (href: string) => activeSection === href;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        mobileMenu || isScrolled
          ? "bg-[#09113F] shadow-md py-4"
          : "transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            <span className="text-[#DAB025]">Afif</span> Ur Rahman
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="relative hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              ref={(el) => {
                navRefs.current[item.href] = el;
              }}
              onClick={(e) => {
                setActiveSection(item.href);
                handleNavClick(e, item.href);
              }}
              className={`relative font-medium transition-colors duration-300 ease-in-out hover:text-[#DAB025] ${
                isActive(item.href) ? "text-[#DAB025]" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <span
            className="absolute -bottom-0.5 h-0.5 rounded-full bg-[#DAB025] transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
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
      <MobileSidebar
        isOpen={mobileMenu}
        onClose={() => setMobileMenu(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
    </header>
  );
};
