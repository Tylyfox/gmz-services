// helpers.ts
export const validateField = (name: string, value: string): string => {
  if (!value.trim()) return "Ce champ est requis.";

  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Adresse e-mail invalide.";
  }

  if (name === "message" && value.length < 10)
    return "Le message doit contenir au moins 10 caractères.";

  return "";
};
