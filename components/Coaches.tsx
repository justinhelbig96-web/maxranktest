"use client";

import { motion } from "framer-motion";

const coaches = [
  {
    name: "Eisblokk",
    rank: "Radiant",
    description: "Beschreibung folgt.",
    color: "#FDDE6C",
  },
  {
    name: "Saylemas",
    rank: "Immortal+",
    description: "Beschreibung folgt.",
    color: "#AC3733",
  },
  {
    name: "Koni",
    rank: "Immortal+",
    description: "Beschreibung folgt.",
    color: "#27EE73",
  },
  {
    name: "Erik",
    rank: "Immortal+",
    description: "Beschreibung folgt.",
    color: "#9C71E0",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#6EE800] text-sm font-bold tracking-widest uppercase">
            Das Team
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mt-3 text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Deine <span className="text-[#6EE800]">Coaches</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Alle unsere Coaches spielen auf Immortal+ und wissen genau, wie man klimbt.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.name}
              variants={cardVariants}
              className="group relative bg-[#111111] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              style={{ boxShadow: "none" }}
              whileHover={{ boxShadow: `0 0 40px ${coach.color}22` }}
            >
              {/* Placeholder image area */}
              <div
                className="w-full h-56 flex items-center justify-center text-5xl font-black select-none"
                style={{
                  background: `linear-gradient(135deg, #111 60%, ${coach.color}18)`,
                  color: coach.color,
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {coach.name.charAt(0)}
              </div>

              {/* Info */}
              <div className="p-5">
                {/* Rank badge */}
                <span
                  className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ color: coach.color, backgroundColor: `${coach.color}18`, border: `1px solid ${coach.color}40` }}
                >
                  {coach.rank}
                </span>

                <h3 className="text-xl font-black text-white mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {coach.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{coach.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${coach.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
