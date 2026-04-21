import { Youtube, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

const navGroups = [
  {
    label: "Pakete",
    links: [
      { label: "Probe-Session", href: "#pricing" },
      { label: "Grind-Paket", href: "#pricing" },
      { label: "Elite-Paket", href: "#pricing" },
    ],
  },
  {
    label: "Info",
    links: [
      { label: "Features", href: "#features" },
      { label: "So funktioniert's", href: "#how-it-works" },
      { label: "Bewertungen", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Kontakt",
    links: [
      { label: "Discord", href: "#" },
      { label: "Session buchen", href: "#pricing" },
      { label: "Impressum", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
            <Image src="/logo.png" alt="MaxRank.GG Logo" width={36} height={36} className="rounded-md" />
            <span className="font-black text-lg tracking-tight">
              Max<span className="text-[#6EE800]">Rank</span>
              <span className="text-gray-400">.GG</span>
            </span>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Professionelles Valorant-Coaching, damit du deinen Wunschrang erreichst. 500+ trainierte
            Spieler, 95% Rank-Up-Quote.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Youtube, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: MessageCircle, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-[#1a1a1a] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#6EE800] hover:border-[#6EE800]/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-[#6EE800] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MaxRank.GG — Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
