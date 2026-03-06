"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, Eye } from "lucide-react";
import type { Product } from "@/lib/data";
import clsx from "clsx";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeColors: Record<string, string> = {
  BESTSELLER: "bg-[#39FF14] text-black",
  SALE: "bg-red-500 text-white",
  NEW: "bg-blue-500 text-white",
  "TOP RATED": "bg-violet-500 text-white",
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => { setAdded(true); setTimeout(() => setAdded(false), 2000); };
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className={clsx(
          "relative rounded-2xl overflow-hidden bg-white border transition-all duration-300",
          hovered
            ? "border-[#39FF14]/25 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_0_0_1px_rgba(57,255,20,0.12)]"
            : "border-black/7 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
        )}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
          <motion.div animate={{ scale: hovered ? 1.05 : 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full h-full">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </motion.div>
          <motion.div animate={{ opacity: hovered ? 1 : 0 }} className="absolute inset-0 bg-black/15" />

          {/* Badge */}
          {product.badge && (
            <div className={clsx("absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-lg tracking-widest", badgeColors[product.badge])}>
              {product.badge}
            </div>
          )}
          {discount && (
            <div className="absolute top-3 right-3 text-[10px] font-black bg-red-500 text-white px-2 py-1 rounded-lg">-{discount}%</div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
              <span className="border border-black/10 text-gray-500 text-xs font-bold px-4 py-2 rounded-lg tracking-widest uppercase bg-white shadow-sm">Brak w magazynie</span>
            </div>
          )}

          {/* Hover actions */}
          <motion.div animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }} transition={{ duration: 0.2 }} className="absolute bottom-3 right-3 flex flex-col gap-2">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setLiked((v) => !v)}
              className={clsx("w-9 h-9 rounded-xl flex items-center justify-center border backdrop-blur-md transition-colors", liked ? "bg-red-50 border-red-200 text-red-500" : "bg-white/80 border-black/10 text-gray-400 hover:text-gray-700")}>
              <Heart size={15} fill={liked ? "currentColor" : "none"} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/80 border border-black/10 text-gray-400 hover:text-gray-700 backdrop-blur-md transition-colors">
              <Eye size={15} />
            </motion.button>
          </motion.div>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: "#1a8c00" }}>{product.category}</p>
          <h3 className="text-gray-900 font-bold text-sm leading-snug mb-2 line-clamp-2">{product.name}</h3>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className={i < Math.round(product.rating) ? "star-filled" : "star-empty"} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-400 text-[11px]">{product.rating} ({product.reviews})</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-gray-900 font-black text-lg">{product.price.toFixed(2)} zł</span>
              {product.originalPrice && <span className="text-gray-300 text-xs line-through">{product.originalPrice.toFixed(2)} zł</span>}
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} onClick={handleAdd} disabled={!product.inStock}
              className={clsx("flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black tracking-wide uppercase transition-all",
                added ? "bg-[#39FF14]/15 border border-[#39FF14]/30 text-[#1a8c00]"
                : product.inStock ? "btn-neon"
                : "bg-gray-50 border border-gray-200 text-gray-300 cursor-not-allowed")}>
              {added ? <>✓ Dodano</> : <><ShoppingCart size={12} />Dodaj</>}
            </motion.button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[9px] font-bold tracking-wide text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">#{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
