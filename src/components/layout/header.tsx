"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.myservices"), href: "#services" },
    { label: t("nav.myportfolio"), href: "#portfolio" },
    { label: t("nav.contactme"), href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "bg-background/98 border-border/50 fixed inset-x-0 top-0 z-50 border-b shadow-lg shadow-black/5 backdrop-blur-2xl transition-all duration-500 lg:border-none",
        isScrolled
          ? "lg:bg-background/90 lg:border-border/50 lg:border-b lg:shadow-xl lg:shadow-black/10 lg:backdrop-blur-2xl"
          : "lg:bg-transparent lg:shadow-none lg:backdrop-blur-md"
      )}
    >
      {/* Elegant top accent line */}
      <div className="via-primary/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex h-full items-center gap-3"
          >
            <Logo />
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-2 text-base font-medium text-white transition-all duration-300",
                    "hover:text-primary",
                    "before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 rtl:before:right-1/2",
                    "before:from-primary before:to-primary/60 before:bg-gradient-to-r",
                    "before:-translate-x-1/2 before:transition-all before:duration-300 rtl:before:translate-x-1/2",
                    "hover:before:w-3/4",
                    "after:bg-primary/5 after:absolute after:inset-0 after:rounded-lg",
                    "after:opacity-0 after:transition-opacity after:duration-300",
                    "hover:after:opacity-100"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA  */}
          <m.div
            className="hidden items-center space-x-3 lg:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={isScrolled} />

            <div className="flex items-center">
              <Button
                className="ring-primary/20 shadow-primary/30 hover:shadow-primary/40 group h-auto gap-2 rounded-full px-8 py-4 text-base font-bold shadow-md ring-2 transition-all duration-300 hover:scale-105 hover:shadow-lg has-[>svg]:px-8 lg:flex"
                asChild
              >
                <Link
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  {t("cta")}
                </Link>
              </Button>
            </div>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center"
            >
              <LocaleSwitcher className="w-auto" isTop={false} />

              <button
                className="text-foreground hover:bg-muted rounded-md p-2 transition-all duration-300 hover:scale-105"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                </div>
              </button>
            </m.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="border-border/50 space-y-2 border-t py-4">
            <div className="space-y-2 px-4">
              {navItems.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:text-primary hover:bg-primary/10 focus:ring-primary group relative block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="from-primary/5 absolute inset-0 rounded-lg bg-gradient-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </m.div>
              ))}

              {/* CTA in Mobile Menu */}
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border-border/50 border-t pt-4"
              >
                <Button
                  className="bg-primary ring-primary/20 h-auto w-full items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-xl ring-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl has-[>svg]:px-6"
                  asChild
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={siteConfig.links.whatsapp}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="size-4" />
                    {t("cta")}
                  </a>
                </Button>
              </m.div>
            </div>
          </nav>
        </m.div>
      </div>
    </header>
  );
}
