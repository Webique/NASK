"use client";

import { Globe, Mail, Phone, Send } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("IndexPage.contact");

  const contactMethods = [
    {
      icon: Mail,
      title: t("primaryEmail"),
      value: t("email1"),
      href: `mailto:${t("email1")}`,
      delay: 0.1
    },
    {
      icon: Mail,
      title: t("secondaryEmail"),
      value: t("email2"),
      href: `mailto:${t("email2")}`,
      delay: 0.2
    },
    {
      icon: Phone,
      title: t("phoneLabel"),
      value: t("phone"),
      href: `tel:${t("phone").replace(/\s/g, "")}`,
      delay: 0.3
    }
  ];

  return (
    <section
      id="contact"
      className="bg-linear-to-br relative overflow-hidden from-gray-50 via-white to-orange-50/30 py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <ExportedImage
          src="/images/contact-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/10 absolute left-0 top-1/3 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-secondary/10 absolute bottom-1/3 right-0 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-8 inline-block"
          >
            <div className="from-primary to-secondary ring-primary/10 bg-linear-to-br relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl ring-4">
              <Send size={40} className="text-white" />
            </div>
          </m.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <m.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: method.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative block"
                >
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Gradient Border on Hover */}
                    <div className="bg-linear-to-r from-primary to-secondary absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-[2px] rounded-2xl bg-white" />

                    {/* Content */}
                    <div className="relative z-10 flex items-start gap-5">
                      {/* Icon */}
                      <div className="bg-linear-to-br from-primary to-secondary flex h-16 w-16 shrink-0 items-center justify-center rounded-xl shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                          {method.title}
                        </h3>
                        <p
                          className="group-hover:text-primary inline font-semibold text-gray-700 transition-colors"
                          dir={method.icon === Phone ? "ltr" : undefined}
                        >
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </m.a>
              );
            })}
          </div>

          {/* Contact Image with Info Overlay */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/5">
              <ExportedImage
                src="/images/contact.jpeg"
                alt={t("imageAlt")}
                className="h-full w-full object-cover"
                width={800}
                height={600}
              />
              <div className="bg-linear-to-t absolute inset-0 from-black/70 via-black/30 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                    <Globe className="h-5 w-5 text-white" />
                    <span className="text-sm font-bold text-white">
                      {t("globalReach")}
                    </span>
                  </div>
                </m.div>

                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-lg font-medium text-white/95"
                >
                  {t("globalReachDesc")}
                </m.p>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
