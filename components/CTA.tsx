"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(110,232,0,0.07)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE800]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#6EE800]/10 border border-[#6EE800]/25 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#6EE800] font-semibold">
              🚀 Erste Beratung kostenlos
            </span>
          </div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none text-white mb-6"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            SCHLUSS MIT DEM FESTSTECKEN.
            <br />
            <span className="text-[#6EE800] glow-text">FANG AN ZU CLIMBEN.</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Schließ dich 500+ Spielern an, die aufgehört haben zu rätseln und mit persönlichem
            Coaching zu klettern begannen. Buch jetzt die kostenlose Beratung — kein Commitment
            erforderlich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/booking"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#6EE800] text-black font-black text-lg rounded-xl hover:bg-[#A3F000] transition-colors shadow-[0_0_40px_rgba(110,232,0,0.3)] hover:shadow-[0_0_60px_rgba(110,232,0,0.5)]"
            >
              Gratis Beratung buchen
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-white/15 text-white font-semibold text-lg rounded-xl hover:border-[#6EE800]/40 hover:text-[#6EE800] transition-all"
            >
              Bewertungen lesen
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
            <span>✓ Kein Commitment nötig</span>
            <span>✓ Ergebnisse garantiert</span>
            <span>✓ Jederzeit kündbar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
