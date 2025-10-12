export default function PolitiqueDeConfidentialite() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Politique de confidentialité
      </h1>

      <p>
        Cette politique de confidentialité décrit la manière dont GMZ Services
        collecte, utilise et protège les données personnelles recueillies via ce
        site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Données collectées
      </h2>
      <p>
        Seules les informations que vous fournissez via le formulaire de contact
        sont collectées (nom, adresse e-mail et message). Ces données sont
        utilisées uniquement pour répondre à vos demandes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Conservation des données
      </h2>
      <p>
        Vos données ne sont conservées que le temps nécessaire au traitement de
        votre demande, puis supprimées au bout de 12 mois maximum.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Partage des données
      </h2>
      <p>
        GMZ Services ne partage aucune donnée personnelle avec des tiers, sauf
        obligation légale.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Sécurité des données
      </h2>
      <p>
        Des mesures techniques sont mises en œuvre pour protéger vos
        informations contre tout accès non autorisé.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Vos droits
      </h2>
      <p>
        Vous pouvez demander à tout moment l’accès, la rectification ou la
        suppression de vos données personnelles en écrivant à :{" "}
        <a
          href="mailto:gmz.services@gmail.com"
          className="text-[#545454] underline"
        >
          gmz.services@gmail.com
        </a>
        .
      </p>

      <p className="mt-10 text-sm text-gray-500">
        Dernière mise à jour : {new Date().getFullYear()}
      </p>
    </main>
  );
}
