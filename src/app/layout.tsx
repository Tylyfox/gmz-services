import type { Metadata } from "next";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* 🖋️ Polices Google */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["400", "700"],
  display: "swap",
});

/* 🌍 Métadonnées SEO globales */
export const metadata: Metadata = {
  title: "GMZ Services | Nettoyage et entretien de sépultures à Aniche",
  description:
    "GMZ Services propose le nettoyage, l’entretien et la rénovation de sépultures dans un rayon de 20 km autour d’Aniche. Respect, soin et professionnalisme au service de la mémoire.",
  keywords: [
    "entretien de tombes",
    "nettoyage sépulture",
    "Aniche",
    "fleurissement tombes",
    "GMZ Services",
    "entretien funéraire",
  ],
  authors: [{ name: "GMZ Services" }],
  robots: { index: true, follow: true },

  openGraph: {
    title: "GMZ Services | Nettoyage et entretien de sépultures à Aniche",
    description:
      "Entretien, nettoyage et fleurissement de sépultures — service professionnel autour d’Aniche.",
    url: "https://gmz-services.fr", 
    siteName: "GMZ Services",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.png", // ton logo carré
        width: 600,
        height: 600,
        alt: "Logo GMZ Services",
      },
    ],
  },

  /* 🔗 Icônes et favicon */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

/* 🧩 Layout principal */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${robotoCondensed.variable} antialiased bg-[var(--background)] text-[#545454]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
