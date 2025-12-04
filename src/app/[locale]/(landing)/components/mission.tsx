"use client";

import { Heart, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("IndexPage.mission");

  return (
    <section className="bg-linear-to-br relative overflow-hidden from-white via-orange-50/20 to-white py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/5 absolute -left-4 top-20 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-secondary/5 absolute -right-4 bottom-20 h-72 w-72 rounded-full blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNFRkExMzgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Floating Icon with Glow */}
          <m.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="relative mb-8 inline-block"
          >
            <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-xl" />
            <div className="bg-linear-to-br from-primary to-accent ring-primary/10 relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl ring-4">
              <Heart size={40} className="text-white" />
            </div>
            <m.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-2 -top-2"
            >
              <Sparkles className="text-primary h-6 w-6" />
            </m.div>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </m.h2>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="text-primary/20 absolute -left-4 top-0 font-serif text-6xl">
              &ldquo;
            </div>
            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              {t("description")}
            </p>
            <div className="text-primary/20 absolute -bottom-8 -right-4 font-serif text-6xl">
              &rdquo;
            </div>
          </m.div>

          {/* Decorative Elements */}
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 flex items-center justify-center gap-3"
          >
            <div className="to-primary bg-linear-to-r h-px w-16 from-transparent" />
            <div className="bg-primary h-2 w-2 rounded-full" />
            <div className="bg-linear-to-r from-primary to-secondary h-1 w-24 rounded-full" />
            <div className="bg-secondary h-2 w-2 rounded-full" />
            <div className="to-secondary bg-linear-to-l h-px w-16 from-transparent" />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
