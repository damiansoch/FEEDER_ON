import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "FeederOn — Power Your Passion for Fishing",
    template: "%s | FeederOn",
  },
  description:
    "Premium fishing gear for serious anglers. Rods, reels, bait, tackle and accessories. Shop the latest collection.",
  keywords: ["fishing gear", "carp fishing", "feeder fishing", "rods", "reels", "bait"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen`}
      >
        {/* Global animated background */}
        <AnimatedBackground />

        {/* Navigation */}
        <Navbar />

        {/* Page content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
