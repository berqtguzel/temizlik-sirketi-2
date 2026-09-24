import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import WhatsAppButton from "@/components/whatsapp-button";

const appUrl = process.env.APP_URL || "http://localhost:3000";

export const metadata = {
  title: { default: "Ö&I Clean | Gebäudereinigung in Aalen", template: "%s | Ö&I Clean" },
  description: "Professionelle Gebäudereinigung in Aalen – persönlich, gründlich und flexibel.",
  keywords: ["Gebäudereinigung Aalen", "Unterhaltsreinigung", "Glasreinigung", "Industriereinigung", "Baureinigung"],
  metadataBase: new URL(appUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Ö&I Clean | Gebäudereinigung in Aalen", description: "Professionelle Reinigung für Unternehmen und Privathaushalte in Aalen und Umgebung.", type: "website", locale: "de_DE", url: appUrl },
  icons: { icon: "/assets/logo.png" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}<WhatsAppButton /><CookieBanner /></body>
    </html>
  );
}
