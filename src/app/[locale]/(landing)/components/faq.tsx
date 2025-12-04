"use client";

import { ChevronDown } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQ() {
  const t = useTranslations("IndexPage.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("question1"),
      answer: t("answer1")
    },
    {
      question: t("question2"),
      answer: t("answer2")
    },
    {
      question: t("question3"),
      answer: t("answer3")
    },
    {
      question: t("question4"),
      answer: t("answer4")
    },
    {
      question: t("question5"),
      answer: t("answer5")
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
          <p className="text-lg text-gray-700">{t("subtitle")}</p>
        </m.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-8 text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary h-6 w-6 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <m.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-100 p-6 pt-4">
                  <p className="leading-relaxed text-gray-700">{faq.answer}</p>
                </div>
              </m.div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
