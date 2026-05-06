"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Library, Users, MessageCircle, Trophy, ListChecks } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "1-zu-1 Persönliches Coaching",
    description:
      "Als Rankmaxx Ascension Mitglied hast du ein monatliches Coaching mit Fokus auf dich und dein Gameplay — mit einem unserer Immortal+ Coaches.",
  },
  {
    icon: Library,
    title: "Exklusive Videobibliothek",
    description:
      "24/7 Zugriff auf unsere ausführlichen Videoreihen mit Radiant Playbooks und Agent Guides für einen schnellen Aufstieg.",
  },
  {
    icon: Users,
    title: "Group Calls",
    description:
      "Mehrfach wöchentliche Gruppencalls, in denen wir über Progress und wichtige Themen fürs Ranked sprechen — z.B. Matchmaking und Mentalität.",
  },
  {
    icon: MessageCircle,
    title: "Discord-Support",
    description:
      "Du hast direkten Zugang zu deinem Coach auf Discord für Feedback, Tipps, mentale Unterstützung und kannst außerdem jederzeit Clips zum Review einschicken.",
  },
  {
    icon: Trophy,
    title: "Bewiesene Ergebnisse",
    description:
      "95% unserer Schüler ranken innerhalb der ersten 4 Sessions auf. Wir stehen zu unseren Coaching-Ergebnissen — keine leeren Versprechen.",
  },
  {
    icon: ListChecks,
    title: "Vorgefertigte Routinen",
    description:
      "Radiant Approved Routinen für jeden Spieler — mit optionalen KovaaK's & Aimlabs Abteilungen für gezielte Mechanik-Verbesserung.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Warum RANKMAXX
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Alles was du brauchst, um{" "}
            <span className="text-[#6EE800]">aufzuranken</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Wir geben dir nicht einfach Tipps — wir geben dir ein System. Echtes Coaching, echtes
            Feedback, echte Verbesserung.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="card-hover group relative bg-[#111111] border border-white/8 rounded-2xl p-6 overflow-hidden"
              >
                {/* Background shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6EE800]/0 via-transparent to-[#6EE800]/0 group-hover:from-[#6EE800]/5 group-hover:to-[#6EE800]/3 transition-all duration-300 pointer-events-none rounded-2xl" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#6EE800]/10 border border-[#6EE800]/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#6EE800]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
