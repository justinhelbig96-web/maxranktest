"use client";

import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, LogOut, CalendarDays, ExternalLink } from "lucide-react";
import type { Session } from "next-auth";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Gold Paket",
    price: "€24,99",
    description: "1× 60-min Session, VOD-Review, 7 Tage Support",
    features: ["1× 60-minütige Session", "VOD-Review (2 Matches)", "Verbesserungsplan", "7 Tage Discord-Support"],
    cta: "Gold Paket buchen",
    highlight: false,
    icon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/14/largeicon.png",
    color: "#ECCF56",
    glow: "rgba(236,207,86,0.3)",
    border: "rgba(236,207,86,0.4)",
    checkoutUrl: "https://whop.com/maxranktestshop/gold-paket-ab/",
  },
  {
    name: "Diamond Paket",
    price: "€64,99",
    originalPrice: "€74,97",
    description: "3× Sessions, tiefe Analyse, 30 Tage Support",
    features: ["3× 60-minütige Sessions", "Tiefgehende VOD-Analyse", "Roadmap + Fortschritts-Tracking", "30 Tage Discord-Support"],
    cta: "Diamond Paket holen",
    highlight: true,
    badge: "AM BELIEBTESTEN",
    icon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/20/largeicon.png",
    color: "#B489C4",
    glow: "rgba(180,137,196,0.3)",
    border: "rgba(180,137,196,0.5)",
    checkoutUrl: "https://whop.com/maxranktestshop/diamond-paket/",
  },
  {
    name: "Radiant Paket",
    price: "€109,99",
    originalPrice: "€149,95",
    description: "5× Sessions, tägliche Drills, 60 Tage Support",
    features: ["5× 60-minütige Sessions", "Alles aus Diamond Paket", "Tägliche Trainings-Drills", "60 Tage unlimitierter Support"],
    cta: "Radiant Paket holen",
    highlight: false,
    badge: "BESTES PREIS-LEISTUNG",
    icon: "https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/27/largeicon.png",
    color: "#FFFFAA",
    glow: "rgba(255,255,170,0.25)",
    border: "rgba(255,255,170,0.45)",
    checkoutUrl: "https://whop.com/maxranktestshop/radiant-paket/",
  },
];

