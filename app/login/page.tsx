"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#6EE800] opacity-[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#6EE800] opacity-[0.05] blur-[150px] pointer-events-none" />
      <div className="dot-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE800]/40 to-transparent" />

      {/* Back to home */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-6 left-6 flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <Image src="/logo.png" alt="MaxRank.GG" width={28} height={28} className="rounded-md" />
        <span className="font-black text-sm tracking-tight text-white">
          Max<span className="text-[#6EE800]">Rank</span>
          <span className="text-gray-400">.GG</span>
        </span>
      </motion.a>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-[#6EE800]/10 border border-[#6EE800]/25 flex items-center justify-center mb-4">
              <Image src="/logo.png" alt="MaxRank.GG" width={40} height={40} className="rounded-md" />
            </div>
            <h1
              className="text-3xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Max<span className="text-[#6EE800]">Rank</span>
              <span className="text-gray-400">.GG</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Dein Valorant Coaching Portal</p>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Willkommen zurück</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Verbinde dich mit Discord um fortzufahren und auf deine Buchungen zuzugreifen.
            </p>
          </div>

          {/* Discord Button */}
          <motion.button
            onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#5865F2] hover:bg-[#4752C4] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(88,101,242,0.4)] hover:shadow-[0_4px_30px_rgba(88,101,242,0.6)]"
          >
            {/* Discord icon */}
            <svg className="w-5 h-5" viewBox="0 0 127.14 96.36" fill="currentColor">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            {status === "loading" ? "Lädt..." : "Mit Discord anmelden"}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-xs text-gray-600">sicher & verschlüsselt</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Trust note */}
          <p className="text-center text-xs text-gray-600 leading-relaxed">
            Wir speichern nur deinen Discord-Namen und dein Avatar.{" "}
            <br />
            Keine Passwörter, keine persönlichen Daten.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
