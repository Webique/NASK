import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whatsapp-float";

import AboutSection from "./components/about-section";
import CTASection from "./components/cta-section";
import HeroSection from "./components/hero-section";
import PortfolioSection from "./components/portfolio-section";
import ServicesSection from "./components/services-section";
import TeamSection from "./components/team-section";
import TestimonialsSection from "./components/testimonials-section";
import ValuesSection from "./components/values-section";
import WhyUsSection from "./components/why-us-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <PortfolioSection />
      <WhyUsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <WhatsAppFloat />
    </main>
  );
}
