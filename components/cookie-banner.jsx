"use client";

import { useEffect, useState } from "react";

const consentKey = "oi-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(consentKey));
    const openSettings = () => setVisible(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function saveConsent(value) {
    localStorage.setItem(consentKey, value);
    document.cookie = `${consentKey}=${value}; max-age=31536000; path=/; samesite=lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return <section className="cookie-banner" aria-label="Cookie-Einstellungen" role="dialog" aria-live="polite">
    <div className="cookie-banner__copy"><strong>Ihre Privatsphäre ist uns wichtig</strong><p>Wir verwenden notwendige Speichertechniken für Einstellungen wie Ihre Cookie-Auswahl. Analyse- oder Marketing-Cookies sind derzeit nicht aktiv.</p></div>
    <div className="cookie-banner__actions"><button className="button cookie-secondary" type="button" onClick={() => saveConsent("necessary")}>Nur notwendige</button><button className="button button--primary" type="button" onClick={() => saveConsent("all")}>Alle akzeptieren</button></div>
  </section>;
}
