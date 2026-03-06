"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, Shield, Truck, HeadphonesIcon } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import StoryCard from "@/components/StoryCard";
import { products, stories, categories } from "@/lib/data";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
        {eyebrow}
      </p>
      <h2
        className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight"
        style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-3 max-w-lg leading-relaxed text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

const features = [
  {
    icon: <Zap size={22} />,
    title: "Profesjonalna Wydajność",
    desc: "Każdy produkt testowany przez zawodowych wędkarzy zanim trafi na nasze półki.",
  },
  {
    icon: <Shield size={22} />,
    title: "2-letnia Gwarancja",
    desc: "Pełna gwarancja producenta na wszystkie wędki, kołowrotki i elektronikę.",
  },
  {
    icon: <Truck size={22} />,
    title: "Darmowa Dostawa",
    desc: "Bezpłatna dostawa na wszystkie zamówienia powyżej 200 zł w Polsce.",
  },
  {
    icon: <HeadphonesIcon size={22} />,
    title: "Wsparcie Ekspertów",
    desc: "Rozmawiasz z prawdziwymi wędkarzami, nie botami. Odbieramy telefon.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <Hero />

      {/* ─── FEATURES BAR ─── */}
      <section className="relative py-16 border-y border-black/5">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-2xl glass border border-black/6 hover:border-[#39FF14]/20 transition-colors group"
            >
              <div className="flex-shrink-0 text-[#39FF14] opacity-70 group-hover:opacity-100 transition-opacity mt-0.5">
                {f.icon}
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── BRAND BANNER ─── */}
      <section className="section-padding border-b border-black/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
            style={{ maxHeight: "420px" }}
          >
            <Image
              src="/images/banner.jpg"
              alt="FeederOn – Pasja wędkarska"
              width={1920}
              height={640}
              className="w-full object-cover object-center"
              style={{ maxHeight: "420px" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="badge-neon inline-flex mb-4">Nasza Społeczność</span>
                <h2
                  className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3"
                  style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                >
                  PASJA, KTÓRĄ{" "}
                  <span className="text-[#39FF14]" style={{ textShadow: "0 0 20px rgba(57,255,20,0.6)" }}>
                    CZUĆ
                  </span>
                </h2>
                <p className="text-white/70 text-sm max-w-sm mb-6">
                  Dołącz do tysięcy wędkarzy, którzy już wybrali FeederOn. Sprzęt testowany na prawdziwej wodzie.
                </p>
                <Link href="/shop">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-neon px-7 py-3 rounded-xl text-sm font-black tracking-widest uppercase flex items-center gap-2"
                  >
                    Przejdź do Sklepu <ArrowRight size={15} />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <SectionTitle
              eyebrow="Przeglądaj według kategorii"
              title="Sklep według Typu"
              subtitle="Od ultra-lekkiego spinningu po ciężkie zestawy na karpia – mamy wszystko."
            />
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#39FF14] text-sm font-semibold transition-colors group"
            >
              Wszystkie kategorie
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href={`/shop?category=${cat.name}`}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden glass border border-black/6 hover:border-[#39FF14]/25 hover:shadow-[0_0_30px_rgba(57,255,20,0.08)] transition-all cursor-pointer"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-xl mb-0.5">{cat.icon}</p>
                      <p className="text-white font-bold text-xs">{cat.name}</p>
                      <p className="text-gray-400 text-[10px]">{cat.count} szt.</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="section-padding border-t border-black/5">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <SectionTitle eyebrow="Wybrane dla Ciebie" title="Bestsellery" />
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#39FF14] text-sm font-semibold transition-colors group"
            >
              Zobacz wszystkie produkty
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-neon px-8 py-3.5 rounded-xl text-sm font-black tracking-widest uppercase"
              >
                Zobacz Wszystkie Produkty
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <div className="relative py-5 overflow-hidden border-y border-[#39FF14]/10 bg-[#39FF14]/3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-0 whitespace-nowrap"
        >
          {Array.from({ length: 2 }).map((_, group) =>
            [
              "DARMOWA DOSTAWA OD 200 ZŁ",
              "KOLEKCJA WIOSENNA 2026",
              "NOWOŚCI CO TYDZIEŃ",
              "PRO SPRZĘT DLA PRAWDZIWYCH WĘDKARZY",
              "WSPARCIE EKSPERTÓW 7 DNI W TYGODNIU",
            ].map((text, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase px-8">
                  {text}
                </span>
                <span
                  className="text-[#39FF14] text-xs"
                  style={{ textShadow: "0 0 8px rgba(57,255,20,0.8)" }}
                >
                  ✦
                </span>
              </span>
            ))
          )}
        </motion.div>
      </div>

      {/* ─── STORIES PREVIEW ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <SectionTitle
              eyebrow="Znad brzegu"
              title="Najnowsze Artykuły"
              subtitle="Porady, destynacje i poradniki sprzętowe od naszej społeczności wędkarzy."
            />
            <Link
              href="/stories"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#39FF14] text-sm font-semibold transition-colors group"
            >
              Wszystkie artykuły
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mb-6">
            <StoryCard story={stories[0]} featured />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.slice(1, 4).map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/stories">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-black tracking-widest uppercase"
              >
                Czytaj Wszystkie Artykuły
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(57,255,20,0.08) 0%, rgba(0,0,0,0) 50%, rgba(57,255,20,0.05) 100%)",
              border: "1px solid rgba(57,255,20,0.2)",
              boxShadow:
                "0 0 80px rgba(57,255,20,0.06), inset 0 0 80px rgba(57,255,20,0.03)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.06) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 grid-pattern opacity-40" />

            <div className="relative z-10">
              <span className="badge-neon inline-flex mb-5">Ekskluzywna Oferta dla Członków</span>
              <h2
                className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                ZDOBĄDŹ 15% ZNIŻKI{" "}
                <span
                  className="text-[#39FF14]"
                  style={{ textShadow: "0 0 30px rgba(57,255,20,0.6)" }}
                >
                  NA PIERWSZE ZAMÓWIENIE
                </span>
              </h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm">
                Dołącz do ponad 10 000 wędkarzy i otrzymaj wczesny dostęp do nowości, ekskluzywne oferty
                i profesjonalne porady wędkarskie.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Wpisz swój e-mail"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white border border-black/10 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#39FF14]/50 shadow-sm w-full sm:w-auto"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-neon px-6 py-3.5 rounded-xl text-sm font-black tracking-widest uppercase whitespace-nowrap w-full sm:w-auto"
                >
                  Odbierz Zniżkę
                </motion.button>
              </div>
              <p className="text-gray-200 text-xs mt-4">Żadnego spamu. Wypisz się w dowolnym momencie.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
