"use client";

import { Award, CheckCircle2, Globe } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("IndexPage.about");

  const advantages = [
    t("advantage1"),
    t("advantage2"),
    t("advantage3"),
    t("advantage4")
  ];

  const patents = [
    t("country1"),
    t("country2"),
    t("country3"),
    t("country4"),
    t("country5")
  ];

  return (
    <section
      id="about"
      className="bg-linear-to-br relative overflow-hidden from-gray-50 via-white to-orange-50/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <div className="mx-auto max-w-4xl space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              {t("description")}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {t("applications")}
            </p>
          </div>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Image + {t("keyAdvantages")} */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Technology Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <ExportedImage
                src="/images/technology.jpeg"
                alt="Nanofiber Technology"
                className="h-64 w-full object-cover"
                width={800}
                height={256}
              />
              <div className="bg-linear-to-t absolute inset-0 from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 start-4 text-white">
                <div className="flex items-center gap-2">
                  <Award size={24} />
                  <span className="text-lg font-bold">
                    {t("advancedMaterialScience")}
                  </span>
                </div>
              </div>
            </div>

            {/* {t("keyAdvantages")} Card */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-linear-to-br from-primary to-accent flex h-12 w-12 items-center justify-center rounded-xl">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("keyAdvantages")}
                </h3>
              </div>
              <ul className="space-y-4">
                {advantages.map((item, i) => (
                  <m.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-linear-to-r from-primary to-secondary mt-1 h-2 w-2 shrink-0 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </m.li>
                ))}
              </ul>
            </div>
          </m.div>

          {/* Right: Image + Global Patents */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Manufacturing Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <ExportedImage
                src="/images/manufacturing.jpeg"
                alt="Manufacturing Process"
                className="h-64 w-full object-cover"
                width={800}
                height={256}
              />
              <div className="bg-linear-to-t absolute inset-0 from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 start-4 text-white">
                <div className="flex items-center gap-2">
                  <Globe size={24} />
                  <span className="text-lg font-bold">
                    {t("globalManufacturing")}
                  </span>
                </div>
              </div>
            </div>

            {/* Global Patents Card */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-linear-to-br from-secondary flex h-12 w-12 items-center justify-center rounded-xl to-[#C13845]">
                  <Globe size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("globalPatents")}
                </h3>
              </div>
              <ul className="space-y-4">
                {patents.map((country, i) => (
                  <m.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-linear-to-r from-secondary to-primary mt-1 h-2 w-2 shrink-0 rounded-full"></div>
                    <span className="text-gray-700">{country}</span>
                  </m.li>
                ))}
              </ul>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
