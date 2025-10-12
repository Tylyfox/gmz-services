import Link from "next/link";

export default function MerciPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Merci pour votre message 💌
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Votre demande a bien été envoyée.  
        Nous vous répondrons dans les plus brefs délais.
      </p>
      <Link
        href="/"
        className="bg-[#545454] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#333] transition"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
