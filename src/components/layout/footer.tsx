"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { handleNavClick } from "@/utils";
import { HOME_MENU } from "./constants";
import { ParticleBackground } from "@/components"; // ✅ same as Hero

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#09113F] text-white">
      <ParticleBackground variant="footer" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(218,176,37,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(10,74,138,0.35),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1.3fr]">
          <div>
            <span className="text-2xl font-bold text-white">
              <span className="text-[#DAB025]">Afif</span> Ur Rahman
            </span>
            <p className="mt-4 max-w-sm leading-relaxed text-white/75">
              Full-stack developer passionate about crafting modern, scalable,
              and user-friendly web applications. I specialize in building
              solutions that merge performance with elegant design.
            </p>
          </div>

          <div>
            <h3 className="font-semibold uppercase tracking-[0.14em] text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {HOME_MENU.map((link) => (
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
                  href="mailto:afifurrahman444@gmail.com"
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
                <a
                  href="https://wa.me/923156690902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 transition hover:text-[#25D366]"
                >
                  <FaWhatsapp size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full mt-4 border-t-2 border-white/15 py-6 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} Afif Ur Rahman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
