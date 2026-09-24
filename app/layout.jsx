import "./globals.css";
import CookieBanner from "@/components/cookie-banner";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: { default: "Ö&I Clean | Gebäudereinigung in Aalen", template: "%s | Ö&I Clean" },
  description: "Professionelle Gebäudereinigung in Aalen – persönlich, gründlich und flexibel.",
  keywords: ["Gebäudereinigung Aalen", "Unterhaltsreinigung", "Glasreinigung", "Industriereinigung", "Baureinigung"],
  robots: { index: true, follow: true },
  openGraph: { title: "Ö&I Clean | Gebäudereinigung in Aalen", description: "Professionelle Reinigung für Unternehmen und Privathaushalte in Aalen und Umgebung.", type: "website", locale: "de_DE" },
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
