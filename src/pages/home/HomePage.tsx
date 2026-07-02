import { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import { ROUTES } from "@/constants/routes";
import type { Site } from "@/types/Site";
import type { SocialLink } from "@/types/SocialLink";
import Span from "@/components/common/span/Span";
import DescriptiveIcons from "@/components/icons/DescriptiveIcons";
import { SiteIcon } from "@/components/icons/SiteIcons";
import { hobbies } from "@/content/hobbies";
import { skills } from "@/content/skills";
import ProjectCard from "@/components/project/ProjectCard";

export function HomePage() {
  const [site, setSite] = useState<Site | null>(null);
  const [socials, setSocials] = useState<SocialLink[]>([]);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
    portfolioService.getSocialLinks().then(setSocials);
  }, []);

  return (
    <Container>
      <section>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground">
          {site?.description ||
            "A personal portfolio showcasing projects and skills."}
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground">
          I&apos;m active on{" "}
          {socials.map((s, i) => (
            <span key={s.name}>
              {i > 0 && <span> and </span>}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
              >
                {s.name}
              </a>
            </span>
          ))}
          . Check out my{" "}
          <Link
            to={ROUTES.PROJECTS}
            className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
          >
            projects
          </Link>{" "}
          or{" "}
          <Link
            to={ROUTES.BLOG}
            className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
          >
            writings
          </Link>
          .
        </p>
      </section>
      <div className="border-t-2 border-dashed border-border my-8" />
      <section>
        <Span text="things that i do" />
        {hobbies.map((hobby) => (
          <DescriptiveIcons
            key={hobby.name}
            name={hobby.name}
            description={hobby.description}
            iconProps={{
              icon: hobby.icon,
              color: hobby.iconColor,
            }}
          />
        ))}
      </section>
      <div className="border-t-2 border-dashed border-border my-8" />
      <section>
        <Span text="tech i know" />
        <div className="relative overflow-hidden py-8">
          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee gap-12">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex items-center gap-2"
              >
                <SiteIcon {...skill.icon} className="mr-0" />
                <span className="text-sm font-medium text-foreground/60">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <div className="border-t-2 border-dashed border-border my-8" />
      <section>
        <Span text="projects i've created" />
        <div className="flex justify-center mt-4 gap-12 overflow-hidden scrollbar-none w-fit">
          <ProjectCard />
        </div>
      </section>
      {/* EDUCATION */}
      <div className="border-t-2 border-dashed border-border my-8" />
      <section>
        <Span text="Education" />
        <div className="flex items-center justify-between mt-4">
          <Span
            text="Fr. Conceicao Rodrigues COE"
            className="text-foreground font-medium"
          />
          <Span text="sept.2028" />
        </div>
      </section>
      {/* CONTACT */}
      <div className="border-t-2 border-dashed border-border my-8" />
      <section>
        <Span text="contact" />
        <p className="mt-2 text-sm text-muted-foreground">
          Let&apos;s connect. Reach out anytime.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {site?.email && (
            <a
              href={`mailto:${site.email}`}
              className="group relative flex items-center gap-4 rounded-2xl border border-border/40 bg-white/10 backdrop-blur-lg backdrop-saturate-150 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
            >
              {/* Shine layer */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <SiteIcon icon={HiOutlineEnvelope} color="blue" size="md" className="mr-0 shrink-0" />
              <div className="relative z-10 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="mt-0.5 text-sm text-foreground truncate">{site.email}</p>
              </div>
            </a>
          )}
          {site?.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-2xl border border-border/40 bg-white/10 backdrop-blur-lg backdrop-saturate-150 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <SiteIcon icon={FaGithub} color="zinc" size="md" className="mr-0 shrink-0" />
              <div className="relative z-10 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">GitHub</p>
                <p className="mt-0.5 text-sm text-foreground truncate">{site.github.replace("https://", "")}</p>
              </div>
            </a>
          )}
          {site?.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 rounded-2xl border border-border/40 bg-white/10 backdrop-blur-lg backdrop-saturate-150 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <SiteIcon icon={FaLinkedin} color="blue" size="md" className="mr-0 shrink-0" />
              <div className="relative z-10 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                <p className="mt-0.5 text-sm text-foreground truncate">{site.linkedin.replace("https://", "")}</p>
              </div>
            </a>
          )}
          {site?.location && (
            <div className="group relative flex items-center gap-4 rounded-2xl border border-border/40 bg-white/10 backdrop-blur-lg backdrop-saturate-150 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
              <SiteIcon icon={HiOutlineMapPin} color="green" size="md" className="mr-0 shrink-0" />
              <div className="relative z-10 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="mt-0.5 text-sm text-foreground">{site.location}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
