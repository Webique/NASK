"use client";

import { Award, Globe, Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("myservices"), href: "#technology" },
    { label: t("contactme"), href: "#contact" }
  ];

  const solutions = [
    { label: t("marketing"), href: "#about" },
    { label: t("development"), href: "#technology" },
    { label: t("consulting"), href: "#contact" }
  ];

  return (
    <footer className="bg-linear-to-b relative from-gray-900 via-gray-900 to-black text-gray-100">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(193,56,69,0.1),transparent_50%)]" />
      </div>

      {/* Decorative top border */}
      <div className="via-primary bg-linear-to-r absolute start-0 top-0 h-1 w-full from-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info - Larger Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Logo
              src="/images/logo2.png"
              imgClassName="h-10 w-auto lg:h-12"
              className="mb-6"
              width={160}
              height={160}
            />
            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-300">
              {t("companyDescription")}
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-400">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary group inline-flex items-center text-sm text-gray-300 transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Solutions */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-400">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.label}>
                  <a
                    href={solution.href}
                    className="hover:text-primary group inline-flex items-center text-sm text-gray-300 transition-all duration-300 hover:translate-x-1"
                  >
                    {solution.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-400">
              {t("contactUs")}
            </h3>
            <div className="space-y-3">
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                className="hover:text-primary group flex items-center gap-3 text-sm text-gray-300 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="bg-primary/10 ring-primary/20 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all">
                  <Phone className="text-primary h-4 w-4" />
                </div>
                <div dir="ltr">{siteConfig.support.phone}</div>
              </m.a>

              <m.a
                href={`mailto:${siteConfig.support.email}`}
                className="hover:text-primary group flex items-center gap-3 text-sm text-gray-300 transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="bg-primary/10 ring-primary/20 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all">
                  <Mail className="text-primary h-4 w-4" />
                </div>
                <div className="break-all">{siteConfig.support.email}</div>
              </m.a>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-primary/10 ring-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1">
                  <MapPin className="text-primary h-4 w-4" />
                </div>
                <div>{t("saudiArabia")}</div>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-primary/10 ring-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1">
                  <Globe className="text-primary h-4 w-4" />
                </div>
                <div>{t("globalReach")}</div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
              <p className="text-sm text-gray-400">
                {t("copyright", { year: currentYear })}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="text-primary h-4 w-4" />
                <span>{t("gacaCertified")}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{t("poweredBy")}</span>
              <span className="text-primary font-semibold">
                {t("advancedNanofiber")}
              </span>
            </div>
          </div>
        </m.div>
      </div>

      {/* Bottom gradient accent */}
      <div className="bg-linear-to-r via-primary/50 absolute bottom-0 start-0 h-px w-full from-transparent to-transparent" />
    </footer>
  );
};

export default Footer;
