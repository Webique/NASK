"use client";

import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export default function Products() {
  const t = useTranslations("IndexPage.products");

  const products = [
    {
      id: 1,
      title: t("product1.title"),
      description: t("product1.description"),
      image: "/images/products/1.jpg",
      features: [
        t("product1.feature1"),
        t("product1.feature2"),
        t("product1.feature3"),
        t("product1.feature4")
      ],
      icon: Shield
    },
    {
      id: 2,
      title: t("product2.title"),
      description: t("product2.description"),
      image: "/images/products/2.jpg",
      features: [
        t("product2.feature1"),
        t("product2.feature2"),
        t("product2.feature3"),
        t("product2.feature4")
      ],
      icon: Zap
    },
    {
      id: 3,
      title: t("product3.title"),
      description: t("product3.description"),
      image: "/images/products/3.jpg",
      features: [
        t("product3.feature1"),
        t("product3.feature2"),
        t("product3.feature3"),
        t("product3.feature4")
      ],
      icon: Leaf
    }
  ];

  const whyChoose = [
    { icon: Shield, label: t("whyChoose.patented") },
    { icon: Zap, label: t("whyChoose.verified") },
    { icon: ArrowRight, label: t("whyChoose.scalable") },
    { icon: Leaf, label: t("whyChoose.customization") }
  ];

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-white to-gray-50 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <ExportedImage
          src="/images/features-bg.jpeg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Animated Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob bg-primary/5 absolute left-0 top-1/3 h-96 w-96 rounded-full opacity-40 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 animate-blob bg-secondary/5 absolute bottom-1/3 right-0 h-96 w-96 rounded-full opacity-40 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              <Shield size={40} className="text-white" />
            </div>
          </m.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            {t("subtitle")}
          </p>
        </m.div>

        {/* Products Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <m.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradient Border on Hover */}
                  <div className="bg-linear-to-r from-primary to-secondary absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-[2px] rounded-2xl bg-white" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <ExportedImage
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="bg-linear-to-t absolute inset-0 from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      {/* Icon */}
                      <div className="bg-linear-to-br from-primary to-secondary mb-4 flex h-12 w-12 items-center justify-center rounded-lg shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-xl font-bold text-gray-900">
                        {product.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="mb-6 space-y-2">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <span className="text-primary mt-0.5 font-bold">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Why Choose NASK */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 border-t border-gray-200 pt-20"
        >
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t("whyChoose.title")}
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {t("whyChoose.subtitle")}
            </p>
          </div>

          {/* Why Choose Grid */}
          <div className="grid gap-6 md:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-center"
                >
                  <div className="bg-linear-to-br from-primary/10 to-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon
                      className={cn(
                        "text-primary h-8 w-8",
                        index === 2 && "rtl:rotate-180"
                      )}
                    />
                  </div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                </m.div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
