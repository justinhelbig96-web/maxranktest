import { Youtube } from "lucide-react";
import Image from "next/image";

const navGroups = [
  {
    label: "Pakete",
    links: [
      { label: "Ascension", href: "#pricing" },
    ],
  },
  {
    label: "Info",
    links: [
      { label: "Features", href: "#features" },
      { label: "Bewertungen", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Kontakt",
    links: [
      { label: "Discord", href: "#" },
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
            <Image src="/logo.png" alt="RANKMAXX Logo" width={36} height={36} className="rounded-md" />
            <span className="font-black text-lg tracking-tight">
              RANK<span className="text-[#6EE800]">MAXX</span>
            </span>
          </a>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Grinde nie wieder ohne Sinn. Unser Aim First Rank Next approach ist unschlagbar und wird dir zu 100% helfen aufzusteigen.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  href: "https://www.youtube.com/@Eisblokk",
                  icon: (
                    <Youtube className="w-4 h-4" />
                  ),
                },
                {
                  href: "https://www.twitch.tv/eisblokk",
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.tiktok.com/@eisblokk",
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linktr.ee/Eisblokk",
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h6.15c.527 0 .974-.38 1.052-.897 0-.162 0-.323-.08-.486l-3.996-7.4-4.098 7.4zm4.083-10.5L8.588 11.18l-4.438-6.614H.701L5.98 12.33l-5.28 5.602h3.449l4.438-5.117 4.194 5.117h3.449l-5.198-5.602L11.3 4.566h.736zm4.113 10.5c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h.08V15.066h-1.052zm1.052-8.15v2.42h-2.02l-1.05 1.864H19.2V8.916h-2.02zm0 5.73h-3.07l-1.052 1.863H19.2v-1.863z" />
                    </svg>
                  ),
                },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#1a1a1a] border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#6EE800] hover:border-[#6EE800]/30 transition-all"
                >
                  {icon}
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


      </div>
    </footer>
  );
}
