"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { type Locale, type Messages } from "@/lib/i18n";

interface NavigationProps {
  lang: Locale;
  messages: Messages;
}

export function Navigation({ lang, messages }: NavigationProps) {
  const isDefaultLang = lang === "zh";
  const basePath = isDefaultLang ? "" : `/${lang}`;

  const navItems = [
    { href: `${basePath}/`, label: messages.nav.home },
    { href: `${basePath}/contact`, label: messages.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200 dark:bg-neutral-950/95 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${basePath}/`} className="flex items-center gap-2">
            <img 
              src="/img/logo_c.webp" 
              alt="nxtcorex" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              nxtcorex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
              >
                {item.label}
              </Link>
            ))}
            <ThemeSwitcher />
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher lang={lang} />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-neutral-900 dark:text-neutral-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}