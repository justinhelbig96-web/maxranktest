"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const coaches = [
  {
    name: "Eisblokk",
    rank: "Radiant",
    description: "",
    color: "#FDDE6C",
    image: "/eisblokk.jpg",
    twitch: "https://www.twitch.tv/eisblokk",
    tiktok: "https://www.tiktok.com/@eisblokk",
  },
  {
    name: "Saylemas",
    rank: "Immortal+",
    description: "",
    color: "#AC3733",
    image: null,
    twitch: null,
    tiktok: null,
  },
  {
    name: "Koni",
    rank: "Immortal+",
    description: "",
    color: "#27EE73",
    image: null,
    twitch: null,
    tiktok: null,
  },
  {
    name: "Erik",
    rank: "Immortal+",
    description: "",
    color: "#9C71E0",
    image: null,
    twitch: null,
    tiktok: null,
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
              {/* Image area */}
              <div className="w-full h-56 relative overflow-hidden">
                {coach.image ? (
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-5xl font-black select-none"
                    style={{
                      background: `linear-gradient(135deg, #111 60%, ${coach.color}18)`,
                      color: coach.color,
                      fontFamily: "Rajdhani, sans-serif",
                    }}
                  >
                    {coach.name.charAt(0)}
                  </div>
                )}
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
                {coach.description && <p className="text-gray-500 text-sm leading-relaxed mb-3">{coach.description}</p>}

                {/* Social links */}
                {(coach.twitch || coach.tiktok) && (
                  <div className="flex gap-3 mt-2">
                    {coach.twitch && (
                      <a href={coach.twitch} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9147FF] transition-colors" title="Twitch">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                        </svg>
                      </a>
                    )}
                    {coach.tiktok && (
                      <a href={coach.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="TikTok">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
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
