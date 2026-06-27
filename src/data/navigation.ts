import { ROUTES } from "@/constants/routes";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Projects", href: ROUTES.PROJECTS },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Contact", href: ROUTES.CONTACT },
];
