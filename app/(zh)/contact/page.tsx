import type { Metadata } from "next";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { getMessages } from "@/lib/i18n";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "联系方式",
};

export default async function ContactPage() {
  const messages = await getMessages("zh");

  return (
    <div className="container px-4 pt-16 pb-16 md:px-8 lg:pb-24">
      <div className="max-w-4xl">
        <ScrollReveal animation="fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {messages.contact.title}
          </h1>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                {messages.contact.email}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${messages.contact.emailAddress}`}
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                {messages.contact.emailAddress}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-4 w-4 text-muted-foreground" />
                {messages.contact.social}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://github.com/nxtcorex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                GitHub
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
