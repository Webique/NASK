"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("IndexPage.contact");

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </m.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Email 1 */}
            <m.a
              href={`mailto:${t("email1")}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br group flex items-start gap-4 rounded-xl from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-linear-to-br from-primary to-accent flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-md transition-transform group-hover:scale-110">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("primaryEmail")}
                </h3>
                <p className="text-primary hover:text-accent font-medium">
                  {t("email1")}
                </p>
              </div>
            </m.a>

            {/* Email 2 */}
            <m.a
              href={`mailto:${t("email2")}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br group flex items-start gap-4 rounded-xl from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-linear-to-br from-secondary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl to-[#C13845] shadow-md transition-transform group-hover:scale-110">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("secondaryEmail")}
                </h3>
                <p className="text-secondary font-medium hover:text-[#C13845]">
                  {t("email2")}
                </p>
              </div>
            </m.a>

            {/* Phone */}
            <m.a
              href={`tel:${t("phone").replace(/\s/g, "")}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br group flex items-start gap-4 rounded-xl from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-linear-to-br from-primary to-secondary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-md transition-transform group-hover:scale-110">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("phoneLabel")}
                </h3>
                <p className="text-primary hover:text-accent font-medium">
                  {t("phone")}
                </p>
              </div>
            </m.a>
          </div>

          {/* Contact Image */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <ExportedImage
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
              alt={t("imageAlt")}
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
            <div className="bg-linear-to-t absolute inset-0 from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="mb-4 flex items-center gap-2">
                <MapPin size={24} />
                <span className="text-lg font-bold">{t("globalReach")}</span>
              </div>
              <p className="text-sm opacity-90">{t("globalReachDesc")}</p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
