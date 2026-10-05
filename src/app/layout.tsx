import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { ParticlesProviderWrapper } from "@/components/layout";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Afif Ur Rahman - Full-Stack Developer",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js. Building scalable web apps with MongoDB, Tailwind CSS, and modern tooling.",
    keywords: [
      "Afif Ur Rahman",
      "Full-Stack Developer",
      "Next.js Developer",
      "React Developer",
      "TypeScript",
      "Node.js Developer",
      "MongoDB",
      "Web Developer Portfolio",
      "Frontend Developer",
      "Backend Developer",
    ],
    authors: [{ name: "Afif Ur Rahman" }],
    creator: "Afif Ur Rahman",
    metadataBase: new URL("https://afif-ur-rahman.vercel.app/"),
    openGraph: {
      title: "Afif Ur Rahman - Full-Stack Developer",
      description: "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js.",
      url: "https://afif-ur-rahman.vercel.app/",
      siteName: "Afif Ur Rahman",
      images: [
        {
          url: "/og-image.jpg",
          width: 960,
          height: 960,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Afif Ur Rahman - Full-Stack Developer",
      description: "Full-stack developer specializing in Next.js, React, TypeScript, and Node.js.",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ParticlesProviderWrapper>
          <Theme>{children}</Theme>
        </ParticlesProviderWrapper>
      </body>
    </html>
  );
}
