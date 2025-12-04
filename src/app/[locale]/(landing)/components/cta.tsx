"use client";

import { ArrowRight, Award, CheckCircle2, Sparkles, Zap } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CTA() {
  const t = useTranslations("IndexPage.cta");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const features = [
    { icon: Award, text: t("feature1") },
    { icon: Zap, text: t("feature2") },
    { icon: CheckCircle2, text: t("feature3") }
  ];

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-gray-50 via-white to-orange-50/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/cta-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Gradient Background */}
          <div className="bg-linear-to-r from-primary to-secondary absolute inset-0" />

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
          </div>

          {/* Floating Sparkles */}
          <m.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute right-8 top-8"
          >
            <Sparkles className="h-8 w-8 text-white/40" />
          </m.div>

          <m.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-8 left-8"
          >
            <Sparkles className="h-6 w-6 text-white/30" />
          </m.div>

          {/* Content */}
          <div className="relative z-10 p-12 text-center md:p-16 lg:p-20">
            {/* Title */}
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            >
              {t("title")}
            </m.h2>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12 text-lg text-white/95 md:text-xl"
            >
              {t("description")}
            </m.p>

            {/* Features Grid */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 ring-2 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-semibold text-white">
                        {feature.text}
                      </span>
                    </div>
                  </m.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${locale}#contact`}
                className="text-secondary group inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                {t("contactBtn")}
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                />
              </Link>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
