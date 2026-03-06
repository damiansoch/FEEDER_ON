import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#39FF14",
        "neon-dim": "#1a8c00",
        dark: {
          DEFAULT: "#000000",
          100: "#080808",
          200: "#111111",
          300: "#1a1a1a",
          400: "#242424",
          500: "#2e2e2e",
        },
      },
      fontFamily: {
        display: ["Impact", "Arial Black", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)",
        "neon-sm": "0 0 8px rgba(57,255,20,0.4), 0 0 16px rgba(57,255,20,0.15)",
        "neon-lg": "0 0 40px rgba(57,255,20,0.7), 0 0 80px rgba(57,255,20,0.35), 0 0 120px rgba(57,255,20,0.15)",
        glass: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-hover": "0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-neon": "pulseNeon 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        shimmer: "shimmer 3s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.7", filter: "brightness(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(1deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(57,255,20,0.3)" },
          "50%": { borderColor: "rgba(57,255,20,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
