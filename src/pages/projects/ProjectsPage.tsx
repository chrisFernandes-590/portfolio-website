import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Badge } from "@/components/common/badge";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { portfolioService } from "@/services";
import type { Project } from "@/types/Project";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    portfolioService.getProjects().then(setProjects);
  }, []);

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Projects"
          subtitle="Things I've built"
          description="A collection of projects I've worked on, from full-stack applications to open source contributions."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <Heading level="h3" className="group-hover:text-primary transition-colors">
                  {project.title}
                </Heading>
                {project.featured && <Badge>Featured</Badge>}
              </div>

              <Text variant="muted" className="mt-3 line-clamp-3">
                {project.shortDescription}
              </Text>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Tag key={tech} variant="outline">
                    {tech}
                  </Tag>
                ))}
                {project.technologies.length > 4 && (
                  <Tag variant="outline">+{project.technologies.length - 4}</Tag>
                )}
              </div>

              <div className="mt-4 flex items-center gap-3">
                {project.github && (
                  <Button variant="ghost" size="sm" asChild>
                    <span>GitHub</span>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button variant="ghost" size="sm" asChild>
                    <span>Live Demo</span>
                  </Button>
                )}
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="mt-12 text-center">
            <Text variant="muted">No projects to display yet.</Text>
          </div>
        )}
      </Container>
    </Section>
  );
}
