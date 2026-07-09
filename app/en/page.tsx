import { getMessages } from "@/lib/i18n";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "nxtcorex",
};

export default async function EnglishHomePage() {
  const messages = await getMessages("en");

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 pt-24">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <ScrollReveal animation="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
            {messages.home.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={200}>
          <Link href="/en/contact">
            <Button size="lg">{messages.home.cta}</Button>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}