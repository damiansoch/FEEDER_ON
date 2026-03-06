"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Power } from "lucide-react";
import clsx from "clsx";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

const sizeConfig = {
  sm: { text: "text-lg", icon: 16, ring: "w-6 h-6" },
  md: { text: "text-2xl", icon: 18, ring: "w-8 h-8" },
  lg: { text: "text-4xl", icon: 26, ring: "w-11 h-11" },
  xl: { text: "text-6xl", icon: 36, ring: "w-16 h-16" },
};

export default function Logo({ size = "md", href = "/" }: LogoProps) {
  const cfg = sizeConfig[size];

  return (
    <Link href={href} className="inline-flex items-center group select-none">
      <motion.span
        className={clsx("font-black tracking-tight text-gray-900", cfg.text)}
        style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "-0.02em" }}
        whileHover={{ x: -2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        FEEDER
      </motion.span>

      {/* The "O" — power button icon */}
      <div className={clsx("relative mx-1.5 flex items-center justify-center shrink-0", cfg.ring)}>
        {/* Glow behind */}
        <div className="absolute inset-0 rounded-full bg-[#39FF14] opacity-20 blur-md group-hover:opacity-40 group-hover:blur-lg transition-all duration-500" />
        {/* Ring */}
        <div className="relative flex items-center justify-center w-full h-full rounded-full border-2 border-[#39FF14] bg-[#39FF14]/10 group-hover:bg-[#39FF14]/20 transition-colors duration-300">
          <Power
            size={cfg.icon}
            className="text-[#39FF14]"
            strokeWidth={2.5}
            style={{ filter: "drop-shadow(0 0 6px rgba(57,255,20,0.8))" }}
          />
        </div>
        {/* Animated pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#39FF14]/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.span
        className={clsx("font-black tracking-tight text-gray-900", cfg.text)}
        style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "-0.02em" }}
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        N
      </motion.span>
    </Link>
  );
}
