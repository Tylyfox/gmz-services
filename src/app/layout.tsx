import type { Metadata } from "next";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* 🖋️ Import des polices */
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

/* 🌍 Métadonnées du site */
export const metadata: Metadata = {
  title: "GMZ Services — Nettoyage et entretien de sépultures",
  description:
    "GMZ Services propose un service de nettoyage et d’entretien de sépultures, alliant respect, soin et professionnalisme.",
  icons: {
    icon: "/logo.png",
  },
};

/* 🧩 Layout global */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
