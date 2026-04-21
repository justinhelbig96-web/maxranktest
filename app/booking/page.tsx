"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function BookingPage() {
  useEffect(() => {
    // Load cal.eu embed script
    const script = document.createElement("script");
    script.src = "https://cal.eu/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const Cal = (window as unknown as Record<string, unknown>)["Cal"] as ((action: string, ...args: unknown[]) => void) | undefined;
      if (typeof Cal === "function") {
        Cal("init", "icyveinsfn", { origin: "https://cal.eu" });
        Cal("inline", {
          elementOrSelector: "#cal-booking",
          calLink: "icyveinsfn",
          layout: "month_view",
        });
        Cal("ui", {
          styles: { branding: { brandColor: "#6EE800" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Background */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#6EE800] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="dot-grid fixed inset-0 pointer-events-none opacity-40" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE800]/30 to-transparent" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="MaxRank.GG" width={32} height={32} className="rounded-md" />
            <span className="font-black text-base tracking-tight">
              Max<span className="text-[#6EE800]">Rank</span>
              <span className="text-gray-400">.GG</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#6EE800]/10 border border-[#6EE800]/25 rounded-full px-4 py-1.5 mb-5">
            <span className="text-sm text-[#6EE800] font-semibold">🚀 Kostenlose Erstberatung</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Buche deinen <span className="text-[#6EE800]">Termin</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Wähle einen freien Slot und buch direkt deine kostenlose Beratungs-Session.
            Wir besprechen deine Ziele und erstellen deinen persönlichen Coaching-Plan.
          </p>
        </motion.div>

        {/* Cal.eu Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-[#0d0d0d] border border-white/8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div
            id="cal-booking"
            className="w-full"
            style={{ minHeight: "700px" }}
          />
        </motion.div>

        {/* Fallback link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-6"
        >
          Kalender lädt nicht?{" "}
          <a
            href="https://cal.eu/icyveinsfn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE800] hover:underline"
          >
            Direkt auf cal.eu öffnen ↗
          </a>
        </motion.p>
      </main>
    </div>
  );
}
