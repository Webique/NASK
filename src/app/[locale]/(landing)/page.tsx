import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import About from "@/components/landing/about";
import Certifications from "@/components/landing/certifications";
import Contact from "@/components/landing/contact";
import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Mission from "@/components/landing/mission";
import Validation from "@/components/landing/validation";
import Values from "@/components/landing/values";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <Hero />
      <Mission />
      <Values />
      <About />
      <Validation />
      <Certifications />
      <Features />
      <CTA />
      <Contact />
      <WhatsAppFloat />
    </main>
  );
}
