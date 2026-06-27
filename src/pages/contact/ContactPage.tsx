import { useEffect, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Button } from "@/components/ui/button";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";

export function ContactPage() {
  const [site, setSite] = useState<Site | null>(null);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
  }, []);

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Get in Touch"
          subtitle="Let's work together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {/* Email */}
          <a
            href={`mailto:${site?.email || ""}`}
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
          >
            <Mail className="size-6 text-primary" />
            <Heading level="h4" className="mt-4 group-hover:text-primary transition-colors">
              Email
            </Heading>
            <Text variant="muted" className="mt-2">
              {site?.email || "hello@example.com"}
            </Text>
          </a>

          {/* GitHub */}
          <a
            href={site?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
          >
            <svg viewBox="0 0 24 24" className="size-6 text-primary" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <Heading level="h4" className="mt-4 group-hover:text-primary transition-colors">
              GitHub
            </Heading>
            <Text variant="muted" className="mt-2">
              Check out my code
            </Text>
          </a>

          {/* LinkedIn */}
          <a
            href={site?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
          >
            <svg viewBox="0 0 24 24" className="size-6 text-primary" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <Heading level="h4" className="mt-4 group-hover:text-primary transition-colors">
              LinkedIn
            </Heading>
            <Text variant="muted" className="mt-2">
              Connect professionally
            </Text>
          </a>

          {/* Location */}
          {site?.location && (
            <div className="rounded-lg border bg-card p-6">
              <MapPin className="size-6 text-primary" />
              <Heading level="h4" className="mt-4">
                Location
              </Heading>
              <Text variant="muted" className="mt-2">
                {site.location}
              </Text>
            </div>
          )}
        </div>

        {/* Contact Form Placeholder */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border bg-card p-8">
          <Heading level="h3" className="text-center">
            Send a Message
          </Heading>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
