import { useEffect, useState } from "react";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";
import type { SocialLink } from "@/types/SocialLink";

// Icon name → SVG path mapping for brand icons
const BRAND_ICONS: Record<string, string> = {
  github:
    "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

export function ContactPage() {
  const [site, setSite] = useState<Site | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
    portfolioService.getSocialLinks().then(setSocialLinks);
  }, []);

  return (
    <Container>
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Get in Touch</h2>
        <p className="mt-2 text-sm text-foreground">Let's work together</p>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-foreground">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>

        <div className="mt-8 space-y-3">
          {site?.email && (
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              {site.email}
            </a>
          )}
          {site?.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              GitHub
            </a>
          )}
          {site?.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              LinkedIn
            </a>
          )}
          {site?.location && (
            <p className="flex items-center gap-2 text-sm text-foreground">
              {site.location}
            </p>
          )}
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex items-center gap-4">
          {socialLinks
            .filter((link) => link.icon !== "email")
            .map((link) => {
              const svgPath = BRAND_ICONS[link.icon];
              if (!svgPath) return null;

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-opacity hover:opacity-60"
                  aria-label={link.name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={svgPath} />
                  </svg>
                </a>
              );
            })}
        </div>
      </section>
    </Container>
  );
}
