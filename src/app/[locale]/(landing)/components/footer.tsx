"use client";

import { Award, Mail, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const year = new Date().getFullYear();

  const navItems = [
    { label: t("home"), href: `/${locale}` },
    { label: t("about"), href: `/${locale}#about` },
    { label: t("myservices"), href: `/${locale}#technology` },
    { label: t("contactme"), href: `/${locale}#contact` }
  ];

  return (
    <footer className="bg-linear-to-br relative overflow-hidden from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNFRkExMzgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="bg-linear-to-r from-primary to-secondary mb-4 bg-clip-text text-2xl font-bold text-transparent">
              {t("brandName")}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("companyDescription")}
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary group flex items-center text-sm text-gray-400 transition-colors"
                  >
                    <span className="bg-primary me-2 h-1 w-1 rounded-full opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("contactme")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <a
                    href="mailto:monzer@sarabeelmedical.com"
                    className="hover:text-primary transition-colors"
                  >
                    monzer@sarabeelmedical.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="text-secondary mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <a
                    href="tel:+966568081744"
                    className="hover:text-secondary transition-colors"
                  >
                    +966 56 808 1744
                  </a>
                </div>
              </li>
            </ul>
          </m.div>

          {/* Certification */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">
              Certifications
            </h4>
            <div className="flex items-start gap-2">
              <Award className="text-primary mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-white">
                  Internationally Patented
                </p>
                <p className="text-xs text-gray-400">
                  China, USA, Japan, Europe, Hong Kong
                </p>
              </div>
            </div>
          </m.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <p className="text-center text-sm text-gray-400">
              {t("copyright", { year })}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{t("poweredBy")}</span>
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text font-semibold text-transparent">
                {t("advancedNanofiber")}
              </span>
            </div>
          </m.div>
        </div>
      </div>
    </footer>
  );
}
