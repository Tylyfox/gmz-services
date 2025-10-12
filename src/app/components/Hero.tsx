"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Image d’arrière-plan adoucie */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Sépulture fleurie entretenue avec soin"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.85)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Nettoyage et entretien de sépultures
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nous prenons soin des lieux de mémoire de vos proches avec respect et professionnalisme.  
        </p>

        {/* CTA principal */}
        <Link
          href="#contact"
          scroll={true}
          className="inline-block bg-[#545454] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#333] transition"
        >
          Nous contacter
        </Link>

        {/* Lien secondaire (revu) */}
        <p className="mt-6 text-gray-600 text-sm md:text-base">
          Découvrez nos{" "}
          <Link
            href="#tarifs"
            scroll={true}
            className="font-semibold text-[#545454] underline underline-offset-2 hover:text-[#333] transition"
          >
            formules et services
          </Link>
        </p>
      </div>
    </section>
  );
}
