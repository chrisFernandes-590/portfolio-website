import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import { ROUTES } from "@/constants/routes";
import type { Site } from "@/types/Site";
import type { SocialLink } from "@/types/SocialLink";
import Span from "@/components/common/span/Span";
import DescriptiveIcons from "@/components/icons/DescriptiveIcons";
import { hobbies } from "@/content/hobbies";

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
    </Container>
  );
}
