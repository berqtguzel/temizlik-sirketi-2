import Link from "next/link";
import { Footer, Header } from "@/components/site-chrome";

export const metadata = {
  title: "Über uns",
  description: "Lernen Sie Ö&I Clean kennen – Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Aalen und Umgebung.",
};

export default function AboutPage() {
  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <Header active="about" />
    <main id="main">
      <section className="inner-hero inner-hero--about"><div className="inner-hero__overlay"></div><div className="shell inner-hero__content"><p className="eyebrow eyebrow--light">Über Ö&I Clean</p><h1>Saubere Arbeit beginnt mit Vertrauen.</h1><p>Regional verwurzelt, persönlich erreichbar und zuverlässig im Einsatz für Unternehmen und Privathaushalte.</p></div></section>

      <section className="section"><div className="shell story-grid">
        <div className="story-copy"><p className="eyebrow">Wer wir sind</p><h2>Ihr Reinigungspartner aus der Region.</h2><p>Ö&I Clean steht für sorgfältige Gebäudereinigung mit klaren Absprachen und persönlicher Betreuung. Wir entwickeln Lösungen, die zu Ihrem Objekt, Ihren Abläufen und Ihren Anforderungen passen.</p><p>Statt starrer Standardpakete erhalten Sie bei uns einen nachvollziehbaren Reinigungsplan, feste Ansprechpartner und ein Team, das verantwortungsvoll mit Ihren Räumen umgeht.</p></div>
        <div className="story-image"><img src="/assets/aalen.jpg" alt="Aalen und Umgebung" width="1250" height="750" /><div><strong>Regional verbunden</strong><span>Aalen & Umgebung</span></div></div>
      </div></section>

      <section className="section values-section"><div className="shell"><div className="section-heading section-heading--center"><div><p className="eyebrow">Was uns wichtig ist</p><h2>Werte, die man im Ergebnis sieht.</h2></div></div><div className="values-grid">
        <article><span>01</span><h3>Zuverlässigkeit</h3><p>Vereinbarte Zeiten, klare Zuständigkeiten und eine Ausführung, auf die Sie zählen können.</p></article>
        <article><span>02</span><h3>Sorgfalt</h3><p>Geschulte Teams und strukturierte Abläufe sorgen für gleichbleibend gründliche Ergebnisse.</p></article>
        <article><span>03</span><h3>Persönlichkeit</h3><p>Sie sprechen mit Menschen, die Ihr Objekt und Ihre individuellen Anforderungen kennen.</p></article>
        <article><span>04</span><h3>Transparenz</h3><p>Leistungen, Intervalle und Kosten werden verständlich und fair mit Ihnen abgestimmt.</p></article>
      </div></div></section>

      <section className="section quality-section"><div className="shell quality-grid"><div><p className="eyebrow eyebrow--light">Qualität im Alltag</p><h2>Gut geplant. Gründlich umgesetzt.</h2></div><ul className="check-list"><li>Individuelle Objekt- und Bedarfsanalyse</li><li>Feste Ansprechpartner und kurze Wege</li><li>Regelmäßige Qualitätskontrollen</li><li>Flexible Anpassung bei verändertem Bedarf</li></ul></div></section>

      <section className="detail-cta"><div className="shell detail-cta__inner"><div><p className="eyebrow eyebrow--light">Lernen wir uns kennen</p><h2>Wir nehmen uns Zeit für Ihr Anliegen.</h2></div><Link className="button button--primary" href="/kontakt">Kontakt aufnehmen</Link></div></section>
    </main>
    <Footer />
  </>;
}
