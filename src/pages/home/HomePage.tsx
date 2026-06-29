import { useEffect, useState } from "react";
import { Link } from "react-router";
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
      <div className="border-t-2 border-dashed border-border my-8"></div>
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
      <div className="border-t-2 border-dashed border-border my-8"></div>
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
    </Container>
  );
}
