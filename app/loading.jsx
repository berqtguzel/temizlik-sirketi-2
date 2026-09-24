export default function Loading() {
  return (
    <div className="site-loading" role="status" aria-live="polite">
      <div className="site-loading__mark">
        <img src="/assets/logo.png" alt="" width="170" height="54" />
        <span></span>
      </div>
      <p>Seite wird geladen …</p>
      <span className="sr-only">Bitte warten</span>
    </div>
  );
}
