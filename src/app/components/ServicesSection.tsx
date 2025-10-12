"use client";

import { motion } from "framer-motion";
import { CleaningServices, LocalFlorist, AutoAwesome, EventRepeat } from "@mui/icons-material";

const services = [
  {
    title: "Nettoyage de sépultures",
    description:
      "Un nettoyage complet de la pierre tombale, des plaques et accessoires, avec des produits adaptés et respectueux.",
    icon: <CleaningServices fontSize="large" />,
  },
  {
    title: "Fleurissement & décoration",
    description:
      "Remplacement et entretien des fleurs naturelles ou artificielles pour préserver la beauté du lieu.",
    icon: <LocalFlorist fontSize="large" />,
  },
  {
    title: "Entretien régulier",
    description:
      "Formules mensuelles, trimestrielles ou annuelles pour garder la sépulture impeccable toute l’année.",
    icon: <EventRepeat fontSize="large" />,
  },
  {
    title: "Photo avant / après",
    description:
      "Recevez un compte rendu illustré du travail effectué, pour un suivi transparent et rassurant.",
    icon: <AutoAwesome fontSize="large" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[#545454] mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
