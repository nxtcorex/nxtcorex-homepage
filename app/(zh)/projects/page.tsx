import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "项目",
};

export default async function ProjectsPage() {
  const messages = await getMessages("zh");

  return (
    <div className="container px-4 pt-16 pb-16 md:px-8 lg:pb-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {messages.projects.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {messages.projects.description}
        </p>
      </div>

      <div className="mt-12 grid gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            messages={messages}
            detailed
          />
        ))}
      </div>
    </div>
  );
}
