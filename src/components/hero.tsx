"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { TypewriterRole } from "./ui/TypeWriteRole";

const technologies = [
  { name: "React", icon: "vscode-icons:file-type-reactjs" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "TypeScript", icon: "vscode-icons:file-type-typescript-official" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Nest.js", icon: "logos:nestjs" },
];

function TechList() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
      {technologies.map((tech) => (
        <li key={tech.name}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Icon icon={tech.icon} className="h-4 w-4" aria-hidden="true" />
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
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
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={`
          relative flex items-center justify-center
          w-12 h-12
          rounded-xl
          bg-background/60 backdrop-blur-md
          border border-primary/20
          shadow-md
          transition-all duration-300
          hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]
          hover:-translate-y-1
          hover:scale-105
          ${color}
        `}
      >
        {icon}
      </a>
    </li>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="lg:flex lg:justify-between lg:gap-10"
      aria-label="Hero"
    >
      <div className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-20">
        <div>
          <p className="text-primary text-sm font-semibold tracking-wide">
            {t("greeting")}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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
          </h1>

          <h2 className="mt-4 text-lg font-semibold tracking-tight text-primary sm:text-xl">
            <TypewriterRole text={t("role")} />
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            {t("description")}
          </p>

          <TechList />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Santos_Machaca_Lopez_CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]"
            >
              {t("actions.cv")}
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/40 hover:shadow-[0_0_20px_rgba(56,120,255,0.35)]"
            >
              {t("actions.about")}
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-4" aria-label="Redes sociales">
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
          </ul>
        </div>
      </div>
      <div
        id="profile"
        className="lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:py-24 pt-10"
      >
        <div className="mx-auto w-56 sm:w-72 lg:w-80">
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
        </div>
      </div>
    </section>
  );
}
