import { Badge } from "@/components/common/badge";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  className,
  badge,
  title,
  subtitle,
  description,
  align = "center",
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    >
      {badge && <Badge>{badge}</Badge>}
      <Heading level="h2">{title}</Heading>
      {subtitle && <Text variant="muted">{subtitle}</Text>}
      {description && (
        <Text
          variant="muted"
          className={cn(
            "max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </Text>
      )}
    </div>
  );
}
