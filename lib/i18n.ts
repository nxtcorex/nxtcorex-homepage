export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export interface Messages {
  nav: {
    home: string;
    contact: string;
  };
  home: {
    title: string;
    cta: string;
  };
  contact: {
    title: string;
    email: string;
    emailAddress: string;
    social: string;
  };
  footer: {
    copyright: string;
  };
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export async function getMessages(locale: Locale): Promise<Messages> {
  return (await import(`../messages/${locale}.json`)).default;
}