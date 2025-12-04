"use client";

import { Linkedin, Mail } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

export default function Team() {
  const t = useTranslations("IndexPage.team");

  const team = [
    {
      name: t("member1.name"),
      role: t("member1.role"),
      bio: t("member1.bio"),
      email: "member1@nask.com"
    },
    {
      name: t("member2.name"),
      role: t("member2.role"),
      bio: t("member2.bio"),
      email: "member2@nask.com"
    },
    {
      name: t("member3.name"),
      role: t("member3.role"),
      bio: t("member3.bio"),
      email: "member3@nask.com"
    }
  ];

  return (
    <section id="team" className="relative overflow-hidden bg-gray-50 py-20">
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
          {team.map((member, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="bg-linear-to-br from-primary to-secondary mb-4 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary mb-4 font-semibold">{member.role}</p>
                <p className="mb-6 text-gray-600">{member.bio}</p>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-linear-to-r from-primary to-secondary flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-linear-to-r from-secondary to-primary flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
