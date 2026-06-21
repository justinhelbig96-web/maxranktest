"use client";

import { motion } from "framer-motion";
import { Check, Zap, Lock } from "lucide-react";

const tiers = [
  {
    name: "RANKMAXX ASCENSION",
    price: "49,99",
    originalPrice: null,
    period: "/ Monat",
    description: "Limitiert — persönliche Betreuung auf höchstem Niveau.",
    soldOut: true,
    badge: "LIMITIERT",
    highlight: true,
    color: "#FDDE6C",
    glow: "rgba(253,222,108,0.3)",
    border: "rgba(253,222,108,0.5)",
    checkoutUrl: "https://whop.com/joined/rankmaxx-deb8/products/rankmaxx-ascension/",
    features: [
      "Stage Calls",
      "Progress Tracking",
      "Clip Reviews von Coaches",
      "LFG System",
      "1× Individuelles Coaching/Monat",
      "Direkter DM-Kontakt mit deinem Coach",
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
            Rankmaxx Collective
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Wähle <span className="text-[#6EE800]">dein Level</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Jederzeit kündbar — kein Commitment. Plätze limitiert.
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
        <div className="flex justify-center">
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
              className={`relative rounded-2xl p-7 w-full max-w-md ${
                tier.highlight ? "bg-[#0d1018] border-2" : "bg-[#111111] border border-white/10"
              }`}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-tr-2xl pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle at top right, ${tier.color}, transparent 70%)` }}
              />

              {/* Diagonal Hinweis-Banner (Discord blue) */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div
                  className="absolute top-[40px] right-[-84px] w-[300px] text-center py-3 text-[11px] md:text-[12px] font-bold tracking-wide uppercase text-white rotate-45 shadow-lg ring-1 ring-white/10"
                  style={{
                    background: "linear-gradient(90deg, #4752C4, #5865F2)",
                    boxShadow: "0 0 18px rgba(88,101,242,0.6), 0 2px 8px rgba(0,0,0,0.5)",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    fontFamily: "Rajdhani, sans-serif",
                  }}
                >
                  Verfügbarkeit auf Anfrage
                </div>
              </div>

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

              {/* Verfügbare Plätze */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>Verfügbare Plätze</span>
                <span className="font-bold text-red-400">0 / 10</span>
              </div>

              {/* CTA */}
              <a
                href="https://discord.gg/ANEuA5u8UX"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 rounded-xl text-center font-black text-base transition-transform hover:scale-[1.01] focus:scale-[1.01]"
                style={{
                  backgroundColor: "#5865F2", // Discord Blurple
                  color: "#fff",
                }}
              >
                Discord
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
