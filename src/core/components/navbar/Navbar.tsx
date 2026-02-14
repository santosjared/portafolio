"use client";

import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import ModeToggler from "./ModeToggler";
import LanguageDropdown from "./LanguageDropdown";

const navIds = ["home", "about", "experience", "projects", "contact"];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const t = useTranslations("nav");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) return <div className="h-16" />;

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
    )}>
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="text-2xl md:text-3xl font-extrabold tracking-tighter transition-transform"
        >
          <span className="text-blue-500">S</span>antos
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navIds.map((id) => (
          <button
  key={id}
  onClick={() => handleNavClick(id)}
  className={cn(
    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
    "text-muted-foreground hover:text-foreground hover:cursor-pointer",
    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full",
    "after:origin-left after:scale-x-0 after:bg-blue-600",
    "after:transition-transform after:duration-300",
    activeId === id
      ? "text-foreground after:scale-x-100"
      : "hover:after:scale-x-100"
  )}
>
  {t(id)}
</button>

          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <ModeToggler />

          <Button
            variant="ghost" size="icon" className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Icon icon="lucide:x" className="h-5 w-5" /> : <Icon icon="lucide:menu" className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden p-4 bg-background border-t flex flex-col gap-2">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-left px-4 py-3 text-sm hover:bg-secondary rounded-md"
            >
              {t(id)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}