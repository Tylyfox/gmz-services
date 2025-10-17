"use client";

import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { validateField } from "./helpers";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [botField, setBotField] = useState("");

  // 🚀 Redirection après succès
  useEffect(() => {
    if (state.succeeded) {
      window.location.href = "/merci";
    }
  }, [state.succeeded]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (touched[name as keyof typeof touched]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const isBot = botField.trim() !== "";
  const isValid =
    Object.values(errors).every((e) => !e) &&
    values.name.trim() &&
    values.email.trim() &&
    values.message.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isBot) return console.warn("🤖 Bot détecté");
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const formErrors = {
          name: validateField("name", data.get("name") as string),
          email: validateField("email", data.get("email") as string),
          message: validateField("message", data.get("message") as string),
        };
        setErrors(formErrors);
        if (!Object.values(formErrors).some((err) => err !== "")) handleSubmit(e);
      }}
      className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 text-left space-y-6"
    >
      {/* 🕵️ Honeypot invisible */}
      <input
        type="text"
        name="_gotcha"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* NOM */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full border ${
            errors.name ? "border-red-400" : "border-gray-300"
          } rounded-lg p-3 focus:outline-none focus:ring-2 ${
            errors.name ? "focus:ring-red-300" : "focus:ring-[#545454]"
          }`}
          placeholder="Votre nom"
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full border ${
            errors.email ? "border-red-400" : "border-gray-300"
          } rounded-lg p-3 focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-300" : "focus:ring-[#545454]"
          }`}
          placeholder="votremail@email.com"
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* MESSAGE */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          className={`w-full border ${
            errors.message ? "border-red-400" : "border-gray-300"
          } rounded-lg p-3 focus:outline-none focus:ring-2 ${
            errors.message ? "focus:ring-red-300" : "focus:ring-[#545454]"
          }`}
          placeholder="Décrivez votre demande..."
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* BOUTON */}
      <button
        type="submit"
        disabled={!isValid || state.submitting}
        className={`w-full py-3 rounded-lg font-medium transition relative flex justify-center items-center gap-2 ${
          !isValid || state.submitting
            ? "bg-gray-300 cursor-not-allowed text-gray-600"
            : "bg-[#545454] text-white hover:bg-[#333] cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
        }`}
      >
        {state.submitting ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer le message
            <SendRoundedIcon
              className={`transition-all duration-300 ${
                isValid ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
              }`}
              sx={{ fontSize: 20 }}
            />
          </>
        )}
      </button>
    </form>
  );
}
