"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Image from "next/image";

const membership = {
  name: "Rankmaxx Ascension",
  price: "XX,XX",
  period: "/ Monat",
  description: "Alles was du brauchst um zu climben — in einer Mitgliedschaft.",
  badge: "MITGLIEDSCHAFT",
  features: [
    "Monatliches 1-zu-1 Coaching mit einem Immortal+ Coach",
    "Exklusive Videobibliothek: Radiant Playbooks & Agent Guides",
    "Mehrfach wöchentliche Group Calls",
    "Discord-Support inkl. Clip-Reviews",
    "Vorgefertigte Radiant-Routinen (inkl. KovaaK’s & Aimlabs)",
    "Zugang zur privaten Community",
  ],
  icon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png",
  color: "#FDDE6C",
  glow: "rgba(253,222,108,0.35)",
  border: "rgba(253,222,108,0.5)",
  checkoutUrl: "https://whop.com/maxranktestshop/",
};

export default function Pricing() {
  const m = membership;

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
            Mitgliedschaft
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Ein Preis. <span className="text-[#6EE800]">Alles inklusive.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Keine versteckten Gebühren. Kein Schnickschnack. Nur Ergebnisse.
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
              Jederzeit kündbar — kein Commitment
            </span>
          </div>
        </motion.div>

        {/* Single card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{
              borderColor: m.border,
              boxShadow: `0 0 60px ${m.glow}, 0 0 120px ${m.glow}`,
            }}
            className="relative rounded-2xl p-8 bg-[#0d1018] border-2 w-full max-w-lg"
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-tr-2xl pointer-events-none opacity-10"
              style={{ background: `radial-gradient(circle at top right, ${m.color}, transparent 70%)` }}
            />

            {/* Badge */}
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider text-black"
              style={{ backgroundColor: m.color }}
            >
              {m.badge}
            </div>

            {/* Icon + Name */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={m.icon}
                alt={m.name}
                width={64}
                height={64}
                unoptimized
                style={{ filter: `drop-shadow(0 0 10px ${m.glow})` }}
              />
              <div>
                <h3
                  className="text-2xl font-black"
                  style={{ fontFamily: "Rajdhani, sans-serif", color: m.color }}
                >
                  {m.name}
                </h3>
                <p className="text-gray-400 text-sm mt-0.5">{m.description}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-end gap-1">
                <span
                  className="text-6xl font-black"
                  style={{ fontFamily: "Rajdhani, sans-serif", color: m.color }}
                >
                  €{m.price}
                </span>
                <span className="text-gray-400 mb-2 text-lg">{m.period}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-6" style={{ backgroundColor: m.border }} />

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {m.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: m.color }} />
                  <span className="text-gray-300">{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={m.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl text-center font-black text-lg transition-all duration-200 active:scale-[0.97] hover:brightness-110"
              style={{ backgroundColor: m.color, color: "#000" }}
            >
              Jetzt Mitglied werden
            </a>
          </motion.div>
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
