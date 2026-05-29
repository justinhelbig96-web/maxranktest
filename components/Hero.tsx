"use client";

import { motion } from "framer-motion";
import { Zap, Users, Star, Shield } from "lucide-react";
import Image from "next/image";

const rankIcons = [
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png", label: "Radiant", color: "#FDDE6C", x: "left-[4%]", y: "top-[22%]", size: 72, delay: 0.2 },
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/24/largeicon.png", label: "Immortal", color: "#AC3733", x: "left-[10%]", y: "top-[55%]", size: 56, delay: 0.4 },
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/21/largeicon.png", label: "Ascendant", color: "#27EE73", x: "left-[6%]", y: "top-[75%]", size: 48, delay: 0.6 },
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png", label: "Radiant", color: "#FDDE6C", x: "right-[4%]", y: "top-[22%]", size: 72, delay: 0.3 },
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/20/largeicon.png", label: "Diamond", color: "#B489C4", x: "right-[10%]", y: "top-[55%]", size: 56, delay: 0.5 },
  { src: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/17/largeicon.png", label: "Platinum", color: "#56BEC4", x: "right-[6%]", y: "top-[75%]", size: 48, delay: 0.7 },
];

const stats = [
  { icon: Users, value: "300+", label: "zufriedene Schüler" },
  { icon: Star, value: "100%", label: "positive Reviews" },
  { icon: Shield, value: "Immortal+", label: "Coaches" },
];

export default function Hero() {
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

      {/* Floating rank icons */}
      {rankIcons.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: r.delay, ease: "easeOut" }}
          className={`absolute ${r.x} ${r.y} hidden lg:block pointer-events-none`}
          style={{ filter: `drop-shadow(0 0 16px ${r.color}88)` }}
        >
          <Image src={r.src} alt={r.label} width={r.size} height={r.size} unoptimized />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto pt-24 pb-16">
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
          Werde Teil der Rankmaxx Collective Community und starte deinen Aufstieg — mit Radiant Coaches, exklusiven Inhalten und einer Community die wächst.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <a
            href="https://whop.com/maxranktestshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-[#6EE800] text-black font-bold text-lg rounded-xl hover:bg-[#A3F000] transition-all duration-200 hover:shadow-[0_0_40px_rgba(110,232,0,0.45)] active:scale-[0.97]"
          >
            Mitglied werden
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full border-t border-white/8 pt-8 grid grid-cols-3 gap-6"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-1">
                <Icon className="w-4 h-4 text-[#6EE800] mb-1" />
                <span className="text-xl font-black text-white">{s.value}</span>
                <span className="text-xs text-gray-500 font-medium">{s.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
