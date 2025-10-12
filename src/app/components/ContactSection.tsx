"use client";

import { motion } from "framer-motion";
import { Email, Phone, Place } from "@mui/icons-material";
import ContactForm from "./Contact/ContactForm";

export default function ContactSection() {

  return (
    <section className="bg-white py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Une question, un devis ou un simple renseignement ?  
            Nous sommes à votre écoute pour vous accompagner avec respect et professionnalisme.
          </p>
        </motion.div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-center text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Nos coordonnées
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <Phone sx={{ color: "#545454" }} />
                <span>06 12 34 56 78</span>
              </li>
              <li className="flex items-center gap-3">
                <Email sx={{ color: "#545454" }} />
                <span>gmz.services@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Place sx={{ color: "#545454" }} />
                <span>Aniche et alentours</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-6 italic">
              Réponse garantie sous 24 à 48h.
            </p>
          </motion.div>
<ContactForm />
        
        </div>
      </div>
    </section>
  );
}
