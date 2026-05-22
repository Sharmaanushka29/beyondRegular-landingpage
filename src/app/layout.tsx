import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "beyondRegular | The Art of Video Commerce",
  description: "Elevate your product videos into shoppable conversion engines. Designed for the modern aesthetic luxury brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary/15 selection:text-primary">
        <div className="noise-overlay" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
