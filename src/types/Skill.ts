import type { SiteIconProps } from "@/components/icons/SiteIcons";

export interface Skill {
  category: string;
  name: string;
  icon?: SiteIconProps;
  level: number;
  displayOrder: number;
}
