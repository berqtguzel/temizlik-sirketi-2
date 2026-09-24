import Link from "next/link";
import { Footer, Header } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found" id="main">
        <div className="not-found__card">
          <div className="not-found__number" aria-hidden="true">
            <span>4</span>
            <span className="not-found__zero">0</span>
            <span>4</span>
          </div>
          <p className="eyebrow">Seite nicht gefunden</p>
          <h1>Hier ist leider nichts.</h1>
          <p>
            Die gewünschte Seite wurde möglicherweise verschoben oder existiert
            nicht mehr.
          </p>
          <div className="not-found__actions">
            <Link className="button button--primary" href="/">
              Zur Startseite
            </Link>
            <Link className="button not-found__secondary" href="/kontakt">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
