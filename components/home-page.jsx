"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import { formData, homePageData } from "@/data/site-data";
import { Footer, Header, ServiceSelect } from "./site-chrome";

export default function HomePage() {
  const [toast, setToast] = useState("");
  const dialog = useRef(null);
  const content = homePageData;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function openQuote() {
    dialog.current?.showModal();
    document.body.classList.add("modal-open");
  }

  function closeQuote() {
    dialog.current?.close();
    document.body.classList.remove("modal-open");
  }

  function handleForm(event) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      showToast(formData.required);
      return;
    }
    event.currentTarget.reset();
    if (event.currentTarget.dataset.modal) closeQuote();
    showToast(formData.success);
  }

  function showToast(message) {
    setToast(message);
    window.setTimeout(() => setToast(""), 3600);
  }

  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <Header active="home" />
      <main id="main">
        <section className="hero" aria-labelledby="heroTitle">
          <img className="hero__image" src="/assets/hero.jpg" alt="Saubere moderne Industriehalle" width="1250" height="750" />
          <div className="hero__overlay"></div>
          <div className="shell hero__content reveal">
            <p className="eyebrow eyebrow--light">{content.heroEyebrow}</p><h1 id="heroTitle">{content.heroTitle}</h1><p className="hero__lead">{content.heroLead}</p>
            <div className="hero__actions"><button className="button button--primary" type="button" onClick={openQuote}>{content.quote}</button><a className="button button--glass" href="#services">{content.viewServices}</a></div>
            <div className="hero__trust"><span><b>15+</b><small>{content.years}</small></span><span><b>100%</b><small>{content.flexible}</small></span><span><b>24h</b><small>{content.reply}</small></span></div>
          </div>
        </section>

        <section className="section services" id="services"><div className="shell">
          <div className="section-heading reveal"><div><p className="eyebrow">{content.servicesEyebrow}</p><h2>{content.servicesTitle}</h2></div><p>{content.servicesIntro}</p></div>
          <div className="service-grid">{services.map((service, index) => <article className="service-card reveal" key={service.slug}>
            <img src={service.image} alt={service.title} width="640" height="500" loading="lazy" /><div className="service-card__content"><span className="service-card__index">{String(index + 1).padStart(2, "0")} · Service</span><h3>{service.title}</h3><p>{service.description}</p><Link href={`/leistungen/${service.slug}`}>{content.more} →</Link></div>
          </article>)}</div>
        </div></section>

        <section className="section audience"><div className="shell">
          <div className="section-heading reveal"><div><p className="eyebrow">{content.areasEyebrow}</p><h2>{content.areasTitle}</h2></div><p>{content.areasIntro}</p></div>
          <div className="audience-grid">{content.areas.map(([title, copy], index) => <article className="audience-card reveal" key={title}>
            <div className="audience-card__top"><span className="audience-card__number">0{index + 1}</span><AudienceIcon index={index} /></div>
            <div className="audience-card__body"><h3>{title}</h3><p>{copy}</p></div>
            <Link className="audience-card__link" href="/kontakt">Lösung anfragen <svg className="audience-card__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </article>)}</div>
        </div></section>

        <section className="section about" id="about"><div className="shell about__grid">
          <div className="about__visual reveal"><img src="/assets/aalen.jpg" alt="Altstadt von Aalen" width="1250" height="750" loading="lazy" /><div className="about__badge"><strong>Regional</strong><span>Aalen & Umgebung</span></div></div>
          <div className="about__copy reveal"><p className="eyebrow">Ö&I Clean</p><h2>{content.aboutTitle}</h2><p>{content.aboutCopy}</p><ul className="check-list">{content.aboutPoints.map((point) => <li key={point}>{point}</li>)}</ul><Link className="text-link" href="/uber-uns">{content.more} →</Link></div>
        </div></section>

        <section className="promise"><div className="shell promise__inner reveal"><div><p className="eyebrow eyebrow--light">{content.promiseEyebrow}</p><h2>{content.promiseTitle}</h2><p>{content.promiseCopy}</p></div><div className="promise__numbers"><span><b>15+</b><small>{content.years}</small></span><span><b>24h</b><small>{content.reply}</small></span><span><b>100%</b><small>{content.flexible}</small></span></div></div></section>

        <section className="process-section"><div className="shell"><div className="section-heading section-heading--center reveal"><div><p className="eyebrow">{content.processEyebrow}</p><h2>{content.processTitle}</h2></div></div><div className="process-grid">{content.process.map(([title, copy], index) => <article className="process-card reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="section contact" id="contact"><div className="shell home-contact reveal"><div><p className="eyebrow eyebrow--light">Kontakt</p><h2>{content.contactTitle}</h2><p>{content.contactCopy}</p></div><div className="home-contact__actions"><Link className="button button--primary" href="/kontakt">Kontakt</Link><button className="button button--glass" type="button" onClick={openQuote}>{content.quote}</button></div></div></section>
      </main>
      <Footer />
      <dialog className="quote-modal" ref={dialog} onClose={() => document.body.classList.remove("modal-open")} onClick={(event) => event.target === dialog.current && closeQuote()}>
        <div className="modal__header"><div><p className="eyebrow">{content.quote}</p><h2>{content.modalTitle}</h2></div><button className="modal__close" type="button" onClick={closeQuote} aria-label="Fenster schließen">×</button></div>
        <ContactForm services={services} onSubmit={handleForm} modal />
      </dialog>
      <div className={`toast ${toast ? "is-visible" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}

function AudienceIcon({ index }) {
  const icons = [
    <><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V4h6v3M8 12h8M12 12v4"/></>,
    <><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="9"/></>,
    <><path d="M4 21V9l8-5 8 5v12M8 21v-7h8v7M8 10h.01M16 10h.01"/></>,
    <><path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10M9 20v-6h6v6"/></>,
  ];
  return <span className="audience-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24">{icons[index]}</svg></span>;
}

function ContactForm({ services, onSubmit, modal = false }) {
  return <form className={modal ? "" : "contact-form reveal"} onSubmit={onSubmit} data-modal={modal || undefined} noValidate={false}>
    <div className="field-row"><label><span>{formData.name}</span><input name="name" type="text" autoComplete="name" required /></label><label><span>{formData.phone}</span><input name="phone" type="tel" autoComplete="tel" required /></label></div>
    <label><span>{formData.email}</span><input name="email" type="email" autoComplete="email" required /></label>
    <label><span>{formData.requested}</span><ServiceSelect services={services} /></label>
    <label><span>{formData.message}</span><textarea name="message" rows="4" required></textarea></label>
    <p className="form-note">{formData.note}</p><button className="button button--primary button--wide" type="submit">{formData.submit}</button>
  </form>;
}
