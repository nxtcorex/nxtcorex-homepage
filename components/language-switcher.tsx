"use client";

import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, type Locale } from "@/lib/i18n";

const languageNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

function pathForLocale(pathname: string, locale: Locale) {
  const base = pathname.replace(/\/+$/, "") || "/";
  const stripped = base === "/en" ? "/" : base.replace(/^\/en/, "") || "/";
  const target =
    locale === "zh" ? stripped : stripped === "/" ? "/en" : `/en${stripped}`;
  return target.endsWith("/") ? target : `${target}/`;
}

interface LanguageSwitcherProps {
  lang: Locale;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title={languageNames[lang]}
        className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg bg-transparent text-foreground outline-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-expanded:bg-muted aria-expanded:text-foreground"
      >
        <Languages className="h-5 w-5" />
        <span className="sr-only">Language / 语言</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(pathForLocale(pathname, locale))}
            className={locale === lang ? "font-medium" : ""}
          >
            {languageNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
