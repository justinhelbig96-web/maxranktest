import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "MaxRank.GG — Valorant Coaching",
  description:
    "1-zu-1 personalisiertes Valorant Coaching. Erreiche Radiant mit professioneller Begleitung, VOD-Analyse und bewährten Strategien.",
  keywords: ["Valorant Coaching", "Rank up", "Valorant Coach", "1zu1 Coaching", "MaxRank"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-[#080808] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
