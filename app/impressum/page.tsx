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
        <h1 className="text-3xl font-black mb-10 tracking-tight">Impressum</h1>

        <section className="space-y-8 text-gray-400 text-sm leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-base mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Anton Leonard Balla<br />
              c/o Smarvo 211<br />
              Südstraße 31<br />
              47475 Kamp-Lintfort<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:eisblokk.business@gmail.com"
                className="text-[#6EE800] hover:underline"
              >
                eisblokk.business@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Anton Leonard Balla<br />
              c/o Smarvo 211<br />
              Südstraße 31<br />
              47475 Kamp-Lintfort
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
              waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-2">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">Hinweis zu Markennamen</h2>
            <p>
              RANKMAXX ist kein offizieller Partner von Riot Games. Valorant und alle damit
              verbundenen Bezeichnungen und Marken sind Eigentum von Riot Games, Inc. Die
              Verwendung erfolgt ausschließlich zu beschreibenden Zwecken.
            </p>
          </div>

        </section>
      </div>
      <Footer />
    </main>
  );
}

