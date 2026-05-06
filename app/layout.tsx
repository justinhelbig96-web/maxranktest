import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RANKMAXX — Valorant Coaching",
  description:
    "Werde Teil des Rankmaxx Collective. Exklusive Videobibliothek, Group Calls, 1-zu-1 Coaching und mehr — für deinen Aufstieg in Valorant.",
  keywords: ["Valorant Coaching", "Rankmaxx", "Rankmaxx Collective", "Valorant Community", "Rank up"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-[#080808] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
