"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import { teamMembers, stats } from "@/lib/data";
import clsx from "clsx";

const faqs = [
  {
    q: "Jaka jest Wasza polityka wysyłki?",
    a: "Oferujemy bezpłatną standardową wysyłkę na wszystkie zamówienia powyżej 200 zł w Polsce. Ekspresowa dostawa dostępna za 19 zł, a dostawa następnego dnia za 29 zł. Zamówienia złożone przed 14:00 są wysyłane tego samego dnia.",
  },
  {
    q: "Jak długa jest gwarancja na produkty?",
    a: "Wszystkie wędki, kołowrotki i elektronika objęte są 2-letnią gwarancją producenta. Produkty eksploatacyjne (przynęty, haczyki, żyłka) są wyłączone z gwarancji. Reklamacje rozpatrujemy w ciągu 5 dni roboczych.",
  },
  {
    q: "Czy mogę zwrócić produkt?",
    a: "Tak – 30-dniowy zwrot bez pytań na wszystkie nieużywane produkty w oryginalnym opakowaniu. Skontaktuj się z nami, a wyślemy etykietę zwrotną. Zwroty pieniędzy realizujemy w ciągu 3-5 dni roboczych.",
  },
  {
    q: "Czy wysyłacie poza Polskę?",
    a: "Wysyłamy do wszystkich krajów UE, UK, Norwegii i Szwajcarii. Wysyłka na cały świat planowana jest na II kwartał 2026 – zapisz się do newslettera, żeby być pierwszym.",
  },
  {
    q: "Jak mogę śledzić moje zamówienie?",
    a: "Otrzymasz link do śledzenia przesyłki na e-mail zaraz po wysyłce. Możesz też zalogować się na swoje konto i sprawdzić status zamówienia w czasie rzeczywistym.",
  },
];

const values = [
  { icon: <Zap size={24} />, title: "Wydajność Przede Wszystkim", desc: "Sprzedajemy tylko sprzęt, który naprawdę działa w prawdziwych warunkach, nie tylko na testach kontrolnych." },
  { icon: <Shield size={24} />, title: "Zbudowany na Lata", desc: "Każdy produkt wybieramy za trwałość. Wolimy sprzedać ci jedną świetną wędkę niż pięć przeciętnych." },
  { icon: <Globe size={24} />, title: "Społeczność Wędkarzy", desc: "Nasz zespół to przede wszystkim wędkarze. Twoje pytania, opinie i recenzje kształtują naszą ofertę." },
  { icon: <Award size={24} />, title: "Ekspercka Selekcja", desc: "Sami testujemy wszystko. Jeśli nie spełnia naszych standardów – nie trafia do sklepu." },
];

