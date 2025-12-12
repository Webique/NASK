import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import Products from "@/app/[locale]/(landing)/components/products";
import WhatsAppFloat from "@/components/whatsapp-float";

import Certifications from "./components/certifications";
import Contact from "./components/contact";
import CTA from "./components/cta";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Mission from "./components/mission";
import Stats from "./components/stats";
import Technology from "./components/technology";
import Testimonials from "./components/testimonials";
import Validation from "./components/validation";
import Values from "./components/values";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      {/* Hero & Company Identity */}
      <Hero />
      <Mission />
      <Values />
      <Stats />

      {/* Technology Deep Dive - Dark Section */}
      <Technology />
      <HowItWorks />

      {/* Validation & Trust */}
      <Validation />
      <Certifications />

      {/* Product Benefits & Showcase */}
      <Features />
      <Products />

      {/* Social Proof & Contact */}
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <WhatsAppFloat />
    </main>
  );
}
