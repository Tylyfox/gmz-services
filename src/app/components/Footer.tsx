"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f9f9] text-gray-700 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm">
        <p className="mb-4">
          © {currentYear} <strong>GMZ Services</strong> — Tous droits réservés
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <Link
            href="/mentions-legales"
            className="hover:text-[#545454] underline underline-offset-2 transition"
          >
            Mentions légales
          </Link>
          <span>|</span>
          <Link
            href="/politique-de-confidentialite"
            className="hover:text-[#545454] underline underline-offset-2 transition"
          >
            Politique de confidentialité
          </Link>
          <span>|</span>
          <Link
            href="#contact"
            scroll={true}
            className="hover:text-[#545454] underline underline-offset-2 transition"
          >
            Contact
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Site réalisé par <span className="font-medium">GMZ Services</span>.
        </p>
      </div>
    </footer>
  );
}
