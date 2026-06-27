import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base",
      lead: "text-lg md:text-xl",
      muted: "text-sm text-muted-foreground",
      small: "text-sm",
      caption: "text-xs text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  variant?: "body" | "lead" | "muted" | "small" | "caption";
}

export function Text({ className, variant = "body", ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ variant }), className)} {...props} />
  );
}
