"use client";

import Link from "next/link";

export default function ErrorPage({ reset }) {
  return <main className="error-page"><div className="error-page__card"><span className="error-page__code">!</span><p className="eyebrow">Ein Fehler ist aufgetreten</p><h1>Das hat leider nicht funktioniert.</h1><p>Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.</p><div><button className="button button--primary" type="button" onClick={reset}>Erneut versuchen</button><Link className="button error-page__secondary" href="/">Zur Startseite</Link></div></div></main>;
}
