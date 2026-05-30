import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum — RANKMAXX",
};

export default function ImpressumPage() {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-32">
        <h1 className="text-3xl font-black mb-10 tracking-tight">
          Impressum
        </h1>

        <section className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Anton L. Balla<br />
              In den Gärten 3<br />
              67259 Großniedesheim<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:eisblokk.business@gmail.com" className="text-[#6EE800] hover:underline">eisblokk.business@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Anton L. Balla<br />
              In den Gärten 3<br />
              67259 Großniedesheim
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
