import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function EnglishContactPage() {
  const messages = await getMessages("en");

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            {messages.contact.title}
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal animation="slide-up" delay={100}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <CardTitle>{messages.contact.email}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${messages.contact.emailAddress}`}
                  className="text-primary"
                >
                  {messages.contact.emailAddress}
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={200}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  <CardTitle>{messages.contact.social}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Link
                  href="https://github.com/nxtcorex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  GitHub
                </Link>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}