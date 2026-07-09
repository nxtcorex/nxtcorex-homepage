import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollRevealInitializer } from "@/components/scroll-reveal-initializer";
import { ThemeInitializer } from "@/components/theme-initializer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://nxtcorex.org"),
    title: {
      default: "nxtcorex Official Website",
      template: `%s | nxtcorex`,
    },
    description: "nxtcorex official website, learn about our contact information",
    alternates: {
      canonical: "/en",
      languages: {
        "zh": "/",
        "en": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "nxtcorex",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/img/logo_c.webp",
    },
  };
}

export default async function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages("en");

  return (
    <>
      <ThemeInitializer />
      <ScrollRevealInitializer />
      <Navigation lang="en" messages={messages} />
      <main className="min-h-screen">{children}</main>
      <Footer lang="en" messages={messages} />
    </>
  );
}