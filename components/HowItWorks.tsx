"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Session buchen",
    description:
      "Wähle einen Termin, der dir passt. Starte mit einer kostenlosen 30-minütigen Beratung, in der wir dein aktuelles Niveau einschätzen und konkrete Ziele setzen.",
    tag: "Erste Beratung kostenlos",
  },
  {
    number: "02",
    icon: Search,
    title: "Tiefgehende Analyse",
    description:
      "Dein Coach schaut sich deine Match-Historie, deinen Agent-Pool und deinen Spielstil an. Wir identifizieren genau die Gewohnheiten, die dich am Aufstieg hindern.",
    tag: "VOD + Live-Review",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Umsetzen & Aufranken",
    description:
      "Wende deinen persönlichen Verbesserungsplan im Spiel an — mit laufendem Support und Follow-up-Sessions, um deinen Fortschritt zu tracken und die Dynamik aufrechtzuerhalten.",
    tag: "Laufender Support",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Der Ablauf
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            So funktioniert&apos;s
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Drei einfache Schritte, um mit professioneller Begleitung in den Ranks aufzusteigen.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-[#6EE800]/20 via-[#6EE800]/40 to-[#6EE800]/20 pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: "easeOut" }}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#111] border border-[#6EE800]/30 flex items-center justify-center shadow-[0_0_30px_rgba(110,232,0,0.1)]">
                    <Icon className="w-9 h-9 text-[#6EE800]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#6EE800] text-black text-xs font-black rounded-full flex items-center justify-center">
                    {step.number.slice(1)}
                  </span>
                </div>

                {/* Tag */}
                <div className="inline-flex items-center bg-[#6EE800]/10 border border-[#6EE800]/20 rounded-full px-3 py-0.5 mb-3">
                  <span className="text-[#6EE800] text-xs font-semibold">{step.tag}</span>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
