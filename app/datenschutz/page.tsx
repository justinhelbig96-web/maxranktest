import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutzerklärung — RANKMAXX",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-32">
        <h1 className="text-3xl font-black mb-10 tracking-tight">
          Datenschutzerklärung
        </h1>

        <section className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
              personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten
              sind alle Daten, mit denen du persönlich identifiziert werden kannst.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">2. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
              [VORNAME NACHNAME]<br />
              [STRASSE HAUSNUMMER]<br />
              [PLZ ORT]<br />
              E-Mail: <a href="mailto:[EMAIL]" className="text-[#6EE800] hover:underline">[EMAIL]</a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-white font-semibold text-sm mb-1">Cookies</h3>
            <p className="mb-4">
              Diese Website verwendet keine Cookies, die eine Einwilligung erfordern.
            </p>
            <h3 className="text-white font-semibold text-sm mb-1">Server-Log-Dateien</h3>
            <p>
              Der Hosting-Anbieter dieser Seite erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die dein Browser automatisch übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten werden
              nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">4. Vercel Analytics</h2>
            <p>
              Diese Website nutzt Vercel Analytics zur anonymisierten Auswertung des Nutzerverhaltens.
              Es werden keine personenbezogenen Daten gespeichert oder an Dritte weitergegeben.
              Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#6EE800] hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">5. Kontaktformular / Buchung</h2>
            <p>
              Wenn du über das Buchungsformular eine Anfrage sendest, werden die dort eingegebenen Daten
              (z. B. Name, E-Mail-Adresse) zum Zweck der Bearbeitung deiner Anfrage und für eventuelle
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">6. Deine Rechte</h2>
            <p>
              Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und
              Zweck deiner gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung,
              Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz kannst du dich jederzeit an uns wenden. Des Weiteren steht dir ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">7. Externe Links (Discord, YouTube, Twitch, TikTok)</h2>
            <p>
              Diese Website enthält Links zu externen Plattformen. Für deren Datenschutzpraktiken
              sind die jeweiligen Betreiber verantwortlich. Wir empfehlen, die Datenschutzerklärungen
              dieser Plattformen zu lesen.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
