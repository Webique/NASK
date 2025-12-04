"use client";

import { Heart, Shield, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Values() {
  const t = useTranslations("IndexPage.values");

  const values = [
    {
      icon: Heart,
      title: t("value1.title"),
      description: t("value1.description"),
      gradient: "from-primary to-accent"
    },
    {
      icon: Target,
      title: t("value2.title"),
      description: t("value2.description"),
      gradient: "from-secondary to-[#C13845]"
    },
    {
      icon: Shield,
      title: t("value3.title"),
      description: t("value3.description"),
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/values-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </m.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`bg-linear-to-br absolute inset-0 ${value.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`bg-linear-to-br mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl ${value.gradient} shadow-lg`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`bg-linear-to-r absolute bottom-0 start-0 h-1 w-0 ${value.gradient} transition-all duration-300 group-hover:w-full`}
                ></div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
