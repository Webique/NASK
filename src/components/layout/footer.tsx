"use client";

import { Mail, MapPin, Phone } from "lucide-react";
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
    { label: t("myservices"), href: "#services" },
    { label: t("myportfolio"), href: "#portfolio" }
  ];

  const services = [
    { label: t("marketing"), href: "#services" },
    { label: t("development"), href: "#services" },
    { label: t("consulting"), href: "#services" }
  ];

  return (
    <footer className="border-border/50 relative border-t bg-[#1A1F26] text-gray-100">
      {/* Elegant decorative top accent */}
      <div className="via-primary/40 bg-linear-to-r absolute start-0 top-0 h-[2px] w-full from-transparent to-transparent" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="pattern-grid h-full w-full" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Logo
              imgClassName="w-44 lg:w-52 brightness-0 invert"
              className="mb-8"
              width={240}
              height={45}
            />
            <p className="mb-8 max-w-sm text-base leading-relaxed text-gray-400">
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
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary group inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="mr-2 opacity-0 transition-all group-hover:mr-3 group-hover:opacity-100">
                      →
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/70 hover:text-primary group inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="mr-2 opacity-0 transition-all group-hover:mr-3 group-hover:opacity-100">
                      →
                    </span>
                    {service.label}
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
            className="lg:col-span-4"
          >
            <h3 className="text-secondary-foreground mb-6 text-sm font-bold uppercase tracking-wider">
              {t("contactme")}
            </h3>
            <div className="space-y-4">
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                whileHover={{ x: 4 }}
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 ring-primary/20 group-hover:ring-primary/40 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300">
                  <Phone className="text-primary h-5 w-5 transition-colors" />
                </div>
                <div>
                  <div className="text-secondary-foreground/60 text-xs font-medium uppercase tracking-wide">
                    {t("phone")}
                  </div>
                  <div
                    className="text-secondary-foreground group-hover:text-primary text-base font-semibold transition-colors"
                    dir="ltr"
                  >
                    {siteConfig.support.phone}
                  </div>
                </div>
              </m.a>

              <m.a
                href={`mailto:${siteConfig.support.email}`}
                className="group flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 ring-primary/20 group-hover:ring-primary/40 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300">
                  <Mail className="text-primary h-5 w-5 transition-colors" />
                </div>
                <div>
                  <div className="text-secondary-foreground/60 text-xs font-medium uppercase tracking-wide">
                    {t("email")}
                  </div>
                  <div className="text-secondary-foreground group-hover:text-primary text-base font-semibold transition-colors">
                    {siteConfig.support.email}
                  </div>
                </div>
              </m.a>

              <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <div className="bg-primary/20 ring-primary/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="text-secondary-foreground/60 text-xs font-medium uppercase tracking-wide">
                    {t("location")}
                  </div>
                  <div className="text-secondary-foreground text-base font-semibold">
                    {t("saudiArabia")}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-gray-400">
              {t("copyright", { year: currentYear })}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-primary">●</span>
              <span>{t("gacaCertified")}</span>
            </div>
          </div>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
