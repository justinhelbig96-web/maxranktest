import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB — RANKMAXX",
};

export default function AGBPage() {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-32">
        <h1 className="text-3xl font-black mb-10 tracking-tight">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <section className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen RANKMAXX
              und dem Kunden über die Erbringung von Coaching-
              und Community-Leistungen im Bereich Valorant.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 2 Vertragsschluss</h2>
            <p>
              Der Vertrag kommt durch die Buchung eines Pakets über die Website zustande. Mit dem
              Abschluss der Buchung bestätigt der Kunde, diese AGB gelesen und akzeptiert zu haben.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 3 Leistungsgegenstand</h2>
            <p>
              RANKMAXX bietet digitale Coaching-Leistungen für das Videospiel Valorant an. Dazu
              zählen je nach gebuchtem Paket: Zugang zur Videobibliothek, Group Calls, 1-zu-1
              Sessions sowie Community-Zugang via Discord. Die genauen Leistungen entnimmst du
              der jeweiligen Paketbeschreibung auf der Website.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 4 Preise und Zahlung</h2>
            <p>
              Die angegebenen Preise sind Endpreise. Die Zahlung erfolgt im Voraus über die auf
              der Website angebotenen Zahlungsmethoden. Ein Anspruch auf Erstattung besteht nicht,
              sofern digitale Inhalte bereits vollständig bereitgestellt wurden und der Kunde dem
              Beginn der Leistung ausdrücklich zugestimmt hat.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 5 Widerrufsrecht</h2>
            <p>
              Verbrauchern steht grundsätzlich ein gesetzliches Widerrufsrecht zu. Dieses erlischt
              bei digitalen Inhalten, wenn mit der Ausführung des Vertrags begonnen wurde und der
              Verbraucher ausdrücklich zugestimmt hat, dass das Widerrufsrecht erlischt. Bitte
              kontaktiere uns vor Buchung, wenn du Fragen dazu hast.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 6 Pflichten des Kunden</h2>
            <p>
              Der Kunde verpflichtet sich, keine Inhalte aus der Videobibliothek oder Community
              ohne ausdrückliche Genehmigung zu verbreiten, zu kopieren oder Dritten zugänglich
              zu machen. Bei Verstoß behält sich RANKMAXX vor, den Zugang ohne Rückerstattung
              zu sperren.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 7 Haftungsbeschränkung</h2>
            <p>
              RANKMAXX haftet nicht für Erfolge (z. B. Rank-Verbesserung), da diese von
              individuellen Faktoren abhängen. Die Haftung ist auf Vorsatz und grobe
              Fahrlässigkeit beschränkt. Eine Garantie auf bestimmte Spielergebnisse wird
              nicht gegeben.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 8 Anwendbares Recht</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, sofern
              gesetzlich zulässig, der Sitz des Anbieters.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-base mb-2">§ 9 Kontakt</h2>
            <p>
              Bei Fragen zu diesen AGB wende dich an:{" "}
              <a href="mailto:eisblokk.business@gmail.com" className="text-[#6EE800] hover:underline">eisblokk.business@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