function FAQ({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={clsx(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        open ? "glass-neon border-[#39FF14]/20" : "glass border-black/6 hover:border-black/10"
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-gray-900 font-semibold text-sm pr-4">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={clsx("flex-shrink-0 transition-colors", open ? "text-[#39FF14]" : "text-gray-300")}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-black/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center p-6 rounded-2xl glass border border-black/6 hover:border-[#39FF14]/20 transition-colors group"
    >
      <div
        className="text-4xl md:text-5xl font-black text-[#39FF14] mb-2 group-hover:scale-105 transition-transform"
        style={{ textShadow: "0 0 20px rgba(57,255,20,0.5)" }}
      >
        {value}
      </div>
      <div className="text-gray-400 text-xs font-bold tracking-widest uppercase">{label}</div>
    </motion.div>
  );
}

export default function InfoPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <>
      {/* Header */}
      <div className="relative pt-28 pb-16 border-b border-black/5 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(57,255,20,0.06) 0%, transparent 70%)",
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
              Nasza historia
            </p>
            <h1
              className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-4"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              O NAS
            </h1>
            <p className="text-gray-400 max-w-lg text-sm leading-relaxed">
              Jesteśmy wędkarzami, którym znudził się drogi i słaby sprzęt. Dlatego stworzyliśmy sklep, który sprzedaje tylko to, co naprawdę działa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
                Kim jesteśmy
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                ZRODZENI NAD
                <br />
                <span
                  className="text-[#39FF14]"
                  style={{ textShadow: "0 0 20px rgba(57,255,20,0.4)" }}
                >
                  BRZEGIEM RZEKI
                </span>
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  FeederOn powstał w 2019 roku z inicjatywy grupy zawodowych feederowców z Warszawy,
                  którzy wciąż napotykali ten sam problem: sprzęt reklamowany jako "profesjonalny"
                  rzadko spełniał swoje obietnice na wodzie.
                </p>
                <p>
                  Zaczęliśmy sami testować wszystko – na jeziorach, rzekach, kanałach i zawodach
                  w całej Polsce i Europie Środkowej. Tylko sprzęt, który przeszedł nasze testy
                  terenowe, trafił do pierwszej oferty.
                </p>
                <p>
                  Dziś FeederOn obsługuje ponad 10 000 wędkarzy w całej Europie, oferując starannie
                  dobrany asortyment wędek, kołowrotków, przynęt i akcesoriów – sprawdzony przez
                  ludzi, którzy naprawdę łowią.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {["Założony 2019", "Warszawa, Polska", "10K+ Klientów"].map((badge) => (
                  <span key={badge} className="badge-neon">{badge}</span>
                ))}
              </div>
            </motion.div>

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/about1/400/600"
                      alt="Wędkowanie"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/about2/300/300"
                      alt="Sprzęt wędkarski"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
                <div className="space-y-3 mt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/about3/300/300"
                      alt="Rzeka"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/about4/400/600"
                      alt="Połów"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>
              {/* Overlay badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-neon rounded-2xl p-4"
              >
                <p className="text-[#39FF14] font-black text-2xl">10K+</p>
                <p className="text-gray-500 text-xs">Zadowolonych wędkarzy</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-black/5">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              Co nami kieruje
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              NASZE WARTOŚCI
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass border border-black/6 hover:border-[#39FF14]/20 transition-all group"
              >
                <div className="text-[#39FF14]/70 group-hover:text-[#39FF14] transition-colors mb-4">
                  {v.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-black/5" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              Ludzie za tym stojący
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              POZNAJ ZESPÓŁ
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl glass border border-black/6 hover:border-[#39FF14]/20 transition-all group"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#39FF14]/20 group-hover:border-[#39FF14]/50 transition-colors">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="80px" />
                </div>
                <h3 className="text-gray-900 font-bold text-sm">{member.name}</h3>
                <p className="text-[#39FF14]/70 text-[11px] font-bold tracking-wide mb-3 mt-0.5">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-black/5" id="faq">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">
              Masz pytania?
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
              style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
            >
              FAQ
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding border-t border-black/5" id="contact">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#39FF14] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
                Skontaktuj się
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                KONTAKT
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Odpowiadamy na wszystkie wiadomości w ciągu 24 godzin. Wolisz porozmawiać? Zadzwoń – odbiera prawdziwy wędkarz.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: "E-mail", value: "kontakt@feederon.com" },
                  { icon: <Phone size={18} />, label: "Telefon", value: "+48 123 456 789" },
                  { icon: <MapPin size={18} />, label: "Adres", value: "ul. Wędkarska 12, 00-001 Warszawa" },
                  { icon: <Clock size={18} />, label: "Godziny", value: "Pon–Pt: 9:00–18:00 | Sob: 10:00–15:00" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl glass border border-black/6">
                    <div className="text-[#39FF14]/70 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-gray-900 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="glass border border-black/7 rounded-2xl p-7">
                <h3 className="text-gray-900 font-bold text-lg mb-6">Wyślij wiadomość</h3>

                {formSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 size={48} className="text-[#39FF14] mb-4" style={{ filter: "drop-shadow(0 0 10px rgba(57,255,20,0.8))" }} />
                    <p className="text-gray-900 font-bold text-lg">Wiadomość wysłana!</p>
                    <p className="text-gray-400 text-sm mt-2">Odpiszemy w ciągu 24 godzin.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-2">
                          Imię
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jan"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-black/8 text-gray-900 text-sm placeholder:text-gray-200 focus:outline-none focus:border-[#39FF14]/40 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-2">
                          Nazwisko
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Kowalski"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-black/8 text-gray-900 text-sm placeholder:text-gray-200 focus:outline-none focus:border-[#39FF14]/40 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jan@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/8 text-gray-900 text-sm placeholder:text-gray-200 focus:outline-none focus:border-[#39FF14]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-2">
                        Temat
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white border border-black/8 text-gray-600 text-sm focus:outline-none focus:border-[#39FF14]/40 transition-colors appearance-none">
                        <option className="bg-white">Ogólne pytanie</option>
                        <option className="bg-white">Wsparcie przy zamówieniu</option>
                        <option className="bg-white">Zapytanie o produkt</option>
                        <option className="bg-white">Zwroty i gwarancja</option>
                        <option className="bg-white">Sprzedaż hurtowa</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-bold tracking-widest uppercase block mb-2">
                        Wiadomość
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Jak możemy Ci pomóc?"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-black/8 text-gray-900 text-sm placeholder:text-gray-200 focus:outline-none focus:border-[#39FF14]/40 transition-colors resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-neon w-full py-3.5 rounded-xl text-sm font-black tracking-widest uppercase"
                    >
                      Wyślij wiadomość
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
