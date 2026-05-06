"use client";

import { motion } from "framer-motion";
import { Check, Zap, Lock } from "lucide-react";

const tiers = [
  {
    name: "Rankmaxx Tier 1",
    price: "24,99",
    originalPrice: null,
    period: "/ Monat",
    description: "Alles was du brauchst, um eigenständig zu climben.",
    badge: null,
    highlight: false,
    color: "#6EE800",
    glow: "rgba(110,232,0,0.25)",
    border: "rgba(110,232,0,0.4)",
    checkoutUrl: "https://whop.com/maxranktestshop/",
    features: [
      "Zugang zur Videobibliothek (Smurf Commentaries & Playbooks)",
      "Premier Team Betreuung",
      "Stage Calls",
      "Progress Tracking",
      "Rankmaxx Aimroutinen",
      "Clip Reviews von Coaches",
      "Interne Challenges (RR etc.)",
      "LFG System",
    ],
  },
  {
    name: "Rankmaxx Tier 2",
    price: "39,99",
    originalPrice: "48,99",
    period: "/ Monat",
    description: "Limitiert — persönliche Betreuung auf höchstem Niveau.",
    badge: "LIMITIERT",
    highlight: true,
    color: "#FDDE6C",
    glow: "rgba(253,222,108,0.3)",
    border: "rgba(253,222,108,0.5)",
    checkoutUrl: "https://whop.com/maxranktestshop/",
    features: [
      "Alles aus Tier 1 inklusive",
      "1× Individuelles Coaching/Monat (Zeitgestaltung frei wählbar)",
      "Direkter DM-Kontakt mit deinem Coach",
      "Monthly Gameplan (tägliche Tipps zu Agents & Maps)",
      "Coaching Log — Notizen nach jeder Session",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#080808] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,232,0,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Abo-Modelle
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Wähle <span className="text-[#6EE800]">dein Level</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Beide Modelle jederzeit kündbar. Tier 2 ist limitiert.
          </p>
        </motion.div>

        {/* Badge */}
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
              Jederzeit kündbar — kein Commitment
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                borderColor: tier.border,
                boxShadow: tier.highlight ? `0 0 60px ${tier.glow}, 0 0 120px ${tier.glow}` : undefined,
              }}
              className={`relative rounded-2xl p-7 ${
                tier.highlight ? "bg-[#0d1018] border-2" : "bg-[#111111] border border-white/10"
              }`}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-tr-2xl pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle at top right, ${tier.color}, transparent 70%)` }}
              />

              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider text-black flex items-center gap-1"
                  style={{ backgroundColor: tier.color }}
                >
                  <Lock className="w-3 h-3" />
                  {tier.badge}
                </div>
              )}

              {/* Name */}
              <h3
                className="text-2xl font-black mb-1"
                style={{ fontFamily: "Rajdhani, sans-serif", color: tier.color }}
              >
                {tier.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">
                <span
                  className="text-5xl font-black"
                  style={{ fontFamily: "Rajdhani, sans-serif", color: tier.color }}
                >
                  €{tier.price}
                </span>
                <span className="text-gray-400 mb-1.5">{tier.period}</span>
                {tier.originalPrice && (
                  <span className="text-gray-500 line-through text-sm mb-2">€{tier.originalPrice}</span>
                )}
              </div>

              {/* Divider */}
              <div className="h-px mb-5" style={{ backgroundColor: tier.border }} />

              {/* Features */}
              <ul className="space-y-3 mb-7">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 rounded-xl text-center font-black text-base transition-all duration-200 active:scale-[0.97] hover:brightness-110"
                style={{
                  backgroundColor: tier.highlight ? tier.color : "transparent",
                  color: tier.highlight ? "#000" : tier.color,
                  border: tier.highlight ? "none" : `1px solid ${tier.border}`,
                }}
              >
                {tier.highlight ? "Tier 2 beitreten" : "Tier 1 starten"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Noch Fragen?{" "}
          <a href="#faq" className="text-[#6EE800] hover:underline">
            Zum FAQ
          </a>
        </p>
      </div>
    </section>
  );
}
