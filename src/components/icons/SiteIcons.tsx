import type { IconType } from "react-icons";
import { SiHostinger } from "react-icons/si";
import { cn } from "@/lib/utils";

export type ColorVariant =
  | "blue"
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "yellow"
  | "zinc";

type SizeVariant = "sm" | "md" | "lg";

export interface SiteIconProps {
  className?: string;
  color?: ColorVariant;
  size?: SizeVariant;
  icon?: IconType;
  iconColor?: string;
}

const colorVariants: Record<ColorVariant, string> = {
  blue: `
    from-blue-400
    to-blue-600
    ring-offset-blue-500
  `,
  red: `
    from-red-400
    to-red-600
    ring-offset-red-500
  `,
  green: `
    from-green-400
    to-green-600
    ring-offset-green-500
  `,
  purple: `
    from-purple-400
    to-purple-600
    ring-offset-purple-500
  `,
  orange: `
    from-orange-400
    to-orange-600
    ring-offset-orange-500
  `,
  yellow: `
    from-yellow-300
    to-yellow-500
    ring-offset-yellow-400
  `,
  zinc: `
    from-zinc-400
    to-zinc-600
    ring-offset-zinc-500
  `,
};

const sizeVariants: Record<SizeVariant, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
};

export function SiteIcon({
  className,
  color = "blue",
  size = "sm",
  icon: Icon = SiHostinger,
  iconColor = "white",
}: SiteIconProps) {
  return (
    <div
      className={cn(
        "relative mr-4 flex aspect-square items-center justify-center rounded-md bg-linear-to-b shadow-lg ring-1 ring-background/20 ring-inset ring-offset-2",
        colorVariants[color],
        sizeVariants[size],
        className,
      )}
    >
      <Icon
        color={iconColor}
        className={cn(
          size === "sm" && "size-4",
          size === "md" && "size-5",
          size === "lg" && "size-6",
        )}
      />
    </div>
  );
}
