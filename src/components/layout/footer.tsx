// components/layout/footer.tsx
"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { handleNavClick } from "@/utils";
import { navLinks } from "./constants";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#003B73] text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1.3fr]">
          <div>
            <span className="text-2xl font-bold text-white">
              Afif<span className="text-[#DAB025]">.</span>
            </span>
            <p className="mt-4 max-w-sm leading-relaxed text-white/75">
              = Full-stack developer building fast, reliable web applications
              end-to-end.
            </p>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.14em] text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-medium text-white/85 transition-all hover:text-[#F2C078] hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.14em] text-white/60">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="mailto:youremail@example.com"
                  className="flex items-start gap-3 font-medium text-white/85 transition-colors hover:text-[#F2C078] hover:underline"
                >
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                  <span>afifurrahman444@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 font-medium text-white/85">
                <MapPin className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/afif-ur-rahman786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-[#F2C078]"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com/afif-Ur-Rahman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-[#F2C078]"
                >
                  <FaGithub size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Afif Ur Rahman. All rights reserved.
          </p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
