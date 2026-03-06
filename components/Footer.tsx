"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  Sklep: [
    { label: "Wszystkie Produkty", href: "/shop" },
    { label: "Wędki", href: "/shop?category=Wędki" },
    { label: "Kołowrotki", href: "/shop?category=Kołowrotki" },
    { label: "Przynęty i Akcesoria", href: "/shop?category=Akcesoria" },
    { label: "Wyposażenie", href: "/shop?category=Wyposażenie" },
    { label: "Nowości", href: "/shop?sort=new" },
  ],
  Artykuły: [
    { label: "Destynacje", href: "/stories?cat=Destynacje" },
    { label: "Techniki", href: "/stories?cat=Techniki" },
    { label: "Recenzje Sprzętu", href: "/stories?cat=Recenzje" },
    { label: "Wywiady", href: "/stories?cat=Wywiady" },
    { label: "Poradniki Sezonowe", href: "/stories?cat=Sezonowe" },
  ],
  Info: [
    { label: "O nas", href: "/info" },
    { label: "Kontakt", href: "/info#contact" },
    { label: "FAQ", href: "/info#faq" },
    { label: "Wysyłka", href: "/info#shipping" },
    { label: "Zwroty", href: "/info#returns" },
    { label: "Polityka prywatności", href: "/info#privacy" },
  ],
};

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/6 bg-gray-50">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Twoje główne miejsce na profesjonalny sprzęt wędkarski. Zaufało
              nam ponad 10 000 wędkarzy w całej Europie.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-black/8 text-gray-400 hover:text-[#1a8c00] hover:border-[#39FF14]/30 transition-colors shadow-sm"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-[#39FF14]" />
                <span>kontakt@feederon.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-[#39FF14]" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-[#39FF14]" />
                <span>Łańcut, Polska</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-gray-900 font-bold text-xs tracking-widest uppercase mb-5">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#1a8c00] text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase">
                Bądź na bieżąco
              </h4>
              <p className="text-gray-400 text-xs mt-1">
                Nowości, porady wędkarskie, ekskluzywne okazje.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="twoj@email.com"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white border border-black/8 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#39FF14]/50 transition-colors shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-neon px-5 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase whitespace-nowrap"
              >
                Zapisz się
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 bg-white">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© 2026 FeederOn. Wszelkie prawa zastrzeżone.</span>
          <div className="flex items-center gap-1">
            <span>Stworzone z</span>
            <span
              className="text-[#39FF14]"
              style={{ filter: "drop-shadow(0 0 4px rgba(57,255,20,0.8))" }}
            >
              ♥
            </span>
            <span>dla wędkarzy na całym świecie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
