export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  thumbnail?: string;
  images: string[];
}
