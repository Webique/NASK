import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import WhatsAppFloat from "@/components/whatsapp-float";

import About from "./components/about";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import CTA from "./components/cta";
import Features from "./components/features";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Validation from "./components/validation";
import Values from "./components/values";

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
