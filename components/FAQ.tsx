"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Wie läuft eine Coaching-Session ab?",
    answer:
      "Sessions finden per Discord-Screen-Share statt. Du teilst deinen Bildschirm und wir analysieren dein Gameplay live zusammen. Vor der Session schaut sich dein Coach deine Match-Historie an, damit wir jede Minute optimal nutzen.",
  },
  {
    question: "Welchen Rang hat der Coach?",
    answer:
      "Unsere Coaches sind Radiant- und Immortal-3-Spieler mit mehrjähriger High-Elo-Erfahrung. Sie werden nicht nur nach ihrem Rang ausgewählt, sondern auch nach ihrer Fähigkeit zu lehren und klar zu kommunizieren.",
  },
  {
    question: "Kann ich mir meinen Agenten aussuchen?",
    answer:
      "Absolut. Wir bieten Agent-spezifisches Coaching für jede Rolle oder jeden Agenten. Ob du deine Jett-Dash-Mechaniken, Controller-Lineups oder Sentinel-Setups optimieren willst — wir haben dich abgedeckt.",
  },
  {
    question: "Wann kann ich eine Session buchen?",
    answer:
      "Sessions sind 7 Tage die Woche möglich, auch abends und am Wochenende (MEZ-Zeitzone). Du wählst einen Termin der dir passt über unser Buchungssystem. Sessions dauern in der Regel 60 Minuten.",
  },
  {
    question: "Was, wenn das Coaching mir nicht hilft aufzuranken?",
    answer:
      "Wir stehen hinter jeder Session. Wenn du eine Session absolvierst und das Gefühl hast, dich nicht verbessert zu haben, buchen wir dich kostenlos erneut ein. Wir wollen, dass du aufsteigst — Punkt.",
  },
  {
    question: "Brauche ich etwas Besonderes zum Start?",
    answer:
      "Nur Discord und Valorant! Wir kümmern uns um den Rest. Stelle sicher, dass du ein funktionierendes Mikrofon hast und deinen Bildschirm teilen kannst. Eine Aufnahme von 2–3 aktuellen Matches ist ein Bonus, aber nicht notwendig.",
  },
  {
    question: "Wie buche ich eine Session?",
    answer:
      "Klicke auf einen der 'Buchen'-Buttons auf dieser Seite und du wirst zu unserer Terminbuchungs-Seite weitergeleitet, wo du das Paket und den Zeitslot auswählen kannst. Nach der Zahlung bekommst du einen Discord-Einladungslink.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Noch <span className="text-[#6EE800]">Fragen?</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? "border-[#6EE800]/40 bg-[#0f1a00]"
                  : "border-white/8 bg-[#111111] hover:border-white/15"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-white text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-[#6EE800]" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5">
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
