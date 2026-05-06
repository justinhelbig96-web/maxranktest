"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Hero() {
  useEffect(() => {}, []);

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
            ZEIT FÜR DEINEN AUFSTIEG
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
            ZEIT FÜR DEINEN
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-none tracking-tight text-[#6EE800] glow-text"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            AUFSTIEG
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6 mb-10 leading-relaxed"
        >
          Werde Teil der Rankmaxx Ascension Community und starte deinen Aufstieg — mit Radiant Coaches, exklusiven Inhalten und einer Community die wächst.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="https://whop.com/maxranktestshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#6EE800] text-black font-bold text-lg rounded-xl hover:bg-[#A3F000] transition-all duration-200 hover:shadow-[0_0_40px_rgba(110,232,0,0.45)] active:scale-[0.97] overflow-hidden"
          >
            <span className="relative z-10">Mitglied werden</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
