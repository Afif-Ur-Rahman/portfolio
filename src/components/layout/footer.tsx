"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { handleNavClick } from "@/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

const officeDetails = [
  {
    label: "2nd Floor AMWA Heights, Sector F, Bahria Town, Lahore",
    href: "https://maps.app.goo.gl/JTkgAd3KvWx8oCKU7",
    Icon: MapPin,
  },
  {
    label: "+92 324 0047777",
    href: "https://wa.me/+923240047777",
    Icon: Phone,
  },
  {
    label: "Mon – Sat: 02:00 PM – 07:00 PM · Sunday: Closed",
    Icon: Clock,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#003B73] text-white">
      <svg
        aria-hidden
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMax slice"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-[0.08]"
      >
        <path
          fill="#FFFFFF"
          d="M0 200V120l40-10V80l50 10V50l45 15V70l55-25v70l40-10v40l60-30v60l50-15V90l45 20V60l50 25V95l40-15v40l55-20v80l50-25v55l45-10V85l60 20v95H0Z"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1.3fr]">
          <div>
            <Link
              href="#home"
              className="inline-flex items-center justify-center gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="The Conqueror Developers"
                width={400}
                height={400}
                className="w-60 h-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm leading-relaxed text-white/75">
              The Conqueror Developers is a name built on trust, vision, and
              on-time delivery.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold uppercase tracking-[0.14em] text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-medium text-white/85 hover:text-[#F2C078] hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold uppercase tracking-[0.14em] text-white/60">
              Office Location
            </h3>
            <ul className="mt-4 space-y-4">
              {officeDetails.map(({ label, href, Icon }) =>
                href ? (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 font-medium text-white/85 transition-colors hover:text-[#F2C078] hover:underline"
                    >
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                      <span className="leading-snug">{label}</span>
                    </a>
                  </li>
                ) : (
                  <li
                    key={label}
                    className="flex items-start gap-3 font-medium text-white/85 transition-colors hover:text-[#F2C078] hover:underline cursor-default"
                  >
                    <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} />
                    <span className="leading-snug">{label}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} The Conqueror Developers. All rights
            reserved.
          </p>
          <p>Designed for trust, vision, and on-time delivery.</p>
        </div>
      </div>
    </footer>
  );
};
