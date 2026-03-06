"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import clsx from "clsx";

const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Sklep", href: "/shop" },
  { label: "Artykuły", href: "/stories" },
  { label: "Info", href: "/info" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(3);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-black/6 py-3"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-200",
                    active ? "text-[#1a8c00]" : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  {active && (
                    <motion.span layoutId="nav-active" className="absolute inset-0 rounded-lg bg-[#39FF14]/10" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#39FF14] rounded-full" style={{ boxShadow: "0 0 6px rgba(57,255,20,0.8)" }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-black/5 transition-colors">
              <Search size={18} />
            </motion.button>

            <Link href="/shop">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-gray-900 transition-colors border border-black/8 bg-white/80">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#39FF14] text-black text-[9px] font-black flex items-center justify-center" style={{ boxShadow: "0 0 6px rgba(57,255,20,0.7)" }}>
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>
            </Link>

            <Link href="/shop" className="hidden md:block">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-neon px-5 py-2 rounded-lg text-xs font-black tracking-widest uppercase">
                Kup Teraz
              </motion.button>
            </Link>

            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMobileOpen((v) => !v)} className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-gray-900 transition-colors">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[68px] z-40 glass border-b border-black/6 md:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Link href={link.href} className={clsx(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all",
                      active ? "text-[#1a8c00] bg-[#39FF14]/10 border border-[#39FF14]/20" : "text-gray-600 hover:text-gray-900 hover:bg-black/4"
                    )}>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] mr-3" style={{ boxShadow: "0 0 6px rgba(57,255,20,1)" }} />}
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-2 pt-2 border-t border-black/5">
                <Link href="/shop">
                  <button className="btn-neon w-full py-3 rounded-xl text-sm font-black tracking-widest uppercase">Kup Teraz</button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
