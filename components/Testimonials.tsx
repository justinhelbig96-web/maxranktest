"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, TrendingUp, X, ZoomIn, ChevronRight } from "lucide-react";
import Image from "next/image";

// RyZeey transformation steps — shown as a single combined tile
const ryzeeySteps = [
  { src: "/reviews/5.png", rank: "Gold 3", date: "14.03.2026" },
  { src: "/reviews/4.png", rank: "Platinum 2", date: "20.03.2026" },
  { src: "/reviews/3.png", rank: "Ascendant 1 🎉", date: "22.04.2026" },
];

const otherReviews = [
  {
    src: "/reviews/1.png",
    alt: "Yoyo Gold 3 → Diamond 2",
    rank: "Gold 3 → Diamond 2",
    date: "28.04.2026",
    name: "Yoyo",
    avatar: "YO",
    coach: "@PreciseErik",
    quote: "Dank @PreciseErik seiner Hilfe und Geduld. Knapp 1 Monat von Gold 3 zu Dia 2. Nur Liebe an ihn 🙏",
  },
  {
    src: "/reviews/2.png",
    alt: "Raphael → Diamond 1",
    rank: "→ Diamond 1",
    date: "26.04.2026",
    name: "Raphael",
    avatar: "RA",
    coach: "@koni",
    quote: "Hatte vor genau 2 Wochen ein Coaching mit @koni und habe mich extrem verbessert! Kann es nur nochmal wiederholen wie viel ein Coaching bringt. Danke nochmal!",
  },
];

function renderQuote(text: string) {
  return text.split(/(@PreciseErik|@koni|@Eisblokk)/g).map((part, i) =>
    /^(@PreciseErik|@koni|@Eisblokk)$/.test(part) ? (
      <span key={i} className="text-[#6EE800] font-medium">{part}</span>
    ) : part
  );
}

export default function Testimonials() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(110,232,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        {/* ── Grid: 3 equal tiles ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">

          {/* Tile 1 — RyZeey combined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#111316] border border-[#6EE800]/25 rounded-2xl overflow-hidden flex flex-col"
          >
            {/* 3-step mini thumbnails */}
            <div className="flex gap-1 p-3">
              {ryzeeySteps.map((step, i) => (
                <div key={step.src} className="flex items-center gap-1 flex-1 min-w-0">
                  <button
                    onClick={() => setLightbox(step.src)}
                    className="relative flex-1 rounded-xl overflow-hidden group cursor-zoom-in"
                    style={{ height: "110px" }}
                  >
                    <Image
                      src={step.src}
                      alt={step.rank}
                      fill
                      className="object-cover object-top"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 bg-black/70 rounded-full p-1.5 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1.5 pb-1.5 pt-3 pointer-events-none">
                      <span className="text-[#6EE800] text-[9px] font-bold block truncate">{step.rank}</span>
                    </div>
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-[#6EE800] flex items-center justify-center pointer-events-none">
                      <span className="text-black text-[8px] font-black">{i + 1}</span>
                    </div>
                  </button>
                  {i < ryzeeySteps.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-[#6EE800]/40 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
            {/* Info */}
            <div className="px-4 pb-4 flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-[9px] font-black flex-shrink-0">
                  RZ
                </div>
                <span className="text-white font-bold text-sm">RyZeey</span>
                <div className="flex items-center gap-1 ml-auto">
                  <TrendingUp className="w-3 h-3 text-[#6EE800]" />
                  <span className="text-[#6EE800] text-xs font-bold">G3 → Asc 1</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                In 6 Tagen mit den Tipps von{" "}
                <span className="text-[#6EE800] font-medium">@Eisblokk</span>{" "}
                das geschafft. Ich liebe den Typen nur ❤️ Die TikToks helfen auch krass zusätzlich zum Coaching.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-600 text-xs">~5 Wochen</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tiles 2 & 3 — Yoyo, Raphael */}
          {otherReviews.map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.09 }}
              className="bg-[#111316] border border-white/8 rounded-2xl overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setLightbox(r.src)}
                className="relative w-full group cursor-zoom-in flex-shrink-0"
                style={{ height: "190px" }}
              >
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-black/70 rounded-full p-2 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm border border-[#6EE800]/40 rounded-full px-2.5 py-1 pointer-events-none">
                  <span className="text-[#6EE800] text-xs font-bold">{r.rank}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111316] to-transparent pointer-events-none" />
              </button>
              <div className="px-4 pb-4 pt-3 flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-[9px] font-black flex-shrink-0">
                    {r.avatar}
                  </div>
                  <span className="text-white font-bold text-sm">{r.name}</span>
                  <span className="text-gray-500 text-xs">{r.date}</span>
                  <div className="flex gap-0.5 ml-auto">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {renderQuote(r.quote)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightbox}
                  alt="Review Screenshot"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Rating ── */}
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
            <span className="text-white font-bold text-lg">100%</span>
            <span className="text-gray-400 text-sm">Positive Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
