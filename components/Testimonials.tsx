"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Felix M.",
    tag: "@felixplays",
    rank: "Gold I → Platin II",
    avatar: "FM",
    stars: 5,
    review:
      "Der Coach hat komplett verändert, wie ich das Spiel wahrnehme. Meine Positionierung hat sich in nur 2 Sessions drastisch verbessert. Ich konnte nicht glauben, wie viele Free Kills ich liegen gelassen habe.",
  },
  {
    name: "Lara S.",
    tag: "@laraval",
    rank: "Silber II → Diamant III",
    avatar: "LS",
    stars: 5,
    review:
      "6 Monate Solo-Queue haben mich nirgendwo hingebracht. 4 Sessions mit MaxRank.GG und ich bin schon in Diamant. Die strukturierte Roadmap hat mir alles klar gemacht.",
  },
  {
    name: "James K.",
    tag: "@jamesgaming",
    rank: "Bronze III → Platin I",
    avatar: "JK",
    stars: 5,
    review:
      "Die VOD-Reviews waren aufklärend. Ich hatte keine Ahnung, wie viele Frühspiel-Fehler ich mache. Die beste Investition, die ich je in mein Gaming getätigt habe.",
  },
  {
    name: "Amir A.",
    tag: "@amir_val",
    rank: "Platin II → Immortal I",
    avatar: "AA",
    stars: 5,
    review:
      "Für High-Elo-Spieler ist das Makro-Coaching unglaublich detailliert. Die Gegner-Analyse und Matchup-Vorbereitung ist etwas, das ich bei anderen Coaches noch nie gesehen habe.",
  },
  {
    name: "Sophie W.",
    tag: "@sophiegg",
    rank: "Eisen I → Bronze III",
    avatar: "SW",
    stars: 5,
    review:
      "Sehr geduldiger und motivierender Coach. Hat jeden Punkt Schritt für Schritt erklärt und mich nie für meine Fehler schlecht fühlen lassen. Absolute Empfehlung für Anfänger!",
  },
  {
    name: "Kai L.",
    tag: "@kailux",
    rank: "Gold III → Diamant I",
    avatar: "KL",
    stars: 5,
    review:
      "2 Jahre in Gold feststeckend. Alles probiert. Nach den Custom-Training-Drills von MaxRank bin ich in unter 5 Wochen von G3 auf Diamant geclimbt.",
  },
  {
    name: "Niklas T.",
    tag: "@niklasval",
    rank: "Aszendent I → Immortal III",
    avatar: "NT",
    stars: 5,
    review:
      "Das Agent-spezifische Coaching für meine Jett war auf einem anderen Level. Kleine Mikro-Anpassungen in meiner Bewegung, die im High-Elo einen massiven Unterschied gemacht haben.",
  },
  {
    name: "Mia R.",
    tag: "@miaranked",
    rank: "Silber III → Platin III",
    avatar: "MR",
    stars: 5,
    review:
      "Ich hatte vorher mehrere Coaches ausprobiert, aber MaxRank.GG ist der einzige, der mir ein echtes System gegeben hat. Der Discord-Support zwischen den Sessions ist ein riesiges Plus.",
  },
];

function ReviewCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-none w-80 bg-[#111111] border border-white/8 rounded-2xl p-5 mx-3">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#6EE800] fill-[#6EE800]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">&ldquo;{t.review}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/8">
        <div className="w-9 h-9 rounded-full bg-[#6EE800]/20 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-xs font-black">
          {t.avatar}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{t.name}</div>
          <div className="text-[#6EE800] text-xs font-medium">{t.rank}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(110,232,0,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
      </div>

      {/* Marquee */}
      <div className="marquee-track relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {doubled.map((t, i) => (
            <ReviewCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Average rating row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-12"
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
    </section>
  );
}
