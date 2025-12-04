"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero() {
  const t = useTranslations("IndexPage.hero");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="bg-linear-to-br relative flex min-h-screen items-center justify-center overflow-hidden from-gray-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80')] bg-cover bg-center opacity-5"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary absolute end-10 top-20 h-96 w-96 rounded-full opacity-10 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 bg-secondary absolute start-10 top-40 h-96 w-96 rounded-full opacity-10 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 bg-primary absolute -bottom-8 start-1/2 h-96 w-96 rounded-full opacity-10 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="text-center lg:text-start">
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-primary/10 to-secondary/10 text-secondary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <Sparkles size={16} />
            {t("badge")}
          </m.div>

          {/* Main Title */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
          >
            {t("title")}
          </m.h1>

          {/* Subtitle */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-linear-to-r from-primary to-secondary mb-6 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
          >
            {t("subtitle")}
          </m.h2>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            {t("description")}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href={`/${locale}#technology`}
              className="bg-linear-to-r from-primary to-accent group flex items-center gap-2 rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t("exploreBtn")}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="border-secondary text-secondary hover:bg-secondary rounded-lg border-2 px-8 py-4 font-semibold transition-all duration-300 hover:text-white"
            >
              {t("sampleBtn")}
            </Link>
          </m.div>
        </div>

        {/* Right Image */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <ExportedImage
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
              alt="Nanofiber Technology"
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
            <div className="bg-linear-to-tr from-primary/20 to-secondary/20 absolute inset-0"></div>
          </div>

          {/* Floating Stats */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -start-4 top-1/4 rounded-xl bg-white p-4 shadow-xl"
          >
            <div className="text-primary text-3xl font-bold">&gt;99%</div>
            <div className="text-sm text-gray-600">{t("antibacterial")}</div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -end-4 bottom-1/4 rounded-xl bg-white p-4 shadow-xl"
          >
            <div className="text-secondary text-3xl font-bold">5+</div>
            <div className="text-sm text-gray-600">{t("globalPatents")}</div>
          </m.div>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 transform"
      >
        <div className="border-primary flex h-10 w-6 justify-center rounded-full border-2">
          <div className="bg-primary mt-2 h-2 w-1 rounded-full"></div>
        </div>
      </m.div>
    </section>
  );
}
