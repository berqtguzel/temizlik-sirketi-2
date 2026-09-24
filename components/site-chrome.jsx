"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { footerData, formData, menuData } from "@/data/site-data";

const PhoneIcon = () => <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" /></svg>;

export function Header({ active = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("demoTheme") === "dark") document.documentElement.classList.add("dark");
  }, []);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("demoTheme", document.documentElement.classList.contains("dark") ? "dark" : "light");
  }

  return (
    <header className="site-header" id="top">
      <div className="contact-bar">
        <div className="shell contact-bar__inner">
          <a href="tel:+4936874385567" aria-label="Telefonnummer"><PhoneIcon />+49 (0)36874 38 55 67</a>
          <a href="mailto:info@oi-clean.de">✉ info@oi-clean.de</a>
          <span className="contact-bar__note">Mo–Fr · 07:00–18:00 Uhr</span>
        </div>
      </div>
      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="Ö&I Clean Startseite"><img src="/assets/logo.png" alt="Ö&I Clean GmbH" width="210" height="67" /></Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {menuData.map((item) => <Link className={active === item.key ? "is-active" : ""} href={item.href} key={item.key}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Farbschema wechseln"><svg className="sun" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41"/></svg></button>
          <button className="menu-button" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen"><span></span><span></span><span></span></button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile Navigation">{menuData.map((item) => <Link href={item.href} key={item.key} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div><img src="/assets/logo-dark.png" alt="Ö&I Clean GmbH" width="190" height="62" /><p>{footerData.claim}</p></div>
        <nav aria-label="Footer Navigation"><strong>Navigation</strong>{menuData.map((item) => <Link href={item.href} key={item.key}>{item.label}</Link>)}</nav>
        <div><strong>Kontakt</strong><a href="tel:+4936874385567">+49 (0)36874 38 55 67</a><a href="mailto:info@oi-clean.de">info@oi-clean.de</a><span>Aalen, Deutschland</span></div>
      </div>
      <div className="shell footer__legal"><span>Gebäudereinigung in Aalen & Umgebung</span><button type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Cookie-Einstellungen</button></div>
      <div className="shell footer__bottom"><span>© {currentYear} Ö&I Clean GmbH</span><span>Alle Rechte vorbehalten</span></div>
    </footer>
  );
}

export function ServiceSelect({ services, defaultValue = "" }) {
  return <select name="service" defaultValue={defaultValue} required><option value="">{formData.choose}</option>{services.map((service) => <option value={service.id} key={service.id}>{service.title}</option>)}</select>;
}
