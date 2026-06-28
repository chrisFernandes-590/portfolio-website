import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";
import { ROUTES } from "@/constants/routes";
import { NAV_ITEMS } from "@/data/navigation";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [site, setSite] = useState<Site | null>(null);
  const location = useLocation();

  useEffect(() => {
    portfolioService.getSite().then(setSite);
  }, []);

  return (
    <header className={cn("pt-8 pb-4", className)}>
      <Container>
        <div className="flex flex-col gap-4 items-start justify-between">
          <Link
            to={ROUTES.HOME}
            className="text-xl font-medium tracking-tight transition-opacity hover:opacity-60"
          >
            {site?.logo || "Chris Fernandes"}
          </Link>

          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "group relative pb-1 text-sm transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {item.label}

                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-foreground transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
