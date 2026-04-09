"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { TypewriterRole } from "./ui/TypeWriteRole";
import { motion } from "framer-motion";

import { easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const technologies = [
  { name: "React", icon: "vscode-icons:file-type-reactjs" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Nest.js", icon: "logos:nestjs" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

function TechList() {
  return (
    <motion.ul
      className="mt-6 flex flex-wrap gap-2"
      aria-label="Tecnologías"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {technologies.map((tech) => (
        <motion.li key={tech.name} variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Icon icon={tech.icon} className="h-4 w-4" aria-hidden="true" />
            {tech.name}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function SocialLink({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <motion.li variants={fadeUp}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        whileHover={{ y: -4, scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className={`
          relative flex items-center justify-center
          w-12 h-12 rounded-xl
          bg-background/60 backdrop-blur-md
          border border-primary/20
          shadow-md
          hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]
          ${color}
        `}
      >
        {icon}
      </motion.a>
    </motion.li>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="snap-start min-h-screen scroll-mt-16 lg:scroll-mt-24"
      aria-label={t('title')}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <div
          className="lg:flex lg:justify-between lg:gap-10"
        >
          <div className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-20">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <motion.p
                className="text-primary text-sm font-semibold tracking-wide"
                variants={fadeUp}
              >
                {t("greeting")}
              </motion.p>

              <motion.h1
                className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                variants={fadeUp}
              >
                <span
                  className="
                relative inline-block text-balance
                bg-[length:200%_200%]
                bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-400
                bg-clip-text text-transparent
                animate-lava
                drop-shadow-[0_0_8px_rgba(56,120,255,0.55)]
              "
                >
                  Santos Machaca Lopez
                </span>
              </motion.h1>

              <motion.h2
                className="mt-4 text-lg font-semibold tracking-tight text-primary sm:text-xl"
                variants={fadeUp}
              >
                <TypewriterRole text={t("role")} />
              </motion.h2>

              <motion.p
                className="mt-4 max-w-md leading-relaxed text-muted-foreground"
                variants={fadeUp}
              >
                {t("description")}
              </motion.p>

              <TechList />

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3"
                variants={fadeUp}
              >
                <motion.a
                  href="/Santos_Machaca_Lopez_CV.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]"
                >
                  {t("actions.cv")}
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]"
                >
                  {t("actions.about")}
                </motion.a>
              </motion.div>

              <motion.ul
                className="mt-8 flex items-center gap-4"
                aria-label="Redes sociales"
                variants={stagger}
              >
                <SocialLink
                  href="https://github.com"
                  icon={<Icon icon="mdi:github" className="h-7 w-7" aria-hidden="true" />}
                  label="GitHub"
                  color="text-foreground/80 hover:text-foreground"
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={<Icon icon="mdi:linkedin" className="h-7 w-7" aria-hidden="true" />}
                  label="LinkedIn"
                  color="text-blue-500 hover:text-blue-600"
                />
                <SocialLink
                  href="https://twitter.com"
                  icon={<Icon icon="mdi:twitter" className="h-7 w-7" aria-hidden="true" />}
                  label="Twitter"
                  color="text-sky-500 hover:text-sky-600"
                />
                <SocialLink
                  href="mailto:correo@ejemplo.com"
                  icon={<Icon icon="mdi:email-outline" className="h-7 w-7" aria-hidden="true" />}
                  label="Email"
                  color="text-red-500 hover:text-red-600"
                />
              </motion.ul>
            </motion.div>
          </div>

          <div
            id="profile"
            className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:py-24 pt-10"
          >
            <motion.div
              className="mx-auto w-56 sm:w-72 lg:w-80"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative aspect-square overflow-hidden rounded-full border border-primary/15 shadow-lg">
                <Image
                  src="/profile.png"
                  alt="Foto de perfil de Santos Machaca Lopez"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
