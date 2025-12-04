"use client";

import { Award, CheckCircle, FlaskConical } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Validation() {
  const t = useTranslations("IndexPage.validation");

  const tests = [t("test1"), t("test2"), t("test3"), t("test4")];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          {/* Icon */}
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-primary to-secondary mb-6 inline-flex items-center justify-center rounded-full p-4 shadow-lg"
          >
            <FlaskConical size={32} className="text-white" />
          </m.div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </m.div>

        {/* Laboratory Image */}
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80"
            alt="Laboratory Testing"
            className="h-64 w-full object-cover"
          />
        </m.div>

        {/* Test Results Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {tests.map((test, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br group relative overflow-hidden rounded-xl from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Gradient Border Effect */}
              <div className="bg-linear-to-r from-primary to-secondary absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-[2px] rounded-xl bg-white"></div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-linear-to-br from-primary to-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg shadow-md">
                  {index === 0 ? (
                    <CheckCircle className="h-5 w-5 text-white" />
                  ) : index === 1 ? (
                    <Award className="h-5 w-5 text-white" />
                  ) : index === 2 ? (
                    <FlaskConical className="h-5 w-5 text-white" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-white" />
                  )}
                </div>
                <p className="font-medium text-gray-700">{test}</p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Certification Badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-linear-to-r from-primary/10 to-secondary/10 inline-flex items-center gap-3 rounded-full px-6 py-3">
            <Award className="text-secondary h-6 w-6" />
            <span className="font-semibold text-gray-900">
              {t("certifiedBy")}
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
