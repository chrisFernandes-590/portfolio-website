import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const [site, setSite] = useState<Site | null>(null);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
  }, []);

  return (
    <footer className={cn("py-8", className)}>
      <Container>
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground">
            &copy; {new Date().getFullYear()} {site?.title || "Portfolio"}
          </p>
          {site?.email && (
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-foreground transition-opacity hover:opacity-60"
            >
              {site.email}
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
