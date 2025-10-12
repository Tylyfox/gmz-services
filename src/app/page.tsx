import ContactSection from "@/app/components/ContactSection";
import Hero from "@/app/components/Hero";
import PricingSection from "@/app/components/PrincingSection";
import ServicesSection from "@/app/components/ServicesSection";
import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      {/* sections suivantes à venir : services, tarifs, etc. */}
    </>
  );
}
