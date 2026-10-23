"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FolderGit2, House, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import { type Locale, type Messages } from "@/lib/i18n";

interface NavigationProps {
  lang: Locale;
  messages: Messages;
}

export function Navigation({ lang, messages }: NavigationProps) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);
  const basePath = lang === "zh" ? "" : `/${lang}`;

  const navItems = [
    { href: `${basePath}/`, label: messages.nav.home, icon: House },
    {
      href: `${basePath}/projects`,
      label: messages.nav.projects,
      icon: FolderGit2,
    },
    { href: `${basePath}/contact`, label: messages.nav.contact, icon: Mail },
  ];

  const isActive = (href: string) =>
    href === `${basePath}/`
      ? pathname === `${basePath}/` || pathname === `${basePath}`
      : pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-6">
          <Link href={`${basePath}/`} className="flex shrink-0 items-center space-x-2">
            <img
              src="/img/logo_c.webp"
              alt="nxtcorex"
              className="h-6 w-6 rounded object-contain"
            />
            <span className="text-lg font-bold">nxtcorex</span>
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center space-x-1">
          <ThemeSwitcher />
          <LanguageSwitcher lang={lang} />
          <Button
            variant="ghost"
            size="icon"
            className="border md:hidden"
            onClick={() => setSheetOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="left" className="flex flex-col">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center gap-2">
              <img
                src="/img/logo_c.webp"
                alt=""
                className="h-6 w-6 rounded object-contain"
              />
              nxtcorex
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSheetOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                  isActive(item.href) && "bg-muted text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
