"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { tarifs } from "@/app/data/tarifs";

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-20" id="tarifs">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Nos formules d’entretien de sépultures
          </h2>
          <p className="text-lg leading-relaxed">
            Découvrez nos formules simples, transparentes et adaptées à vos besoins.  
            Chaque prestation est réalisée avec le plus grand soin.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {tarifs.map((forfait, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {forfait.title}
                </h3>
                <div className="h-[2px] w-12 bg-[#545454] mb-4 rounded-full" />
                <p className="text-[#545454] font-bold text-lg mb-4 tracking-tight">
                  {forfait.price}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {forfait.description}
                </p>
                <ul className="text-sm text-gray-600 mb-8 space-y-2 text-left">
                  {forfait.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#545454] mt-[3px]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex justify-center gap-3">
                <Link
                  href="#contact"
                  scroll={true}
                  className="inline-block bg-[#545454] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#333] transition"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-block border border-[#545454] text-[#545454] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#545454] hover:text-white transition"
                >
                  Voir le détail
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
