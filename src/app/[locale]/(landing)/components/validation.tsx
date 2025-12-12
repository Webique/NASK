"use client";

import { Award, CheckCircle, FlaskConical, Shield } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Validation() {
  const t = useTranslations("IndexPage.validation");

  const tests = [
    { text: t("test1"), icon: CheckCircle },
    { text: t("test2"), icon: Award },
    { text: t("test3"), icon: Shield },
    { text: t("test4"), icon: FlaskConical }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <ExportedImage
          src="/images/validation-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/10 absolute left-0 top-1/4 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-secondary/10 absolute bottom-1/4 right-0 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          {/* Animated Icon */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-8 inline-block"
          >
            <div className="from-primary to-secondary ring-primary/10 bg-linear-to-br relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl ring-4">
              <FlaskConical size={40} className="text-white" />
            </div>
          </m.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Laboratory Image */}
        {/* <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5"
        >
          <div className="relative">
            <ExportedImage
              src="/images/validation.jpeg"
              alt="Laboratory Testing"
              className="h-80 w-full object-cover"
              width={1200}
              height={320}
            />
            <div className="bg-linear-to-t absolute inset-0 from-black/40 via-transparent to-transparent" />
          </div>
        </m.div> */}

        {/* Test Results Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {tests.map((test, index) => {
            const Icon = test.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                {/* Card with vertical layout */}
                <div className="bg-linear-to-br relative h-full overflow-hidden rounded-2xl from-white to-gray-50 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                  {/* Accent line on left */}
                  <div className="bg-linear-to-b from-primary to-secondary absolute inset-y-0 left-0 w-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-start gap-4">
                    {/* Icon */}
                    <div className="bg-linear-to-br from-primary to-secondary flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Text */}
                    <p className="text-lg font-semibold leading-relaxed text-gray-800">
                      {test.text}
                    </p>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom Certification Badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="from-primary/10 to-secondary/10 ring-primary/20 bg-linear-to-r inline-flex items-center gap-3 rounded-full px-8 py-4 ring-2">
            <Award className="text-secondary h-7 w-7" />
            <span className="text-lg font-bold text-gray-900">
              {t("certifiedBy")}
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
