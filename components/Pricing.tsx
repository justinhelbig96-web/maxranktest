"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Gold Paket",
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
    cta: "Gold Paket buchen",
    highlight: false,
    icon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/19/largeicon.png",
    color: "#F0B429",
    glow: "rgba(240,180,41,0.35)",
    border: "rgba(240,180,41,0.5)",
  },
  {
    name: "Diamond Paket",
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
    cta: "Diamond Paket holen",
    highlight: true,
    saving: "15% sparen",
    icon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/22/largeicon.png",
    color: "#4FC3F7",
    glow: "rgba(79,195,247,0.35)",
    border: "rgba(79,195,247,0.6)",
  },
  {
    name: "Radiant Paket",
    price: 109.99,
    originalPrice: 149.95,
    description: "Maximaler Fortschritt für ernsthafte Spieler, die High-Elo anstreben.",
    badge: "BESTES PREIS-LEISTUNG",
    features: [
      "5× 60-minütige Coaching-Sessions",
      "Alles aus dem Diamond Paket",
      "Tägliche individuelle Trainings-Drills",
      "60-tage unlimitierter Discord-Support",
      "Prioritäts-Buchungen & Umbuchungen",
      "Gegner-Analyse & Matchup-Vorbereitung",
    ],
    cta: "Radiant Paket holen",
    highlight: false,
    saving: "25% sparen",
    icon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/27/largeicon.png",
    color: "#FFFDE7",
    glow: "rgba(255,230,100,0.35)",
    border: "rgba(255,220,80,0.55)",
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
              style={
                plan.highlight
                  ? {
                      borderColor: plan.border,
                      boxShadow: `0 0 60px ${plan.glow}, 0 0 120px ${plan.glow}`,
                    }
                  : hovered === i
                  ? {
                      borderColor: plan.border,
                      boxShadow: `0 0 40px ${plan.glow}`,
                    }
                  : {}
              }
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0d1018] border-2 scale-[1.02]"
                  : "bg-[#111111] border border-white/8"
              }`}
            >
              {/* Rank icon background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-tr-2xl pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle at top right, ${plan.color}, transparent 70%)` }}
              />

              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider text-black"
                  style={{ backgroundColor: plan.color }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Rank icon + Plan name */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={plan.icon}
                  alt={plan.name}
                  width={52}
                  height={52}
                  unoptimized
                  style={{ filter: `drop-shadow(0 0 8px ${plan.glow})` }}
                />
                <div>
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "Rajdhani, sans-serif", color: plan.color }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-end gap-2">
                  <span
                    className="text-5xl font-black"
                    style={{ fontFamily: "Rajdhani, sans-serif", color: plan.color }}
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
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: plan.color, backgroundColor: `${plan.glow}` }}
                  >
                    {plan.saving}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ backgroundColor: `${plan.border}` }} />

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: plan.color }}
                    />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/login"
                className="block w-full py-3.5 rounded-xl text-center font-bold text-base transition-all duration-200 active:scale-[0.97]"
                style={{
                  backgroundColor: plan.highlight ? plan.color : "transparent",
                  color: plan.highlight ? "#000" : plan.color,
                  border: plan.highlight ? "none" : `1px solid ${plan.border}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 30px ${plan.glow}`;
                  if (!plan.highlight) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${plan.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  if (!plan.highlight) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
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
