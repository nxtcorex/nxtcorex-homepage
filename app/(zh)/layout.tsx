import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollRevealInitializer } from "@/components/scroll-reveal-initializer";
import { ThemeInitializer } from "@/components/theme-initializer";
import { getMessages } from "@/lib/i18n";

export default async function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages("zh");

  return (
    <>
      <ThemeInitializer />
      <ScrollRevealInitializer />
      <Navigation lang="zh" messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer messages={messages} />
    </>
  );
}
