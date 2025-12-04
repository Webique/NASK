"use client";

import { ArrowRight, Award, CheckCircle2, Zap } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CTA() {
  const t = useTranslations("IndexPage.cta");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-gray-50 via-white to-orange-50/30 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linear-to-r from-primary to-secondary relative overflow-hidden rounded-3xl p-12 text-center shadow-2xl md:p-16"
        >
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
          </div>

          <div className="relative z-10">
            {/* Title */}
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {t("title")}
            </h2>

            {/* Description */}
            <p className="mb-10 text-lg text-white/95 md:text-xl">
              {t("description")}
            </p>

            {/* Features */}
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 text-white"
              >
                <Award className="h-6 w-6" />
                <span className="font-semibold">{t("feature1")}</span>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 text-white"
              >
                <Zap className="h-6 w-6" />
                <span className="font-semibold">{t("feature2")}</span>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 text-white"
              >
                <CheckCircle2 className="h-6 w-6" />
                <span className="font-semibold">{t("feature3")}</span>
              </m.div>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}#contact`}
              className="text-secondary group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {t("contactBtn")}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
