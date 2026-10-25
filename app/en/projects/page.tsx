import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function EnglishProjectsPage() {
  const messages = await getMessages("en");

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

      <div className="mt-12 grid gap-12">
        {projectCategories.map((category) => {
          const grouped = projects.filter(
            (project) => project.category === category
          );
          if (grouped.length === 0) return null;

          return (
            <section key={category} className="scroll-mt-20" id={category}>
              <h2 className="text-2xl font-bold tracking-tight">
                {messages.projects.categories[category]}
              </h2>
              <div className="mt-6 grid gap-8">
                {grouped.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    messages={messages}
                    detailed
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
