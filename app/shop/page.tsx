"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  Search,
  Grid3X3,
  List,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";
import clsx from "clsx";

const priceRanges = [
  { label: "Wszystkie ceny", min: 0, max: Infinity },
  { label: "Poniżej 50 zł", min: 0, max: 50 },
  { label: "50 – 150 zł", min: 50, max: 150 },
  { label: "150 – 300 zł", min: 150, max: 300 },
  { label: "Powyżej 300 zł", min: 300, max: Infinity },
];

const sortOptions = [
  { label: "Polecane", value: "featured" },
  { label: "Cena: od najniższej", value: "price-asc" },
  { label: "Cena: od najwyższej", value: "price-desc" },
  { label: "Najlepiej oceniane", value: "rating" },
  { label: "Najwięcej opinii", value: "reviews" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "Wszystkie") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    const priceRange = priceRanges[selectedPrice];
    result = result.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max,
    );

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)),
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy, searchQuery]);

  const catOptions = ["Wszystkie", ...categories.map((c) => c.name)];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-28 pb-16 border-b border-black/5 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(57,255,20,0.06) 0%, transparent 70%)",
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
              500+ Produktów
            </p>
            <h1
              className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-4"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              SKLEP
            </h1>
            <p className="text-gray-400 max-w-md text-sm">
              Profesjonalny sprzęt wędkarski dla każdej dyscypliny. Testowany na
              prawdziwej wodzie, zatwierdzony przez prawdziwych wędkarzy.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="text"
              placeholder="Szukaj produktów..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/4 border border-black/7 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#39FF14]/40 transition-colors"
            />
          </div>

          {/* Mobile filter toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-black/7 text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors lg:hidden"
          >
            <SlidersHorizontal size={15} />
            Filtry
          </motion.button>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pr-8 pl-4 py-2.5 rounded-xl glass border border-black/7 text-gray-600 text-sm focus:outline-none focus:border-[#39FF14]/40 bg-transparent cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-white">
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={13}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* View mode */}
          <div className="hidden md:flex items-center gap-1 glass border border-black/7 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={clsx(
                "p-2 rounded-lg transition-colors",
                viewMode === "grid"
                  ? "bg-[#39FF14]/15 text-[#39FF14]"
                  : "text-gray-400 hover:text-gray-900",
              )}
            >
              <Grid3X3 size={15} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={clsx(
                "p-2 rounded-lg transition-colors",
                viewMode === "list"
                  ? "bg-[#39FF14]/15 text-[#39FF14]"
                  : "text-gray-400 hover:text-gray-900",
              )}
            >
              <List size={15} />
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {catOptions.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                "px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all",
                selectedCategory === cat
                  ? "bg-[#39FF14] text-black shadow-neon"
                  : "glass border border-black/7 text-gray-500 hover:text-gray-900 hover:border-black/12",
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <AnimatePresence>
            {(sidebarOpen || true) && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block w-56 flex-shrink-0 space-y-6"
              >
                {/* Price filter */}
                <div className="glass rounded-2xl p-5 border border-black/6">
                  <h3 className="text-gray-900 font-bold text-xs tracking-widest uppercase mb-4">
                    Przedział cenowy
                  </h3>
                  <div className="space-y-1">
                    {priceRanges.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPrice(i)}
                        className={clsx(
                          "w-full text-left px-3 py-2 rounded-lg text-xs transition-colors",
                          selectedPrice === i
                            ? "bg-[#39FF14]/15 text-[#39FF14] border border-[#39FF14]/25"
                            : "text-gray-500 hover:text-gray-900 hover:bg-black/4",
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="glass rounded-2xl p-5 border border-black/6">
                  <h3 className="text-gray-900 font-bold text-xs tracking-widest uppercase mb-4">
                    Dostępność
                  </h3>
                  <div className="space-y-2">
                    {["Tylko dostępne", "Pokaż niedostępne"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div className="w-4 h-4 rounded border border-black/12 group-hover:border-[#39FF14]/50 flex items-center justify-center transition-colors">
                          {opt === "Tylko dostępne" && (
                            <div className="w-2 h-2 rounded-sm bg-[#39FF14]" />
                          )}
                        </div>
                        <span className="text-gray-500 text-xs group-hover:text-gray-600 transition-colors">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="glass rounded-2xl p-5 border border-black/6">
                  <h3 className="text-gray-900 font-bold text-xs tracking-widest uppercase mb-4">
                    Popularne tagi
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "karp",
                      "feeder",
                      "spinning",
                      "noc",
                      "włókno węglowe",
                      "boilie",
                      "kołowrotek",
                    ].map((tag) => (
                      <button
                        key={tag}
                        className="text-[9px] font-bold tracking-wide text-gray-300 hover:text-[#39FF14] bg-black/3 hover:bg-[#39FF14]/10 border border-black/6 hover:border-[#39FF14]/25 px-2.5 py-1 rounded-full transition-all"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <p className="text-gray-400 text-sm">
                <span className="text-gray-900 font-semibold">
                  {filtered.length}
                </span>{" "}
                produktów znalezionych
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${selectedPrice}-${sortBy}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={clsx(
                  "grid gap-5",
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1",
                )}
              >
                {filtered.length > 0 ? (
                  filtered.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-24 text-center"
                  >
                    <p className="text-5xl mb-4">🎣</p>
                    <p className="text-gray-400 text-lg font-semibold">
                      Nie znaleziono produktów
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Spróbuj zmienić filtry
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("Wszystkie");
                        setSelectedPrice(0);
                        setSearchQuery("");
                      }}
                      className="mt-6 text-[#39FF14] text-sm font-bold hover:underline"
                    >
                      Wyczyść wszystkie filtry
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
