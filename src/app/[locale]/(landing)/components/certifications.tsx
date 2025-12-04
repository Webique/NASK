"use client";

import { Droplet, Heart, Leaf, Shield, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function Certifications() {
  const t = useTranslations("IndexPage.certifications");

  const certs = [
    { text: t("cert1"), icon: Heart },
    { text: t("cert2"), icon: Shield },
    { text: t("cert3"), icon: Droplet },
    { text: t("cert4"), icon: Sparkles },
    { text: t("cert5"), icon: Leaf }
  ];

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-gray-50 via-white to-orange-50/30 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENTQyNEYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/10 absolute start-20 top-20 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-secondary/10 absolute bottom-20 end-20 h-96 w-96 rounded-full opacity-50 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <p className="mb-8 text-xl text-gray-600">{t("subtitle")}</p>
        </m.div>

        {/* Certifications Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Gradient Border on Hover */}
                <div className="bg-linear-to-r from-primary to-secondary absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-[2px] rounded-xl bg-white"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="bg-linear-to-br from-primary to-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">{cert.text}</p>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Versatility Banner */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linear-to-r from-primary to-secondary relative overflow-hidden rounded-2xl p-8 text-center shadow-2xl md:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <ExportedImage
              src="/images/certifications-pattern.jpeg"
              alt=""
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="relative z-10">
            <Sparkles className="mx-auto mb-4 h-12 w-12 text-white" />
            <p className="text-lg leading-relaxed text-white md:text-xl">
              {t("versatility")}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
