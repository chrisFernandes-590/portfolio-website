import { useEffect, useState } from "react";
import { Container } from "@/components/common/container";
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
    <Container>
      {/* Experience */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Experience</h2>
        <p className="mt-2 text-sm text-foreground">Where I've worked</p>

        <div className="mt-8 space-y-10">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.position}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-medium">{exp.position}</h3>
                  <p className="text-sm text-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-foreground">{exp.duration}</p>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-border" />

      {/* Education */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Education</h2>
        <p className="mt-2 text-sm text-foreground">Academic background</p>

        <div className="mt-8 space-y-6">
          {educations.map((edu) => (
            <div key={`${edu.institution}-${edu.degree}`}>
              <h3 className="text-base font-medium">{edu.degree}</h3>
              <p className="text-sm text-foreground">{edu.institution}</p>
              <div className="mt-1 flex items-center gap-3 text-sm text-foreground">
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
      </section>

      <hr className="border-border" />

      {/* Skills */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-foreground">Technologies I work with</p>

        <div className="mt-8 space-y-8">
          {skillCategories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                {category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {skills
                  .filter((s) => s.category === category)
                  .sort((a, b) => a.displayOrder - b.displayOrder)
                  .map((skill) => (
                    <span key={skill.name} className="text-sm">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
