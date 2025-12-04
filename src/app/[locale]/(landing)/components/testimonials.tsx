"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("IndexPage.testimonials");

  const testimonials = [
    {
      quote: t("testimonial1.quote"),
      author: t("testimonial1.author"),
      company: t("testimonial1.company"),
      rating: 5
    },
    {
      quote: t("testimonial2.quote"),
      author: t("testimonial2.author"),
      company: t("testimonial2.company"),
      rating: 5
    },
    {
      quote: t("testimonial3.quote"),
      author: t("testimonial3.author"),
      company: t("testimonial3.company"),
      rating: 5
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            {t("subtitle")}
          </p>
        </m.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br group relative overflow-hidden rounded-2xl from-gray-50 to-orange-50/30 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-linear-to-br from-primary/5 to-secondary/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <Quote className="text-primary mb-4 h-10 w-10 opacity-50" />

                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-5 w-5"
                    />
                  ))}
                </div>

                <p className="mb-6 italic text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="border-primary border-t pt-4">
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
