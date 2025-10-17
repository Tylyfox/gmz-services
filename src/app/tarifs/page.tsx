"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tarifs = [
  {
    title: "Formule complète",
    price: "70 €",
    description:
      "Nettoyage complet avec lavage, brossage, séchage, lustrage, nettoyage de 5 ornements, désherbage et rapport photo avant/après.",
    details: [
      "Retrait et coupe des fleurs fanées",
      "Arrosage des plantes présentes",
      "Entretien ponctuel idéal avant les commémorations",
    ],
    icon: "🧽",
  },
  {
    title: "Formule tranquillité",
    price: "à partir de 130 €",
    description:
      "Un suivi régulier tout au long de l’année avec nettoyage complet à chaque passage.",
    details: [
      "2 passages / an — 130 €",
      "4 passages / an — 250 €",
      "6 passages / an — 370 €",
      "12 passages / an — 660 €",
      "+ 35 € pour le fleurissement",
    ],
    icon: "🌿",
  },
  {
    title: "Prestations sur devis",
    price: "Sur mesure",
    description:
      "Interventions spécifiques ou restaurations légères selon vos besoins.",
    details: [
      "Redorage des lettres",
      "Ajout ou remplacement de graviers",
      "Réfection des joints",
      "Nettoyage d’ornements supplémentaires",
    ],
    icon: "🪦",
  },
];

export default function TarifsPage() {
  return (
    <main className="bg-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos formules et tarifs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des formules simples, transparentes et adaptées à vos besoins.
            Chaque prestation inclut un soin complet et un rapport photo détaillé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 shadow-sm hover:shadow-lg rounded-2xl p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="text-5xl mb-4 text-center">{tarif.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
                  {tarif.title}
                </h3>
                <p className="text-[#545454] font-bold text-lg mb-4 text-center">
                  {tarif.price}
                </p>
                <p className="text-gray-600 mb-4 text-center">
                  {tarif.description}
                </p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  {tarif.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/#contact"
                  scroll
                  className="inline-block bg-[#545454] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#333] transition"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentions légales des tarifs */}
        <div className="text-center mt-16 text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
          <p>
            Tarifs indicatifs susceptibles d’évolution selon la taille, l’état ou la localisation de la sépulture.
            Déplacements inclus dans un rayon de 20 km autour d’Aniche.
          </p>
          <p className="mt-2">
            <strong>Prix nets</strong> — TVA non applicable (article 293 B du CGI).
          </p>
        </div>
      </div>
    </main>
  );
}
