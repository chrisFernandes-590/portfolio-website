import { useEffect, useState } from "react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Tag } from "@/components/common/tag";
import { portfolioService } from "@/services";
import type { Experience } from "@/types/Experience";
import type { Education } from "@/types/Education";
import type { Skill } from "@/types/Skill";

export function AboutPage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    portfolioService.getExperience().then(setExperiences);
    portfolioService.getEducation().then(setEducations);
    portfolioService.getSkills().then(setSkills);
  }, []);

  const skillCategories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <>
      {/* Experience */}
      <Section id="experience">
        <Container>
          <SectionHeader
            title="Experience"
            subtitle="Where I've worked"
            description="My professional journey building software and leading teams."
          />

          <div className="mt-12 space-y-8">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.position}`}
                className="rounded-lg border bg-card p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <Heading level="h3">{exp.position}</Heading>
                    <Text variant="muted" className="mt-1">
                      {exp.company}
                    </Text>
                  </div>
                  <Text variant="small" className="text-muted-foreground">
                    {exp.duration}
                  </Text>
                </div>
                <Text variant="body" className="mt-4">
                  {exp.description}
                </Text>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech} variant="outline">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Education */}
      <Section id="education" variant="muted">
        <Container>
          <SectionHeader
            title="Education"
            subtitle="Academic background"
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {educations.map((edu) => (
              <div
                key={`${edu.institution}-${edu.degree}`}
                className="rounded-lg border bg-card p-6"
              >
                <Heading level="h4">{edu.degree}</Heading>
                <Text variant="muted" className="mt-1">
                  {edu.institution}
                </Text>
                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{edu.duration}</span>
                  {edu.grade && (
                    <>
                      <span>&middot;</span>
                      <span>{edu.grade}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Container>
          <SectionHeader
            title="Skills"
            subtitle="Technologies I work with"
            align="center"
          />

          <div className="mt-12 space-y-10">
            {skillCategories.map((category) => (
              <div key={category}>
                <Heading level="h3" className="mb-4">
                  {category}
                </Heading>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((s) => s.category === category)
                    .sort((a, b) => a.displayOrder - b.displayOrder)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-lg border bg-card px-4 py-2"
                      >
                        <Text variant="body" className="font-medium">
                          {skill.name}
                        </Text>
                        {skill.level > 0 && (
                          <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
