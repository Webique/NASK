"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const t = useTranslations("IndexPage.hero");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <ExportedImage
          src="/images/hero.jpeg"
          alt="Nanofiber Technology"
          fill
          className="object-cover"
          priority={true}
        />
        {/* Dark Overlay for better text readability */}
        <div className="bg-linear-to-r absolute inset-0 from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        <div className="bg-linear-to-b absolute inset-0 from-transparent via-transparent to-gray-900/50"></div>
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/20 absolute end-20 top-20 h-96 w-96 rounded-full opacity-30 mix-blend-screen blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-secondary/20 absolute start-20 top-40 h-96 w-96 rounded-full opacity-30 mix-blend-screen blur-3xl filter"></div>
        <div className="animation-delay-4000 animate-blob bg-accent/20 absolute bottom-20 end-40 h-96 w-96 rounded-full opacity-30 mix-blend-screen blur-3xl filter"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="bg-size-[40px_40px] absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>

      {/* Logo on Right Side - Desktop Only */}
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute end-8 top-1/2 z-20 hidden -translate-y-1/2 lg:block xl:end-16"
      >
        <div className="bg-background/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl ring-2 ring-white/10">
          <Logo
            src="/images/logoo.png"
            className="pointer-events-none"
            imgClassName="h-32 w-auto lg:h-40 xl:h-48"
            href="#"
          />
        </div>
      </m.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 pt-40 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>{t("badge")}</span>
          </m.div>

          {/* Main Title */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </m.h1>

          {/* Subtitle with Gradient */}
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="from-primary via-secondary to-accent bg-linear-to-r mb-6 bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-4xl"
          >
            {t("subtitle")}
          </m.h2>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-8 text-base leading-relaxed text-gray-300 md:text-lg"
          >
            {t("description")}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={`/${locale}#technology`}
              className="from-primary to-secondary shadow-primary/40 hover:shadow-primary/60 bg-linear-to-r group relative flex items-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("exploreBtn")}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </span>
              <div className="from-secondary to-primary bg-linear-to-r absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border-2 border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              {t("sampleBtn")}
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
}
