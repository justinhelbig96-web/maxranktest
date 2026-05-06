"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Yoyo",
    date: "28.04.2026",
    rank: "Gold 3 → Diamond 2",
    avatar: "YO",
    stars: 5,
    review:
      "Dank @PreciseErik seiner Hilfe und Geduld. Knapp 1 Monat von Gold 3 zu Dia 2. Nur Liebe an ihn 🙏",
  },
  {
    name: "Raphael",
    date: "26.04.2026",
    rank: "→ Diamond 1",
    avatar: "RA",
    stars: 5,
    review:
      "Hatte vor genau 2 Wochen ein Coaching mit @koni und habe mich in dieser kurzen Zeit extrem verbessert! Ich kann mich nur nochmal wiederholen wie viel ein Coaching bringt und was für gute Tipps er gegeben hat. Danke nochmal!",
  },
  {
    name: "Nemonis",
    date: "19.04.2026",
    rank: "Verifizierter Schüler",
    avatar: "NE",
    stars: 5,
    review:
      "Ich hatte am Montag Coaching bei @koni und es hat sich mehr als gelohnt. Fehler wurden in Ruhe erklärt und gleichzeitig eine Liste geschrieben was ich verbessern kann. Auch meinen Main-Agent hat er mir besser erklärt. Nach dem Coaching hab ich direkt gemerkt dass ich schon bisschen besser spiele.",
  },
  {
    name: "VAL",
    date: "07.04.2026",
    rank: "Verifizierter Schüler",
    avatar: "VA",
    stars: 5,
    review:
      "Ich wurde gestern von @PreciseErik gecoacht und wollte nochmal danke sagen. Das Coaching hat mir echt sehr weitergeholfen. Ich hatte immer Probleme meine perfekte Sense zu finden, und jetzt habe ich sie endlich. Wurde früher schon mal von einem Immortal/Radiant-Kollegen gecoacht — aber hier wurde alles deutlich besser, genauer und verständlicher erklärt. Man merkt einfach, was ein richtiger Coach ausmacht. Ich werde definitiv nochmal buchen!",
  },
  {
    name: "Garil",
    date: "01.04.2026",
    rank: "Neuer persönlicher Peak",
    avatar: "GA",
    stars: 5,
    review:
      "@koni hat mir viel erklärt und ist auf meine Fragen eingegangen. Es hat sich für mich zu 100% gelohnt, da ich heute schon meinen neuen Peak erreicht habe. Auf jeden Fall sehr empfehlenswert.",
  },
  {
    name: "Yoyo",
    date: "25.03.2026",
    rank: "Gold 3 → Platinum 3",
    avatar: "YO",
    stars: 5,
    review:
      "Ich wurde vor genau 2 Wochen von @PreciseErik gecoacht und bin damals in Gold 3 gestartet. Jetzt stehe ich kurz vor Diamant. Ich habe gemerkt wie viel besser mein Aim, meine Entscheidungen und mein Game-Sense geworden sind. Viele Fehler, die ich vorher ständig gemacht habe, habe ich jetzt deutlich besser im Griff.",
  },
  {
    name: "Anonym",
    date: "24.03.2026",
    rank: "Match MVP direkt danach",
    avatar: "AN",
    stars: 5,
    review:
      "Wurde heute von @koni gecoacht — er hat mir alles ruhig erklärt, war 100% real und hat nichts verschwiegen. Hat mir meine Fehler direkt gezeigt und konnte sie dann auch in einem Live-Deathmatch umsetzen. Erstes Game nach dem Coaching direkt Match MVP. W Coaching, werde es mir definitiv wieder holen 🙏",
  },
  {
    name: "RyZeey",
    date: "20.03.2026",
    rank: "→ Platinum 2",
    avatar: "RZ",
    stars: 5,
    review:
      "In 6 Tagen mit den Tipps von @Eisblokk das geschafft. Ich liebe den Typen nur ❤️ Die TikToks helfen auch krass zusätzlich zum Coaching.",
  },
  {
    name: "Yoyo",
    date: "09.03.2026",
    rank: "Verifizierter Schüler",
    avatar: "YO",
    stars: 5,
    review:
      "Ich wurde von @PreciseErik gecoacht und es hat sich gelohnt. Er hat sich Zeit genommen um sich die VOD anzuschauen und hat mir meine Fehler erklärt. Er war sehr sympathisch und hilfsbereit, hat mir Tipps zum Agent gegeben und mich drauf hingewiesen wie ich mein Crosshair zu placen hab. ES LOHNT SICH — wenn ihr gerade die Möglichkeit habt, bucht ein Coaching. Danke @PreciseErik für den Rankup, bester Mann ❤️",
  },
  {
    name: "Anonym",
    date: "24.02.2026",
    rank: "Verifizierter Schüler",
    avatar: "AN",
    stars: 5,
    review:
      "Ich wurde von @koni gecoacht, das Coaching war wirklich sehr gut. Er hat mir geholfen meine Fehler zu verstehen und zu verbessern, mir Tipps für Matches gegeben und beigebracht wie man was am besten macht — wodurch ich endlich mal wieder eine Runde gewinnen konnte 😊 Ich hatte nicht erwartet, dass das so viel bringt, aber da lag ich falsch. Empfehle es wirklich jedem!",
  },
  {
    name: "gelg",
    date: "23.02.2026",
    rank: "Verifizierter Schüler",
    avatar: "GE",
    stars: 5,
    review:
      "@Eisblokk hat mich gerade gecoacht. Er war sehr ruhig und nett, hat meine Fehler gut analysiert und ich hab das Game gewonnen. Was ich auch sehr gut finde: man kann ihn jederzeit anschreiben für Fragen. W Coaching!",
  },
  {
    name: "ZNG",
    date: "17.02.2026",
    rank: "Verifizierter Schüler",
    avatar: "ZN",
    stars: 5,
    review:
      "@Eisblokk hat mich onstream gecoacht. Er war sehr nett, hat gut analysiert und immer wieder gefragt ob ich es verstehe. All in all war es sehr gut — ich würde es definitiv weiter empfehlen 💕",
  },
  {
    name: "DY",
    date: "14.02.2026",
    rank: "Verifizierter Schüler",
    avatar: "DY",
    stars: 5,
    review:
      "Mein Coach @koni war sehr nett und hat mir sehr geholfen, meine Fehler erklärt und ingame geholfen. Ehrenmann, liebe dich ❤️",
  },
  {
    name: "Anonym",
    date: "10.02.2026",
    rank: "Verifizierter Schüler",
    avatar: "AN",
    stars: 5,
    review:
      "Mein Coaching mit @koni war sehr gut, ich konnte viel von ihm lernen. Man kann sehr gut mit ihm reden, er hat ein riesiges Verständnis für alles. Ich kann das Coaching nur empfehlen — ich wünsche jedem dass sie ihn genau so erleben wie ich! Viel Glück euch allen ❤️",
  },
];

function renderReview(text: string) {
  const parts = text.split(/(@PreciseErik|@koni|@Eisblokk)/g);
  return parts.map((part, i) =>
    /^(@PreciseErik|@koni|@Eisblokk)$/.test(part) ? (
      <span key={i} className="text-[#6EE800] font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function ReviewCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-none w-80 bg-[#1e1f22] border border-white/8 rounded-2xl p-5 mx-3">
      {/* Header: avatar + name + date */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-[#6EE800]/20 border border-[#6EE800]/30 flex items-center justify-center text-[#6EE800] text-xs font-black flex-shrink-0">
          {t.avatar}
        </div>
        <div>
          <div className="text-white text-sm font-semibold leading-none">{t.name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{t.date}</div>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{renderReview(t.review)}</p>

      {/* Rank badge */}
      <div className="flex items-center gap-1.5 pt-3 border-t border-white/8">
        <div className="flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} className="w-3 h-3 text-[#6EE800] fill-[#6EE800]" />
          ))}
        </div>
        <span className="text-[#6EE800] text-xs font-medium ml-1">{t.rank}</span>
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
