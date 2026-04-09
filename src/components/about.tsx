"use client";

import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import About from "./about/About";
import PanelControl from "./about/PanelControl";
import Skill from "./about/Skill";

export function AboutSection() {

  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="snap-start min-h-screen scroll-mt-16 lg:scroll-mt-24"
      aria-label={t("title")}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <PanelControl/>
          <About/>
        </div>
        <Skill/>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <StatCard
            icon="mdi:code-tags"
            value="4"
            title={t("card1.title")}
            description={t("card1.description")}
          />

          <StatCard
            icon="mdi:certificate-outline"
            value="2"
            title={t("card2.title")}
            description={t("card2.description")}
          />

          <StatCard
            icon="mdi:earth"
            value="3"
            title={t("card3.title")}
            description={t("card3.description")}
          />

        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  title,
  description,
}: {
  icon: string;
  value: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition">

      <div className="flex justify-between items-center">
        <Icon icon={icon} className="text-primary text-xl" />

        <span className="text-3xl font-bold">
          {value}
        </span>
      </div>

      <h4 className="mt-3 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
        {title}
      </h4>

      <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
        <span>{description}</span>

        <a href="#" className="border border-gray-500 rounded-xs p-1 text-primary group-hover:cursor-pointer group-hover:bg-gray-500/10 transition">
          <Icon icon="mdi:arrow-top-right"/>
        </a>
      </div>

    </div>
  );
}