export default function DashboardClient({ session }: { session: Session }) {
  const user = session.user;
  const firstName = user?.name?.split(" ")[0] ?? user?.name ?? "Spieler";
  const [memberships, setMemberships] = useState<{ planName: string; status: string }[]>([]);
  const [loadingMemberships, setLoadingMemberships] = useState(true);

  useEffect(() => {
    fetch(`/api/whop/memberships?discordId=${user?.id}`)
      .then((r) => r.json())
      .then((data) => setMemberships(data.memberships ?? []))
      .catch(() => setMemberships([]))
      .finally(() => setLoadingMemberships(false));
  }, [user?.id]);

  // Determine which tier the user currently owns (0=none, 1=Gold, 2=Diamond, 3=Radiant)
  const planTier: Record<string, number> = { "Gold Paket": 1, "Diamond Paket": 2, "Radiant Paket": 3 };
  const activePlanNames = memberships.map((m) => m.planName);
  const highestTier = activePlanNames.reduce((max, name) => Math.max(max, planTier[name] ?? 0), 0);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Background orb */}
      <div className="fixed -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#6EE800] opacity-[0.04] blur-[150px] pointer-events-none" />
      <div className="dot-grid fixed inset-0 pointer-events-none opacity-50" />

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

          <div className="flex items-center gap-3">
            {user?.image && (
              <img
                src={user.image}
                alt={user.name ?? "Avatar"}
                width={32}
                height={32}
                className="rounded-full border-2 border-[#6EE800]/40"
              />
            )}
            <span className="text-sm text-gray-300 font-medium hidden sm:block">{user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:block">Abmelden</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 relative z-10">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-12"
        >
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name ?? "Avatar"}
              width={72}
              height={72}
              className="rounded-full border-2 border-[#6EE800]/50 shadow-[0_0_20px_rgba(110,232,0,0.2)]"
            />
          ) : (
            <div className="w-[72px] h-[72px] rounded-full bg-[#6EE800]/20 border-2 border-[#6EE800]/40 flex items-center justify-center">
              <span className="text-2xl font-black text-[#6EE800]">
                {(user?.name ?? "?")[0].toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">
              <svg className="w-4 h-4 inline-block mr-1.5 -mt-0.5" viewBox="0 0 127.14 96.36" fill="#5865F2">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Verbunden über Discord
            </p>
            <h1
              className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Willkommen, <span className="text-[#6EE800]">{firstName}</span>
            </h1>
            {/* Server join badge */}
            <div className="flex items-center gap-1.5 mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-[#6EE800]/10 border border-[#6EE800]/25 text-[#6EE800] font-semibold px-2.5 py-1 rounded-full">
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Server beigetreten · Rolle vergeben
              </span>
            </div>
          </div>
        </motion.div>

        {/* Active Subscriptions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#6EE800] rounded-full" />
            Aktive Abonnements
          </h2>
          <div className="bg-[#0d0d0d] border border-white/8 rounded-xl p-6">
            {loadingMemberships ? (
              <p className="text-gray-500 text-sm text-center">Lade Abonnements…</p>
            ) : memberships.length === 0 ? (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                  <CalendarDays className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-400 text-sm">Keine aktiven Pakete</p>
                <p className="text-gray-600 text-xs mt-1">Wähle unten ein Paket aus, um loszulegen</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {memberships.map((m, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#6EE800]" />
                    <span className="text-white font-semibold text-sm">{m.planName}</span>
                    <span className="ml-auto text-xs text-[#6EE800] bg-[#6EE800]/10 px-2 py-0.5 rounded-full font-semibold capitalize">{m.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.section>

        {/* Booking Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#6EE800] rounded-full" />
            Gratis Beratungstermin
          </h2>
          <div className="bg-[#0a1200] border border-[#6EE800]/25 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold mb-1">Buche deine kostenlose Erstberatung</p>
              <p className="text-gray-400 text-sm">
                Sieh dir freie Termine an und wähle einen Slot — direkt in meinem Kalender.
              </p>
            </div>
            <Link
              href="/booking"
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-[#6EE800] text-black font-bold text-sm rounded-lg hover:bg-[#A3F000] transition-all hover:shadow-[0_0_20px_rgba(110,232,0,0.4)] whitespace-nowrap"
            >
              <CalendarDays className="w-4 h-4" />
              Termin buchen
            </Link>
          </div>
        </motion.section>

        {/* Pricing Plans */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#6EE800] rounded-full" />
            Pakete kaufen
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              {(() => {
                const isOwned = activePlanNames.includes(plan.name);
                const tier = planTier[plan.name] ?? 0;
                const isLocked = tier < highestTier;
                const isUpgrade = tier > highestTier;
                const cardStyle = isOwned
                  ? { borderColor: plan.border, boxShadow: `0 0 30px ${plan.glow}` }
                  : plan.highlight && highestTier === 0
                  ? { borderColor: plan.border, boxShadow: `0 0 40px ${plan.glow}` }
                  : {};
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  style={cardStyle}
                  className={`relative rounded-xl p-5 transition-all duration-300 ${
                    isOwned
                      ? "bg-[#0a1500] border-2"
                      : plan.highlight && highestTier === 0
                      ? "bg-[#0d1018] border-2"
                      : "bg-[#111111] border border-white/8"
                  } ${isLocked ? "opacity-35 pointer-events-none select-none" : ""}`}
                >
                {/* Active badge OR package badge */}
                {isOwned ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-wider px-3 py-1 rounded-full whitespace-nowrap text-black"
                    style={{ backgroundColor: plan.color }}>
                    ✅ AKTIV
                  </span>
                ) : isLocked ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-wider px-3 py-1 rounded-full whitespace-nowrap bg-white/10 text-gray-500">
                    ENTHALTEN
                  </span>
                ) : plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black tracking-wider px-3 py-1 rounded-full whitespace-nowrap text-black"
                    style={{ backgroundColor: plan.color }}>
                    {isUpgrade && highestTier > 0 ? "⬆ UPGRADE" : plan.badge}
                  </span>
                ) : null}

                <div className="flex items-center gap-3 mb-3">
                  <Image src={plan.icon} alt={plan.name} width={40} height={40} unoptimized
                    style={{ filter: `drop-shadow(0 0 6px ${plan.glow})` }}
                  />
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: plan.color }}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-white">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-xs mb-3">{plan.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {isOwned ? (
                  <div className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-bold text-sm"
                    style={{ backgroundColor: `${plan.glow}`, color: plan.color, border: `1px solid ${plan.border}` }}>
                    ✅ Aktives Paket
                  </div>
                ) : (
                  <a
                    href={plan.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-bold text-sm transition-all"
                    style={plan.highlight && highestTier === 0
                      ? { backgroundColor: plan.color, color: "#000" }
                      : { border: `1px solid ${plan.border}`, color: plan.color }
                    }
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {isUpgrade && highestTier > 0 ? `Upgrade auf ${plan.name}` : plan.cta}
                  </a>
                )}
                </motion.div>
                );
              })()}
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
