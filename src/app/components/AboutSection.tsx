"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-sm"
        >
          <Image
            src="/logo.png"
            alt="Entretien et nettoyage de sépulture"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            À propos de <span className="text-[#545454]">GMZ Services</span>
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Fondée par une entreprise familiale locale, <strong>GMZ Services</strong> est spécialisée dans
            le <strong>nettoyage et l’entretien de sépultures</strong> dans le secteur d’Aniche et ses environs.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Nous mettons un point d’honneur à offrir un service de qualité, réalisé avec
            <strong> respect, discrétion et professionnalisme</strong>.  
            Chaque intervention est effectuée avec soin, dans le respect des lieux de mémoire.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Nous intervenons dans un rayon de <strong>20 km autour d’Aniche</strong> (Douai, Somain, Denain, Valenciennes…)
            et proposons des <strong>formules personnalisées</strong> selon vos besoins : nettoyage ponctuel, entretien régulier,
            fleurissement ou rénovation.
          </p>

          <p className="text-gray-600 italic">
            « Parce que l’entretien des sépultures est avant tout un geste d’amour et de souvenir. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
