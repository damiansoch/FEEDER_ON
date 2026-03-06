"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/lib/data";
import clsx from "clsx";

const storyCategories = [
  "Wszystkie",
  "Destynacje",
  "Techniki",
  "Poradniki",
  "Sezonowe",
  "Recenzje",
  "Wywiady",
];

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filtered =
    activeCategory === "Wszystkie"
      ? stories
      : stories.filter((s) => s.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Header */}
      <div className="relative pt-28 pb-16 border-b border-black/5 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(57,255,20,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              Znad brzegu
            </p>
            <h1
              className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-4"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              ARTYKUŁY
            </h1>
            <p className="text-gray-400 max-w-lg text-sm leading-relaxed">
              Destynacje, techniki, recenzje sprzętu i wywiady od naszej społeczności pasjonatów wędkarstwa.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {storyCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all",
                activeCategory === cat
                  ? "bg-[#39FF14] text-black shadow-neon"
                  : "glass border border-black/7 text-gray-500 hover:text-gray-900 hover:border-black/12"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {featured ? (
              <>
                {/* Featured story */}
                <div className="mb-8">
                  <StoryCard story={featured} featured />
                </div>

                {/* Story grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((story, i) => (
                      <StoryCard key={story.id} story={story} index={i} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="py-24 text-center">
                <p className="text-5xl mb-4">📖</p>
                <p className="text-gray-400 text-lg font-semibold">
                  Brak artykułów w tej kategorii
                </p>
                <button
                  onClick={() => setActiveCategory("Wszystkie")}
                  className="mt-6 text-[#39FF14] text-sm font-bold hover:underline"
                >
                  Pokaż wszystkie artykuły
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(57,255,20,0.07) 0%, rgba(0,0,0,0) 50%, rgba(57,255,20,0.04) 100%)",
            border: "1px solid rgba(57,255,20,0.15)",
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              Nie przegap żadnego artykułu
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              ARTYKUŁY NA TWOJĄ SKRZYNKĘ
            </h2>
            <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">
              Cotygodniowy przegląd najlepszych treści wędkarskich, ekskluzywne porady i wczesny dostęp do produktów.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="twoj@email.com"
                className="flex-1 px-5 py-3 rounded-xl bg-black/4 border border-black/10 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#39FF14]/40 w-full"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-neon px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase whitespace-nowrap w-full sm:w-auto"
              >
                Zapisz się
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
