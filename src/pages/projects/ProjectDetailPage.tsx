import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Badge } from "@/components/common/badge";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
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
      <Section>
        <Container>
          <Text variant="muted">Loading...</Text>
        </Container>
      </Section>
    );
  }

  if (!project) {
    return (
      <Section>
        <Container>
          <div className="text-center">
            <Heading level="h1">Project Not Found</Heading>
            <Text variant="muted" className="mt-4">
              The project you're looking for doesn't exist.
            </Text>
            <Button variant="outline" className="mt-6" asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        {/* Back link */}
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <Heading level="h1">{project.title}</Heading>
              {project.featured && <Badge>Featured</Badge>}
            </div>
            <Badge className="mt-2">{project.status}</Badge>
          </div>

          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source
                </a>
              </Button>
            )}
            {project.liveDemo && (
              <Button variant="default" size="sm" asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* Description */}
        <div className="mt-8 max-w-3xl">
          {project.description.split("\n\n").map((paragraph, i) => (
            <Text key={i} className="mt-4 first:mt-0">
              {paragraph}
            </Text>
          ))}
        </div>
      </Container>
    </Section>
  );
}
