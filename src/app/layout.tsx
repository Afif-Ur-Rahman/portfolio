import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import { ToastProvider } from "@/utils/toast-provider";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Afif Ur Rahman - Portfolio`,
    description:
      "",
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
        <ToastProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              error: {
                style: {
                  wordBreak: "break-word",
                },
              },
            }}
          />
          <Theme>{children}</Theme>
        </ToastProvider>
      </body>
    </html>
  );
}
