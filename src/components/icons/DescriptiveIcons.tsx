import { cn } from "@/lib/utils";
import { SiteIcon, type SiteIconProps } from "./SiteIcons";

interface DescriptiveIconsProps {
  className?: string;
  name: string;
  description?: string;
  iconProps?: SiteIconProps;
  type?: "row" | "col";
}

const DescriptiveIcons = ({
  className,
  iconProps,
  name,
  description,
  type = "row",
}: DescriptiveIconsProps) => {
  const isRow = type === "row";

  return (
    <div
      className={cn(
        "m-4 ml-0 flex items-center gap-3",
        isRow ? "flex-row" : "flex-col w-49.25 items-start",
        className,
      )}
    >
      <div className="flex items-center">
        <SiteIcon {...iconProps} />
        <span>{name}</span>
      </div>

      {isRow && (
        <div className="hidden size-1 rounded-full bg-foreground/10 md:block" />
      )}

      <p className="text-foreground/60">{description}</p>
    </div>
  );
};

export default DescriptiveIcons;
