import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BrowserWindow } from "@/components/ui/browser-window";
import { type Project } from "@/lib/projects";
import { type Messages } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  messages: Messages;
  detailed?: boolean;
}

export function ProjectCard({ project, messages, detailed }: ProjectCardProps) {
  const copy = messages.projects.items[project.slug];

  return (
    <Card className="overflow-hidden">
      <CardContent className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-8">
        <BrowserWindow
          url={project.hostname}
          className="aspect-[16/10] w-full"
        >
          <img
            src={project.images.light}
            alt={`${project.name} · ${project.hostname}`}
            className="absolute inset-0 size-full object-cover object-top dark:hidden"
          />
          <img
            src={project.images.dark}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden size-full object-cover object-top dark:block"
          />
        </BrowserWindow>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <CardTitle className="text-2xl">{project.name}</CardTitle>
            <span className="text-sm text-muted-foreground">
              {messages.projects.status[project.status]}
            </span>
          </div>

          <p className="mt-3 text-base font-medium">{copy.tagline}</p>
          {detailed && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          )}

          <Button asChild className="mt-6">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              {messages.projects.visit}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
