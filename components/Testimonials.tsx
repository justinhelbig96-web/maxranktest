"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(110,232,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Schüler-Bewertungen
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Echte Ergebnisse,{" "}
            <span className="text-[#6EE800]">echte Schüler</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Glaub uns nicht einfach. Hier ist, was unsere Schüler sagen.
          </p>
        </motion.div>

        {/* ── Transformation Story: RyZeey ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-[#6EE800]" />
            <span className="text-[#6EE800] text-xs font-bold tracking-widest uppercase">
              Transformation Story
            </span>
          </div>

          <div className="bg-gradient-to-br from-[#111316] to-[#0d0f12] border border-[#6EE800]/25 rounded-3xl p-6 lg:p-8">
            {/* Card header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-sm font-black">
                  RZ
                </div>
                <div>
                  <span className="text-white font-black text-xl block leading-none">RyZeey</span>
                  <span className="text-gray-500 text-xs mt-0.5">Coaching mit @Eisblokk</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#6EE800]/10 border border-[#6EE800]/30 rounded-full px-4 py-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#6EE800]" />
                <span className="text-[#6EE800] font-bold text-sm">Gold 3 → Ascendant 1</span>
                <span className="text-gray-500 text-xs border-l border-white/10 pl-2 ml-1">~5 Wochen</span>
              </div>
            </div>

            {/* 3-step screenshot progression */}
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#6EE800]/20 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] font-bold text-[10px] flex-shrink-0">
                    1
                  </span>
                  <span className="text-gray-500 text-xs">14.03.2026 · Gold 3</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/8 flex-1">
                  <Image
                    src="/reviews/5.png"
                    alt="RyZeey Gold 3 nach Eisblokk Coaching"
                    width={520}
                    height={420}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-1">
                <ChevronRight className="w-5 h-5 text-[#6EE800] rotate-90 md:rotate-0 flex-shrink-0" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#6EE800]/20 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] font-bold text-[10px] flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-500 text-xs">20.03.2026 · Platinum 2</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/8 flex-1">
                  <Image
                    src="/reviews/4.png"
                    alt="RyZeey Platinum 2 in 6 Tagen"
                    width={520}
                    height={420}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-1">
                <ChevronRight className="w-5 h-5 text-[#6EE800] rotate-90 md:rotate-0 flex-shrink-0" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#6EE800]/20 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] font-bold text-[10px] flex-shrink-0">
                    3
                  </span>
                  <span className="text-gray-500 text-xs">22.04.2026 · Ascendant 1 🎉</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/8 flex-1">
                  <Image
                    src="/reviews/3.png"
                    alt="RyZeey Ascendant 1"
                    width={520}
                    height={420}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Quote bar */}
            <div className="mt-6 bg-[#080808] rounded-2xl px-5 py-4 border border-white/5 flex items-start gap-3">
              <span className="text-[#6EE800] text-2xl leading-none mt-0.5 select-none">"</span>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  In 6 Tagen mit den Tipps von{" "}
                  <span className="text-[#6EE800] font-semibold">@Eisblokk</span> das geschafft.
                  Ich liebe den Typen nur ❤️ Die TikToks helfen auch krass zusätzlich zum Coaching.
                </p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other Reviews: Yoyo + Raphael ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Yoyo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111316] border border-white/8 rounded-3xl overflow-hidden"
          >
            <div className="relative">
              <Image
                src="/reviews/1.png"
                alt="Yoyo Gold 3 → Diamond 2"
                width={700}
                height={520}
                className="w-full object-cover object-top"
              />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-[#6EE800]/30 rounded-full px-3 py-1">
                <span className="text-[#6EE800] text-xs font-bold">Gold 3 → Diamond 2</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-[10px] font-black">
                    YO
                  </div>
                  <span className="text-white font-bold text-sm">Yoyo</span>
                  <span className="text-gray-500 text-xs">28.04.2026</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dank{" "}
                <span className="text-[#6EE800] font-medium">@PreciseErik</span>{" "}
                seiner Hilfe und Geduld. Knapp 1 Monat von Gold 3 zu Dia 2. Nur Liebe an ihn 🙏
              </p>
            </div>
          </motion.div>

          {/* Raphael */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111316] border border-white/8 rounded-3xl overflow-hidden"
          >
            <div className="relative">
              <Image
                src="/reviews/2.png"
                alt="Raphael Diamond 1"
                width={700}
                height={520}
                className="w-full object-cover object-top"
              />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-[#6EE800]/30 rounded-full px-3 py-1">
                <span className="text-[#6EE800] text-xs font-bold">→ Diamond 1</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-[10px] font-black">
                    RA
                  </div>
                  <span className="text-white font-bold text-sm">Raphael</span>
                  <span className="text-gray-500 text-xs">26.04.2026</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hatte vor genau 2 Wochen ein Coaching mit{" "}
                <span className="text-[#6EE800] font-medium">@koni</span>{" "}
                und habe mich extrem verbessert! Kann es nur nochmal wiederholen wie viel ein
                Coaching bringt. Danke nochmal!
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Average rating ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-3 bg-[#111] border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#6EE800] fill-[#6EE800]" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-gray-400 text-sm">Ø Bewertung aus 500+ Sessions</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
