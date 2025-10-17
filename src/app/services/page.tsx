"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Nettoyage complet",
    description:
      "Lavage, brossage, séchage et lustrage de la pierre tombale, nettoyage des ornements (jusqu’à 5 inclus), désherbage et rapport photo avant/après.",
    icon: "🌿",
  },
  {
    title: "Entretien régulier",
    description:
      "Suivi tout au long de l’année (2, 4, 6 ou 12 passages). Nettoyage complet, retrait des fleurs fanées et arrosage des plantes présentes.",
    icon: "🕯️",
  },
  {
    title: "Fleurissement",
    description:
      "Mise en place de fleurs fraîches ou artificielles selon les saisons ou vos souhaits. Possibilité d’abonnement annuel personnalisé.",
    icon: "🌸",
  },
  {
    title: "Rénovation et petits travaux",
    description:
      "Réfection des joints, redorage des lettres, ajout ou remplacement de graviers, nettoyage d’ornements supplémentaires sur devis.",
    icon: "🪦",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos services d’entretien de sépultures
          </h1>
        </motion.div>

        {/* Intro globale */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-center"
        >
          GMZ Services assure le <strong>nettoyage et l’entretien des sépultures, tombes et caveaux</strong> avec soin et respect.
          Nous intervenons aussi sur les <strong>columbariums</strong>, plaques funéraires et souvenirs.
          Nos prestations comprennent le <strong>désherbage</strong>, la remise en place ou ajout de <strong>graviers</strong>, le
          <strong> fleurissement</strong> et l’<strong>arrosage des plantes</strong>. Nous proposons également la
          <strong> rénovation des gravures et dorures</strong> ainsi que la <strong>réfection des joints</strong>.
        </motion.p>

        {/* Grille de services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl p-8 text-center flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zone d’intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 border border-gray-200 rounded-2xl p-6 mt-16 text-center text-gray-700"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Zone d’intervention</h3>
          <p className="text-gray-600">
            Nous intervenons dans un rayon d’environ <strong>20 km autour d’Aniche</strong> : Douai, Somain, Denain, Auberchicourt,
            Valenciennes et les communes voisines.  
            Au-delà de ce périmètre, un <strong>supplément kilométrique</strong> peut être appliqué.
          </p>
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/#contact"
            scroll
            className="inline-block bg-[#545454] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#333] transition"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
