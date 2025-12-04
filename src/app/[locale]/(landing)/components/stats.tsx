"use client";

import { Award, Globe, TrendingUp, Users } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("IndexPage.stats");

  const stats = [
    {
      icon: Globe,
      value: t("stat1.value"),
      label: t("stat1.label")
    },
    {
      icon: Award,
      value: t("stat2.value"),
      label: t("stat2.label")
    },
    {
      icon: Users,
      value: t("stat3.value"),
      label: t("stat3.label")
    },
    {
      icon: TrendingUp,
      value: t("stat4.value"),
      label: t("stat4.label")
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/chart.png"
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
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-linear-to-br group relative overflow-hidden rounded-2xl from-gray-50 to-orange-50/30 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-linear-to-br from-primary/5 to-secondary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="relative z-10">
                  <div className="bg-linear-to-br from-primary to-secondary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
