import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    level: {
      display: "text-5xl md:text-6xl lg:text-7xl",
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl",
      h4: "text-xl md:text-2xl",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: "display" | "h1" | "h2" | "h3" | "h4";
}

export function Heading({ className, level = "h2", ...props }: HeadingProps) {
  const Comp = level === "display" ? "h1" : level;

  return (
    <Comp className={cn(headingVariants({ level }), className)} {...props} />
  );
}
