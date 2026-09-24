"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Footer, Header } from "./site-chrome";

export default function ServiceDetail({ service }) {
  useEffect(() => {
    document.documentElement.lang = "de";
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <Header active="services" />
    <main id="main">
      <section className="service-hero">
        <img className="service-hero__image" src={service.image} alt={service.title} />
        <div className="service-hero__overlay"></div>
        <div className="shell service-hero__content reveal">
          <p className="eyebrow eyebrow--light">Ö&I Clean · Leistungen</p><h1>{service.title}</h1><p>{service.description}</p>
          <div className="hero__actions"><Link className="button button--primary" href="/#contact">Kostenloses Angebot</Link><Link className="button button--glass" href="/#services">Alle Leistungen</Link></div>
        </div>
      </section>
      <section className="section service-detail"><div className="shell service-detail__grid">
        <div className="service-detail__copy reveal"><p className="eyebrow">Professionell & zuverlässig</p><h2>Sauberkeit passend zu Ihrem Bedarf.</h2><p>{service.intro}</p><p>Nach einer persönlichen Abstimmung planen wir Umfang, Intervalle und Einsatzzeiten transparent. So erhalten Sie genau die Reinigung, die zu Ihrem Objekt und Ihrem Alltag passt.</p></div>
        <aside className="benefit-card reveal"><span className="service-card__index">Ihre Vorteile</span><h3>Darauf können Sie sich verlassen</h3><ul className="check-list">{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></aside>
      </div></section>
      <section className="detail-cta"><div className="shell detail-cta__inner reveal"><div><p className="eyebrow eyebrow--light">Unverbindlich anfragen</p><h2>Wir erstellen Ihr individuelles Angebot.</h2></div><Link className="button button--primary" href="/#contact">Kontakt aufnehmen</Link></div></section>
    </main>
    <Footer />
  </>;
}
