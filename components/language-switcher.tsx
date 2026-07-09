"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  lang: Locale;
}

const languageNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    if (newLang === "zh") {
      // Switching to Chinese (default language)
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.push(newPath);
    } else {
      // Switching to English
      const currentPath = pathname === "/" ? "" : pathname;
      router.push(`/en${currentPath}`);
    }
  };

  return (
    <Select value={lang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {languageNames[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}