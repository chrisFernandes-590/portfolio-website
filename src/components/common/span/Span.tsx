import { cn } from "@/lib/utils";

interface SpanProps {
  text: string;
  className?: string;
}

const Span = ({ text, className }: SpanProps) => {
  return (
    <span className={cn("text-foreground/40 font-mono", className)}>
      {text.toUpperCase()}
    </span>
  );
};

export default Span;
