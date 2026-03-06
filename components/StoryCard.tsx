"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import type { Story } from "@/lib/data";
import clsx from "clsx";

const categoryColors: Record<string, string> = {
  Destynacje: "bg-blue-50 border-blue-100 text-blue-600",
  Techniki:   "bg-purple-50 border-purple-100 text-purple-600",
  Poradniki:  "bg-orange-50 border-orange-100 text-orange-600",
  Sezonowe:   "bg-teal-50 border-teal-100 text-teal-600",
  Recenzje:   "bg-pink-50 border-pink-100 text-pink-600",
  Wywiady:    "bg-[#39FF14]/10 border-[#39FF14]/20 text-[#1a7a00]",
};

interface StoryCardProps {
  story: Story;
  index?: number;
  featured?: boolean;
}

export default function StoryCard({ story, index = 0, featured = false }: StoryCardProps) {
  const [hovered, setHovered] = useState(false);

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative rounded-3xl overflow-hidden"
        style={{ minHeight: "480px" }}
      >
        <div className="absolute inset-0">
          <motion.div animate={{ scale: hovered ? 1.03 : 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full h-full">
            <Image src={story.image} alt={story.title} fill className="object-cover" sizes="100vw" priority />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={clsx("text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md", categoryColors[story.category] || "bg-white/10 border-white/20 text-white/80")}>
              {story.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs"><Clock size={11} />{story.readTime}</span>
          </div>
          <h2 className="text-white font-black text-2xl md:text-4xl leading-tight max-w-2xl mb-4">{story.title}</h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed mb-6">{story.excerpt}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
                <Image src={story.authorImage} alt={story.author} fill className="object-cover" sizes="36px" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{story.author}</p>
                <p className="text-white/40 text-xs flex items-center gap-1"><Calendar size={10} />{story.date}</p>
              </div>
            </div>
            <Link href={`/stories/${story.id}`}>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-neon flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase">
                Czytaj <ArrowUpRight size={14} />
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="absolute top-6 right-6">
          <span className="badge-neon flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" style={{ boxShadow: "0 0 6px rgba(57,255,20,1)" }} />Wyróżniony</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={clsx(
          "rounded-2xl overflow-hidden bg-white border transition-all duration-300",
          hovered ? "border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.09)]" : "border-black/7 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        )}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-50">
          <motion.div animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.4 }} className="w-full h-full">
            <Image src={story.image} alt={story.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </motion.div>
          <div className="absolute top-3 left-3">
            <span className={clsx("text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-md", categoryColors[story.category] || "bg-white/80 border-black/10 text-gray-600")}>
              {story.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3 text-gray-400 text-[11px]">
            <span className="flex items-center gap-1"><Calendar size={10} />{story.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={10} />{story.readTime}</span>
          </div>
          <h3 className={clsx("font-bold text-sm leading-snug mb-2 line-clamp-2 transition-colors duration-300", hovered ? "text-[#1a8c00]" : "text-gray-900")}>
            {story.title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">{story.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/8">
                <Image src={story.authorImage} alt={story.author} fill className="object-cover" sizes="28px" />
              </div>
              <span className="text-gray-500 text-xs font-medium">{story.author}</span>
            </div>
            <Link href={`/stories/${story.id}`}>
              <motion.span whileHover={{ x: 2 }} className="flex items-center gap-1 text-[#1a8c00] hover:text-[#39FF14] text-xs font-bold transition-colors">
                Czytaj <ArrowUpRight size={12} />
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
