import "./globals.css";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import { ParticlesProviderWrapper } from "@/components/layout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Afif Ur Rahman - Portfolio`,
    description: "",
  };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
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
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <ParticlesProviderWrapper>
          <Theme>{children}</Theme>
        </ParticlesProviderWrapper>
      </body>
    </html>
  );
}
