"use client";

import { Heart } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("IndexPage.mission");

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-white via-orange-50/30 to-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNFRkExMzgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Icon */}
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-primary to-accent mb-6 inline-flex items-center justify-center rounded-full p-4 shadow-lg"
          >
            <Heart size={32} className="text-white" />
          </m.div>

          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("title")}
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            {t("description")}
          </p>

          {/* Decorative Line */}
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-primary to-secondary mx-auto mt-8 h-1 w-24 rounded-full"
          ></m.div>
        </m.div>
      </div>
    </section>
  );
}
