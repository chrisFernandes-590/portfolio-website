import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  variant?: "default" | "muted";
}

export function Section({
  className,
  children,
  id,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
