"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ranks = [
  { name: "IRON",      color: "#9d9d9d", glow: "rgba(157,157,157,0.6)" },
  { name: "BRONZE",    color: "#CD7F32", glow: "rgba(205,127,50,0.6)"  },
  { name: "SILVER",    color: "#B4C0C8", glow: "rgba(180,192,200,0.6)" },
  { name: "GOLD",      color: "#E9CD5A", glow: "rgba(233,205,90,0.6)"  },
  { name: "PLATINUM",  color: "#56BEC4", glow: "rgba(86,190,196,0.6)"  },
  { name: "DIAMOND",   color: "#9C71E0", glow: "rgba(156,113,224,0.6)" },
  { name: "ASCENDANT", color: "#27EE73", glow: "rgba(39,238,115,0.6)"  },
  { name: "IMMORTAL",  color: "#AC3733", glow: "rgba(172,55,51,0.6)"   },
  { name: "RADIANT",   color: "#FDDE6C", glow: "rgba(253,222,108,0.8)" },
];

// Diamond shape SVG path
const DiamondIcon = ({ color, size = 36 }: { color: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {/* Outer diamond */}
    <polygon
      points="20,2 38,20 20,38 2,20"
      fill="none"
      stroke={color}
      strokeWidth="2"
      opacity="0.9"
    />
    {/* Inner diamond */}
    <polygon
      points="20,10 30,20 20,30 10,20"
      fill={color}
      opacity="0.25"
    />
    {/* Center dot */}
    <circle cx="20" cy="20" r="3" fill={color} opacity="0.85" />
    {/* Corner accents */}
    <line x1="20" y1="2" x2="20" y2="8" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="20" y1="32" x2="20" y2="38" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="2" y1="20" x2="8" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="32" y1="20" x2="38" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6" />
  </svg>
);

interface Particle {
  id: number;
  x: number;
  y: number;
  rank: typeof ranks[0];
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

let nextId = 0;

export default function FloatingRanks() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const spawnParticle = useCallback(() => {
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const size = 28 + Math.random() * 28; // 28–56px
    const particle: Particle = {
      id: nextId++,
      x: 5 + Math.random() * 90,   // 5%–95% of viewport width
      y: 5 + Math.random() * 90,   // 5%–95% of viewport height
      rank,
      size,
      duration: 2.5 + Math.random() * 2.5, // 2.5–5s visible
      delay: 0,
      rotation: Math.random() * 30 - 15,   // slight tilt ±15°
    };

    setParticles((prev) => [...prev.slice(-18), particle]); // max 18 at a time

    // Remove after animation
    const totalMs = (particle.duration + 1.2) * 1000;
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== particle.id));
    }, totalMs);
  }, []);

  useEffect(() => {
    // Spawn first few immediately with stagger
    const initialCount = 6;
    for (let i = 0; i < initialCount; i++) {
      setTimeout(spawnParticle, i * 400);
    }

    // Then spawn every 800ms
    const interval = setInterval(spawnParticle, 800);
    return () => clearInterval(interval);
  }, [spawnParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.3, rotate: p.rotation - 10 }}
            animate={{
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.3, 1, 1, 0.6],
              rotate: [p.rotation - 10, p.rotation, p.rotation + 5, p.rotation + 10],
              y: [0, -18, -30],
            }}
            transition={{
              duration: p.duration,
              times: [0, 0.2, 0.75, 1],
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              filter: `drop-shadow(0 0 8px ${p.rank.glow}) drop-shadow(0 0 20px ${p.rank.glow})`,
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <DiamondIcon color={p.rank.color} size={p.size} />
              <span
                className="text-[9px] font-black tracking-widest"
                style={{ color: p.rank.color, opacity: 0.85 }}
              >
                {p.rank.name}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
