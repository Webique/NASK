"use client";

import { Download, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("IndexPage.features");

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6")
  ];

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/features-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/10 absolute start-1/4 top-20 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-4000 animate-blob bg-secondary/10 absolute bottom-20 end-1/4 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="bg-linear-to-r from-primary/10 to-secondary/10 text-secondary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
            <Sparkles size={16} />
            {t("badge")}
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-2xl font-semibold text-gray-700">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Product Image */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-2xl shadow-2xl"
        >
          <ExportedImage
            src="/images/premium.jpg"
            alt={t("imageAlt")}
            className="h-80 w-full object-cover"
            width={1200}
            height={320}
          />
        </m.div>

        {/* Stats Image */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-2xl shadow-xl"
        >
          <ExportedImage
            src="/images/stats.jpg"
            alt={t("imageAlt")}
            className="h-80 w-full object-cover"
            width={1200}
            height={320}
          />
        </m.div>

        {/* Features Grid - Horizontal cards with top accent */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Top accent bar */}
              <div className="bg-linear-to-r from-primary to-secondary absolute left-0 right-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"></div>

              {/* Gradient Background on Hover */}
              <div className="bg-linear-to-r from-primary/5 to-secondary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10 flex flex-col items-start gap-3">
                <div className="bg-linear-to-br from-primary to-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <p className="font-medium leading-relaxed text-gray-700">
                  {feature}
                </p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Download CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <button className="bg-linear-to-r from-primary to-secondary ring-primary/20 hover:shadow-primary/40 group inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg ring-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Download
              size={20}
              className="transition-transform group-hover:translate-y-1"
            />
            {t("downloadBtn")}
          </button>
        </m.div>
      </div>
    </section>
  );
}
