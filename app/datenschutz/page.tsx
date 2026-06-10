import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz — RANKMAXX",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-32">
        <h1 className="text-3xl font-black mb-10 tracking-tight">Datenschutzerklärung</h1>

        <section className="space-y-8 text-gray-400 text-sm leading-relaxed">

          <div>
            <h2 className="text-white font-bold text-base mb-2">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              Anton Leonard Balla<br />
              c/o Smarvo 211<br />
              Südstraße 31<br />
              47475 Kamp-Lintfort<br />
              Deutschland<br /><br />
              E-Mail:{" "}
              <a href="mailto:eisblokk.business@gmail.com" className="text-[#6EE800] hover:underline">
                eisblokk.business@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt nur nach Einwilligung
              des Nutzers oder wenn die Verarbeitung durch gesetzliche Vorschriften erlaubt ist.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">3. Hosting & Server-Logs</h2>
            <p>
              Diese Website wird über <strong className="text-white">Vercel Inc.</strong> (340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA) gehostet. Beim Aufruf unserer Website werden durch den
              Hosting-Anbieter automatisch Informationen in sogenannten Server-Log-Dateien gespeichert,
              die dein Browser übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="mt-2">
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen
              Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>
            <p className="mt-2">
              Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Infos:{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#6EE800] hover:underline">
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">4. Vercel Analytics</h2>
            <p>
              Wir nutzen <strong className="text-white">Vercel Analytics</strong>, einen Webanalyse-Dienst der
              Vercel Inc. Dieser Dienst erfasst anonymisierte Nutzungsdaten (z. B. Seitenaufrufe,
              Herkunftsland, Gerätekategorie), um den Website-Traffic zu messen und das Angebot
              zu verbessern.
            </p>
            <p className="mt-2">
              Vercel Analytics setzt keine Cookies und speichert keine personenbezogenen Daten.
              Es werden ausschließlich anonymisierte, aggregierte Daten erhoben, die keiner
              einzelnen Person zugeordnet werden können.
            </p>
            <p className="mt-2">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Analyse und Verbesserung des Webangebots).
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">5. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn du uns per E-Mail kontaktierst, werden die von dir übermittelten Daten
              (Name, E-Mail-Adresse, Nachrichteninhalt) ausschließlich zur Bearbeitung deiner
              Anfrage gespeichert und verarbeitet. Eine Weitergabe an Dritte erfolgt nicht.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">6. Deine Rechte</h2>
            <p>Du hast gegenüber uns folgende Rechte hinsichtlich deiner personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">
              Zur Ausübung dieser Rechte wende dich an:{" "}
              <a href="mailto:eisblokk.business@gmail.com" className="text-[#6EE800] hover:underline">
                eisblokk.business@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und
              Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">7. Aktualität dieser Erklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
            </p>
          </div>

        </section>
      </div>
      <Footer />
    </main>
  );
}

