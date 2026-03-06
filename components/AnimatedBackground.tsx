"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function generateParticles(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.12 + 0.04,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
  }));
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([]);

  useEffect(() => {
    setParticles(generateParticles(20));
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 grid-pattern" />
      <motion.div
        className="blob w-[700px] h-[700px]"
        style={{ top: "-200px", right: "-150px", background: "radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob w-[500px] h-[500px]"
        style={{ bottom: "-100px", left: "-100px", background: "radial-gradient(circle, rgba(57,255,20,0.05) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#39FF14]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ y: [0, -20, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
