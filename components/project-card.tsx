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

function ProjectMedia({ project }: { project: Project }) {
  if (!project.images) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border bg-muted/30 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)_inset] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
        <div className="flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary/70 text-3xl font-bold text-primary-foreground shadow-lg">
          {project.name.slice(0, 1)}
        </div>
        <p className="text-sm text-muted-foreground">{project.name}</p>
      </div>
    );
  }

  if (project.category === "app") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-background shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)_inset] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
        <img
          src={project.images.light}
          alt={project.name}
          className="absolute inset-0 size-full object-cover dark:hidden"
        />
        <img
          src={project.images.dark}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden size-full object-cover dark:block"
        />
      </div>
    );
  }

  return (
    <BrowserWindow url={project.hostname} className="aspect-[16/10] w-full">
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
  );
}

export function ProjectCard({ project, messages, detailed }: ProjectCardProps) {
  const copy = messages.projects.items[project.slug];

  return (
    <Card className="overflow-hidden">
      <CardContent className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-8">
        <ProjectMedia project={project} />

        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <CardTitle className="text-2xl">{project.name}</CardTitle>
            <span className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
              {messages.projects.categories[project.category]}
            </span>
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

          {project.href && (
            <Button asChild className="mt-6">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                {project.category === "app"
                  ? messages.projects.visitApp
                  : messages.projects.visit}
                <ArrowUpRight />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
