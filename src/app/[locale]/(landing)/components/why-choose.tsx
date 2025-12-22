"use client";

import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export default function WhyChoose() {
  const t = useTranslations("IndexPage.products");

  const whyChoose = [
    { icon: Shield, label: t("whyChoose.patented") },
    { icon: Zap, label: t("whyChoose.verified") },
    { icon: ArrowRight, label: t("whyChoose.scalable") },
    { icon: Leaf, label: t("whyChoose.customization") }
  ];

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-white to-gray-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Why Choose NASK */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t("whyChoose.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t("whyChoose.subtitle")}
            </p>
          </div>

          {/* Why Choose Grid - Minimal cards with bottom accent */}
          <div className="grid gap-6 md:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                    {/* Bottom accent bar */}
                    <div className="bg-linear-to-r from-primary to-secondary absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1" />

                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-linear-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300">
                        <Icon
                          className={cn(
                            "text-primary h-7 w-7 transition-transform duration-300 group-hover:scale-110",
                            index === 2 && "rtl:rotate-180"
                          )}
                        />
                      </div>
                      <p className="text-center text-sm font-semibold text-gray-900">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}



