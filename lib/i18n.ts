import { type ProjectStatus } from "@/lib/projects";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export interface Messages {
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  home: {
    title: string;
    description: string;
    cta: {
      projects: string;
      contact: string;
    };
    projects: {
      title: string;
      description: string;
      more: string;
    };
  };
  projects: {
    title: string;
    description: string;
    visit: string;
    status: Record<ProjectStatus, string>;
    items: Record<string, { tagline: string; description: string }>;
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
