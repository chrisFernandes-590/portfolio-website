import { useEffect, useState } from "react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { portfolioService } from "@/services";
import type { Site } from "@/types/Site";

export function HomePage() {
  const [site, setSite] = useState<Site | null>(null);

  useEffect(() => {
    portfolioService.getSite().then(setSite);
  }, []);

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Heading level="h1">{site?.title || "Portfolio"}</Heading>
          <Text variant="lead" className="mt-4 max-w-2xl">
            {site?.description || "A personal portfolio showcasing projects and skills."}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
