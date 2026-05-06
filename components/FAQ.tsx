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

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Noch Fragen? Komm in unseren Discord!</p>
          <a
            href="https://discord.gg/ANEuA5u8UX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]"
          >
            <svg className="w-5 h-5" viewBox="0 0 127.14 96.36" fill="currentColor">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            Discord beitreten
          </a>
        </motion.div>
      </div>
    </section>
  );
}
