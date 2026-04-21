"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, Zap } from "lucide-react";

const ranks = ["RADIANT", "IMMORTAL", "ASCENDANT", "DIAMOND"];

const socialProof = [
  { value: "500+", label: "Trainierte Spieler" },
  { value: "95%", label: "Rank-Up-Quote" },
  { value: "4.9★", label: "Ø Bewertung" },
  { value: "Radiant", label: "Coach-Rang" },
];

export default function Hero() {
  const [rankIndex, setRankIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRankIndex((i) => (i + 1) % ranks.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#6EE800] opacity-[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#6EE800] opacity-[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#6EE800] opacity-[0.02] blur-[200px] pointer-events-none" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE800]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#6EE800]/10 border border-[#6EE800]/25 rounded-full px-4 py-1.5 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-[#6EE800] fill-[#6EE800]" />
          <span className="text-sm text-[#6EE800] font-semibold tracking-wide">
            PROFESSIONELLES VALORANT COACHING
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-none tracking-tight text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            ENTFALTE DEIN
          </motion.h1>

          {/* Animated Rank Word */}
          <div className="h-[clamp(3.5rem,10vw,8rem)] flex items-center justify-center my-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={ranks[rankIndex]}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.96 }}
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="text-[clamp(3.5rem,10vw,8rem)] font-black uppercase leading-none tracking-tight text-[#6EE800] glow-text block"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {ranks[rankIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-none tracking-tight text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            POTENZIAL
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6 mb-10 leading-relaxed"
        >
          1-zu-1 personalisiertes Coaching, zugeschnitten auf{" "}
          <span className="text-white font-medium">deinen Spielstil</span>. VOD-Analyse,
          individuelle Spielpläne und bewährte Strategien, damit du aufhörst zu stagnieren
          und endlich rankst.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="/login"
            className="group relative px-8 py-4 bg-[#6EE800] text-black font-bold text-lg rounded-xl hover:bg-[#A3F000] transition-all duration-200 hover:shadow-[0_0_40px_rgba(110,232,0,0.45)] active:scale-[0.97] overflow-hidden"
          >
            <span className="relative z-10">Gratis Beratung buchen</span>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border border-white/15 text-white font-semibold text-lg rounded-xl hover:border-[#6EE800]/40 hover:text-[#6EE800] transition-all duration-200 flex items-center gap-2 justify-center"
          >
            So funktioniert&apos;s <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Social Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-full max-w-2xl"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 border-t border-white/8 pt-8">
            {socialProof.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl md:text-2xl font-black text-white">
                  {s.value}
                </span>
                <span className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
