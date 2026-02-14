import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/core/providers/ThemeProvider";
import { Navbar } from "@/core/components/navbar/Navbar";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "@/app/globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santos Machaca Lopez | Desarrollador Full Stack",
  description:
    `Fullstack Developer especialista en el ecosistema JavaScript/TypeScript (React, Next.js y NestJS) 
    con dominio avanzado en maquetación HTML5/CSS3. Mi experiencia como Auxiliar de Docencia por 2 años me ha otorgado sólidas 
    capacidades en liderazgo técnico y documentación. Poseo conocimientos básicos en Python, Java y Flutter, permitiéndome 
    abordar proyectos integrales con visión de ingeniería.`,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) 
{
  const {locale} = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  
  return (
    <html lang={locale} suppressHydrationWarning> 
      <body className={`${_geist.style} ${_geistMono.style} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem = {false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
