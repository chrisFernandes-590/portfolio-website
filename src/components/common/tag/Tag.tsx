import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-background hover:bg-muted",
        active: "bg-primary text-primary-foreground",
      },
      interactive: {
        true: "cursor-pointer select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  },
);

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "active";
  interactive?: boolean;
}

export function Tag({
  className,
  variant = "default",
  interactive = false,
  children,
  ...props
}: TagProps) {
  const Comp = interactive ? "button" : "span";

  return (
    <Comp
      className={cn(tagVariants({ variant, interactive }), className)}
      {...(interactive ? { type: "button" as const } : {})}
      {...props}
    />
  );
}
