"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Zap, Star, TrendingUp, ArrowRight } from "lucide-react";

const words = ["PASJĘ", "PRECYZJĘ", "MOC"];

const floatingCards = [
  {
    label: "Nowość",
    value: "CarpMaster Pro",
    sub: "Wędka Feederowa",
    icon: <Zap size={13} />,
    delay: 0,
  },
  {
    label: "Najlepiej Oceniany",
    value: "4.9 / 5.0",
    sub: "284 Opinii",
    icon: <Star size={13} />,
    delay: 0.4,
  },
  {
    label: "W tym tygodniu",
    value: "+340 sprzedano",
    sub: "Trending",
    icon: <TrendingUp size={13} />,
    delay: 0.8,
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(57,255,20,0.09) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="badge-neon mb-8 flex items-center gap-2"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse"
            style={{ boxShadow: "0 0 6px rgba(57,255,20,1)" }}
          />
          Wiosenny Sezon 2026 — Nowa Kolekcja Już Dostępna
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-none tracking-[0.14em] text-gray-900"
            style={{
              fontFamily: '"Oswald", "Anton", "Arial Narrow", sans-serif',
            }}
          >
            WZMOCNIJ SWOJĄ
          </motion.h1>
        </div>

        <div
          className="mb-8 overflow-hidden flex items-center justify-center"
          style={{ height: "clamp(2.4rem,7vw,5.5rem)" }}
        >
          <motion.div
            key={words[currentWord]}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <span
              className="text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-none tracking-[0.18em]"
              style={{
                fontFamily: '"Oswald", "Anton", "Arial Narrow", sans-serif',
                color: "#39FF14",
                textShadow:
                  "0 0 20px rgba(57,255,20,0.45), 0 0 40px rgba(57,255,20,0.18)",
              }}
            >
              {words[currentWord]}
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          Profesjonalny sprzęt wędkarski dla wędkarzy, którzy nie idą na
          kompromis. Każdy rzut. Każde trafienie. Każdy sezon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-neon px-8 py-4 rounded-xl text-sm font-black tracking-widest uppercase flex items-center gap-2"
            >
              Odkryj Sklep <ArrowRight size={16} />
            </motion.button>
          </Link>
          <Link href="/stories">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-ghost px-8 py-4 rounded-xl text-sm font-black tracking-widest uppercase"
            >
              Czytaj Artykuły
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex items-center gap-10 mt-14 pt-10 border-t border-black/6"
        >
          {[
            { n: "500+", label: "Produktów" },
            { n: "10K+", label: "Wędkarzy" },
            { n: "98%", label: "Ocena 5★" },
          ].map(({ n, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                className="text-2xl font-black"
                style={{
                  color: "#39FF14",
                  textShadow: "0 0 12px rgba(57,255,20,0.5)",
                }}
              >
                {n}
              </span>
              <span className="text-xs text-gray-400 tracking-widest uppercase mt-0.5">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 + card.delay }}
          style={{ top: `${22 + i * 26}%`, right: "5%" }}
          className="absolute hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            }}
            className="glass rounded-2xl p-4 min-w-[160px]"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[#39FF14] opacity-80">{card.icon}</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                {card.label}
              </span>
            </div>
            <p className="text-gray-900 font-black text-sm">{card.value}</p>
            <p className="text-gray-400 text-xs">{card.sub}</p>
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-gray-300 text-[10px] font-bold tracking-[0.3em] uppercase">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#39FF14]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
