import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { NAV_ITEMS } from "@/data/navigation";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [site, setSite] = useState<Site | null>(null);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        className,
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            {site?.title || "Portfolio"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              disabled
            >
              <span className="size-4" />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={site?.resume || site?.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="border-t pb-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 border-t px-3 pt-4 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle theme"
                  disabled
                >
                  <span className="size-4" />
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={site?.resume || site?.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
