"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Probe-Session",
    price: 24.99,
    description: "Perfekt zum Reinschnuppern — kein Commitment, nur Wachstum.",
    badge: null,
    features: [
      "1× 60-minütige Coaching-Session",
      "VOD-Review von 2 aktuellen Matches",
      "Persönlicher Verbesserungsplan",
      "7-tage Discord-Nachbetreuung",
      "Agent-spezifische Tipps",
    ],
    cta: "Probe-Session buchen",
    highlight: false,
  },
  {
    name: "Grind-Paket",
    price: 64.99,
    originalPrice: 74.97,
    description: "Die beliebteste Wahl — echte Ergebnisse innerhalb weniger Wochen.",
    badge: "AM BELIEBTESTEN",
    features: [
      "3× 60-minütige Coaching-Sessions",
      "Tiefgehende VOD-Analyse",
      "Persönliche Verbesserungs-Roadmap",
      "30-tage Discord-Support",
      "Fortschritts-Tracking zwischen Sessions",
      "Agent-spezifisches Coaching",
    ],
    cta: "Grind-Paket holen",
    highlight: true,
    saving: "15% sparen",
  },
  {
    name: "Elite-Paket",
    price: 109.99,
    originalPrice: 149.95,
    description: "Maximaler Fortschritt für ernsthafte Spieler, die High-Elo anstreben.",
    badge: "BESTES PREIS-LEISTUNG",
    features: [
      "5× 60-minütige Coaching-Sessions",
      "Alles aus dem Grind-Paket",
      "Tägliche individuelle Trainings-Drills",
      "60-tage unlimitierter Discord-Support",
      "Prioritäts-Buchungen & Umbuchungen",
      "Gegner-Analyse & Matchup-Vorbereitung",
    ],
    cta: "Elite-Paket holen",
    highlight: false,
    saving: "25% sparen",
  },
];

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-[#080808] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,232,0,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Preise
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Einfache, <span className="text-[#6EE800]">transparente</span> Preise
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Keine versteckten Gebühren. Keine Abo-Fallen. Einmal zahlen, besser spielen.
          </p>
        </motion.div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#6EE800]/10 border border-[#6EE800]/20 rounded-full px-4 py-1.5">
            <Zap className="w-4 h-4 text-[#6EE800]" />
            <span className="text-sm text-[#6EE800] font-semibold">
              100% Zufriedenheit — kostenlose Nachbuchung, wenn du dich nicht verbesserst
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0f1a00] border-2 border-[#6EE800]/60 shadow-[0_0_60px_rgba(110,232,0,0.18)] scale-[1.02]"
                  : "bg-[#111111] border border-white/8"
              } ${
                hovered === i && !plan.highlight
                  ? "border-[#6EE800]/30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider ${
                    plan.highlight
                      ? "bg-[#6EE800] text-black"
                      : "bg-[#6EE800]/20 text-[#6EE800] border border-[#6EE800]/40"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-4">
                <h3
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-end gap-2">
                  <span
                    className={`text-5xl font-black ${plan.highlight ? "text-[#6EE800]" : "text-white"}`}
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    €{plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through text-sm mb-2">
                      €{plan.originalPrice}
                    </span>
                  )}
                </div>
                {plan.saving && (
                  <span className="text-xs text-[#6EE800] font-semibold bg-[#6EE800]/10 px-2 py-0.5 rounded-full">
                    {plan.saving}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className={`h-px mb-5 ${plan.highlight ? "bg-[#6EE800]/20" : "bg-white/8"}`} />

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-[#6EE800]" : "text-[#6EE800]/70"
                      }`}
                    />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/login"
                className={`block w-full py-3.5 rounded-xl text-center font-bold text-base transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#6EE800] text-black hover:bg-[#A3F000] hover:shadow-[0_0_30px_rgba(110,232,0,0.4)] active:scale-[0.97]"
                    : "border border-white/15 text-white hover:border-[#6EE800]/40 hover:text-[#6EE800] hover:bg-[#6EE800]/5"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Alle Sessions per Discord-Screen-Share. Terminbuchung über cal.com.
          Noch Fragen?{" "}
          <a href="#faq" className="text-[#6EE800] hover:underline">
            Zum FAQ
          </a>
        </p>
      </div>
    </section>
  );
}
