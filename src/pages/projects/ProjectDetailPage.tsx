import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import type { Project } from "@/types/Project";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    portfolioService.getProjectBySlug(slug).then((p) => {
      setProject(p ?? null);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <section className="py-12 md:py-16">
          <p className="text-sm text-foreground">Loading...</p>
        </section>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container>
        <section className="py-12 md:py-16">
          <h1 className="text-2xl font-medium tracking-tight">Project Not Found</h1>
          <p className="mt-4 text-sm text-foreground">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
          >
            <ArrowLeft className="size-3.5" />
            Back to Projects
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <article className="py-12 md:py-16">
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-foreground transition-opacity hover:opacity-60"
        >
          <ArrowLeft className="size-3.5" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-medium tracking-tight">{project.title}</h1>
            {project.featured && (
              <span className="text-xs text-foreground uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>
          <span className="mt-1 inline-block text-xs text-foreground uppercase tracking-wider">
            {project.status}
          </span>
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4 text-sm">
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

        {/* Description */}
        <div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-foreground">
          {project.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
