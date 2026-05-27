"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, TrendingUp, ChevronRight, ChevronLeft, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const allSlides = [
  {
    src: "/reviews/5.png",
    alt: "RyZeey Gold 3",
    rank: "Gold 3",
    date: "14.03.2026",
    name: "RyZeey",
    avatar: "RZ",
    coach: "@Eisblokk",
    step: 1,
    stepOf: 3,
    quote: "Hab die Tipps von @Eisblokk in einem Live coaching sehr gut umgesetzt. Bin nun wieder G3 (Teamplayer). Werde in Zukunft wieder ein coaching kaufen. @Eisblokk der Goat.",
  },
  {
    src: "/reviews/4.png",
    alt: "RyZeey Platinum 2",
    rank: "Platinum 2",
    date: "20.03.2026",
    name: "RyZeey",
    avatar: "RZ",
    coach: "@Eisblokk",
    step: 2,
    stepOf: 3,
    quote: "In 6 Tagen mit den Tipps von @Eisblokk das geschafft. Ich liebe den Typen nur ❤️ Die TikToks helfen auch krass zusätzlich zum Coaching.",
  },
  {
    src: "/reviews/3.png",
    alt: "RyZeey Ascendant 1",
    rank: "Ascendant 1 🎉",
    date: "22.04.2026",
    name: "RyZeey",
    avatar: "RZ",
    coach: "@Eisblokk",
    step: 3,
    stepOf: 3,
    quote: "Von Gold 3 auf Ascendant 1 — dank @Eisblokk. Krasse Reise in ~5 Wochen. 🔥",
  },
  {
    src: "/reviews/1.png",
    alt: "Yoyo Gold 3 → Diamond 2",
    rank: "Gold 3 → Diamond 2",
    date: "28.04.2026",
    name: "Yoyo",
    avatar: "YO",
    coach: "@PreciseErik",
    step: null,
    stepOf: null,
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
    step: null,
    stepOf: null,
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
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent((i + allSlides.length) % allSlides.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % allSlides.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, current]);

  const slide = allSlides[current];

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(110,232,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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

        {/* ── Unified Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-[#111316] border border-white/8 rounded-3xl overflow-hidden">

            {/* Screenshot */}
            <div className="relative h-[380px] sm:h-[520px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Clickable zoom */}
                  <button
                    onClick={() => setLightbox(slide.src)}
                    className="absolute inset-0 w-full h-full group cursor-zoom-in"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority={current === 0}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </button>

                  {/* Rank badge top-right */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm border border-[#6EE800]/40 rounded-full px-3 py-1.5 pointer-events-none">
                    <span className="text-[#6EE800] text-xs font-bold">{slide.rank}</span>
                  </div>

                  {/* Transformation step badge top-left */}
                  {slide.step && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm border border-[#6EE800]/30 rounded-full px-3 py-1.5 pointer-events-none">
                      <TrendingUp className="w-3 h-3 text-[#6EE800]" />
                      <span className="text-[#6EE800] text-xs font-bold">
                        Schritt {slide.step}/{slide.stepOf}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#6EE800]/50 transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-[#6EE800]/50 transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111316] to-transparent pointer-events-none" />
            </div>

            {/* Info bar */}
            <div className="px-6 pb-6 pt-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#6EE800]/15 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-[10px] font-black">
                        {slide.avatar}
                      </div>
                      <span className="text-white font-bold text-sm">{slide.name}</span>
                      <span className="text-gray-500 text-xs">{slide.date}</span>
                      <span className="text-gray-600 text-xs hidden sm:inline">· {slide.coach}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{renderQuote(slide.quote)}</p>
                </motion.div>
              </AnimatePresence>

              {/* Dots + progress */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {allSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-7 bg-[#6EE800]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

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
