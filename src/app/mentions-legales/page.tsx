export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Mentions légales</h1>

      <p>
        Conformément aux dispositions des articles 6-III et 19 de la Loi pour la
        Confiance dans l’Économie Numérique (LCEN), nous vous informons des
        éléments suivants :
      </p>

      {/* 1. Éditeur du site */}
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Éditeur du site</h2>
      <p>
        <strong>GMZ Services</strong>
        <br />
        Statut : Auto-entrepreneur
        <br />
        Adresse : 25 chemin belotte, 59580 Aniche
        <br />
        SIRET : 514 004 662 00011
        <br />
        Responsable de publication : GIMENEZ MAGDALINA
        <br />
        Email : gmz.services@gmail.com
        <br />
        Téléphone : 06 12 34 56 78
      </p>

      {/* 2. Hébergement */}
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Hébergement</h2>
      <p>
        Le site est hébergé par :
        <br />
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723
        <br />
        États-Unis
        <br />
        Site web :{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#545454]"
        >
          https://vercel.com
        </a>
      </p>

      <p className="text-gray-500 text-sm mt-4">
        Le nom de domaine est enregistré auprès de <strong>OVH SAS</strong>,
        2 rue Kellermann, 59100 Roubaix, France —{" "}
        <a
          href="https://www.ovhcloud.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#545454]"
        >
          https://www.ovhcloud.com
        </a>
      </p>

      {/* 3. Propriété intellectuelle */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Propriété intellectuelle
      </h2>
      <p>
        L’ensemble du contenu de ce site (textes, images, logos, graphismes,
        etc.) est la propriété exclusive de GMZ Services, sauf mention contraire.
        Toute reproduction, distribution ou utilisation sans autorisation
        préalable est interdite.
      </p>

      {/* 4. Limitation de responsabilité */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Limitation de responsabilité
      </h2>
      <p>
        GMZ Services s’efforce d’assurer la fiabilité des informations présentes
        sur le site. Toutefois, aucune garantie n’est donnée quant à leur
        exactitude ou leur mise à jour.
      </p>

      {/* 5. Données personnelles */}
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Données personnelles</h2>
      <p>
        Les informations recueillies via le formulaire de contact sont
        enregistrées uniquement pour répondre à vos demandes. Vous disposez d’un
        droit d’accès, de rectification et de suppression de vos données, que
        vous pouvez exercer en écrivant à :{" "}
        <a
          href="mailto:gmz.services@gmail.com"
          className="text-[#545454] underline"
        >
          gmz.services@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
