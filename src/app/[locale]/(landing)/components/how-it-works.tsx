"use client";

import { ArrowRight, Layers, Settings, Zap } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("IndexPage.howItWorks");

  const steps = [
    {
      icon: Zap,
      step: "01",
      title: t("step1.title"),
      description: t("step1.description")
    },
    {
      icon: Layers,
      step: "02",
      title: t("step2.title"),
      description: t("step2.description")
    },
    {
      icon: Settings,
      step: "03",
      title: t("step3.title"),
      description: t("step3.description")
    }
  ];

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-white via-orange-50/30 to-white py-24">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
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
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="from-primary via-secondary to-primary bg-linear-to-r absolute left-0 right-0 top-24 hidden h-0.5 lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Step number badge */}
                    <div className="from-primary to-secondary bg-linear-to-br absolute -top-4 start-8 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 transition-colors duration-300 group-hover:bg-gray-200">
                        <Icon size={40} className="text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-center text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-center leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow connector - mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4 lg:hidden">
                      <ArrowRight className="text-primary h-6 w-6 rotate-90" />
                    </div>
                  )}
                </m.div>
              );
            })}
          </div>
        </div>

        {/* Result highlight */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="from-primary/10 to-secondary/10 bg-linear-to-r inline-flex items-center gap-3 rounded-full px-8 py-4">
            <Layers className="text-primary h-6 w-6" />
            <span className="text-lg font-semibold text-gray-900">
              {t("result")}
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
