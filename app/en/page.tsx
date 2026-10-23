import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getMessages } from "@/lib/i18n";
import { Globe } from "@/components/globe";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "nxtcorex",
};

export default async function EnglishHomePage() {
  const messages = await getMessages("en");

  return (
    <>
      <section className="border-b">
        <div className="container grid items-center gap-12 px-4 pt-16 pb-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {messages.home.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {messages.home.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/en/projects">
                  {messages.home.cta.projects}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/en/contact">{messages.home.cta.contact}</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <Globe size={520} />
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 md:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              {messages.home.projects.title}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {messages.home.projects.description}
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/en/projects">
              {messages.home.projects.more}
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              messages={messages}
            />
          ))}
        </div>
      </section>
    </>
  );
}
