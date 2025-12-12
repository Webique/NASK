"use client";

import {
  Droplets,
  Shield,
  Sparkles,
  ThermometerSun,
  Wind,
  Zap
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Technology() {
  const t = useTranslations("IndexPage.technology");

  const advantages = [
    {
      icon: Droplets,
      title: t("advantage1.title"),
      description: t("advantage1.description")
    },
    {
      icon: Shield,
      title: t("advantage2.title"),
      description: t("advantage2.description")
    },
    {
      icon: ThermometerSun,
      title: t("advantage3.title"),
      description: t("advantage3.description")
    },
    {
      icon: Sparkles,
      title: t("advantage4.title"),
      description: t("advantage4.description")
    },
    {
      icon: Wind,
      title: t("advantage5.title"),
      description: t("advantage5.description")
    },
    {
      icon: Zap,
      title: t("advantage6.title"),
      description: t("advantage6.description")
    }
  ];

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-gray-900 py-24"
    >
      {/* Dark tech background pattern */}
      <div className="absolute inset-0">
        <div className="bg-size-[60px_60px] absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]" />
        <div className="bg-primary/20 absolute -start-40 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="bg-secondary/20 absolute -end-40 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="border-primary/30 bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold text-white">
            <Zap size={16} className="text-primary" />
            {t("badge")}
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
            {t("description")}
          </p>
        </m.div>

        {/* Advantages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                {/* Gradient glow on hover */}
                <div className="bg-linear-to-br from-primary to-secondary absolute -end-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

                <div className="relative z-10">
                  <div className="bg-linear-to-br from-primary to-secondary mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
