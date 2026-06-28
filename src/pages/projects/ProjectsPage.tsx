import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import { routeHelpers } from "@/constants/routes";
import type { Project } from "@/types/Project";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    portfolioService.getProjects().then(setProjects);
  }, []);

  return (
    <Container>
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <p className="mt-2 text-sm text-foreground">Things I've built</p>

        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <article key={project.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    to={routeHelpers.project(project.slug)}
                    className="text-base font-medium transition-opacity hover:opacity-60"
                  >
                    {project.title}
                  </Link>
                  {project.featured && (
                    <span className="ml-2 text-xs text-foreground uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="mt-2 flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground hover:text-foreground transition-all"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground hover:text-foreground transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-8 text-sm text-foreground">No projects to display yet.</p>
        )}
      </section>
    </Container>
  );
}
