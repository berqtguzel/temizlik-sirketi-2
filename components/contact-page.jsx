"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { formData } from "@/data/site-data";
import { Footer, Header, ServiceSelect } from "./site-chrome";

export default function ContactPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    event.currentTarget.reset();
    setMessage(formData.success);
    window.setTimeout(() => setMessage(""), 3600);
  }

  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <Header active="contact" />
    <main id="main">
      <section className="inner-hero inner-hero--contact"><div className="inner-hero__overlay"></div><div className="shell inner-hero__content"><p className="eyebrow eyebrow--light">Kontakt</p><h1>Wie können wir Ihnen helfen?</h1><p>Erzählen Sie uns kurz von Ihrem Objekt. Wir melden uns in der Regel innerhalb eines Werktages.</p></div></section>

      <section className="section contact-page-section"><div className="shell contact-page-grid">
        <div className="contact-page-info"><p className="eyebrow">Direkter Kontakt</p><h2>Wir sind persönlich für Sie da.</h2><p>Ob regelmäßige Reinigung oder einmaliger Einsatz: Senden Sie uns Ihre Anfrage oder sprechen Sie direkt mit uns.</p>
          <div className="contact-info-cards"><a href="tel:+4936874385567"><span>☎</span><div><small>Telefon</small><strong>+49 (0)36874 38 55 67</strong><em>Mo–Fr · 07:00–18:00 Uhr</em></div></a><a href="mailto:info@oi-clean.de"><span>✉</span><div><small>E-Mail</small><strong>info@oi-clean.de</strong><em>Antwort meist innerhalb eines Werktages</em></div></a><div><span>⌖</span><div><small>Einsatzgebiet</small><strong>Aalen & Umgebung</strong><em>Weitere Orte nach Absprache</em></div></div></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}><p className="eyebrow">Unverbindlich anfragen</p><h3>Ihr persönliches Angebot</h3>
          <div className="field-row"><label><span>{formData.name}</span><input name="name" type="text" autoComplete="name" required /></label><label><span>{formData.phone}</span><input name="phone" type="tel" autoComplete="tel" required /></label></div>
          <label><span>{formData.email}</span><input name="email" type="email" autoComplete="email" required /></label><label><span>{formData.requested}</span><ServiceSelect services={services} /></label><label><span>{formData.message}</span><textarea name="message" rows="5" required></textarea></label>
          <p className="form-note">{formData.note}</p><button className="button button--primary button--wide" type="submit">{formData.submit}</button>
        </form>
      </div></section>

      <section className="availability"><div className="shell availability-grid"><div><strong>24h</strong><span>Schnelle Rückmeldung</span></div><div><strong>Mo–Fr</strong><span>Persönlich erreichbar</span></div><div><strong>Aalen</strong><span>Regional im Einsatz</span></div></div></section>
    </main>
    <Footer />
    <div className={`toast ${message ? "is-visible" : ""}`} role="status" aria-live="polite">{message}</div>
  </>;
}
