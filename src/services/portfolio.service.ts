import type { Project } from "@/types/Project";
import type { Blog } from "@/types/Blog";
import type { Skill } from "@/types/Skill";
import type { Experience } from "@/types/Experience";
import type { Education } from "@/types/Education";
import type { GalleryImage } from "@/types/GalleryImage";
import type { SocialLink } from "@/types/SocialLink";
import type { Site } from "@/types/Site";

import { projects } from "@/content/projects";
import { blogs } from "@/content/blogs";
import { skills } from "@/content/skills";
import { experiences } from "@/content/experience";
import { educations } from "@/content/education";
import { gallery } from "@/content/gallery";
import { socials } from "@/content/socials";
import { siteContent } from "@/content/site";

/**
 * PortfolioService
 *
 * Single source of truth for all portfolio content.
 *
 * Currently reads from local content files. To switch to an API or CMS,
 * replace the implementation inside each method without changing the
 * method signatures — no UI component requires modification.
 */
class PortfolioService {
  private _projects: Project[] = projects;
  private _blogs: Blog[] = blogs;
  private _skills: Skill[] = skills;
  private _experiences: Experience[] = experiences;
  private _educations: Education[] = educations;
  private _gallery: GalleryImage[] = gallery;
  private _socialLinks: SocialLink[] = socials;
  private _site: Site = siteContent;

  // ── Projects ──────────────────────────────────────────────────────

  getProjects(): Promise<Project[]> {
    return Promise.resolve(this._projects);
  }

  getFeaturedProjects(): Promise<Project[]> {
    return Promise.resolve(this._projects.filter((p) => p.featured));
  }

  getProjectBySlug(slug: string): Promise<Project | undefined> {
    return Promise.resolve(this._projects.find((p) => p.slug === slug));
  }

  // ── Blogs ─────────────────────────────────────────────────────────

  getBlogs(): Promise<Blog[]> {
    return Promise.resolve(this._blogs);
  }

  getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return Promise.resolve(this._blogs.find((b) => b.slug === slug));
  }

  // ── Skills ────────────────────────────────────────────────────────

  getSkills(): Promise<Skill[]> {
    return Promise.resolve(this._skills);
  }

  // ── Experience ────────────────────────────────────────────────────

  getExperience(): Promise<Experience[]> {
    return Promise.resolve(this._experiences);
  }

  // ── Education ─────────────────────────────────────────────────────

  getEducation(): Promise<Education[]> {
    return Promise.resolve(this._educations);
  }

  // ── Gallery ───────────────────────────────────────────────────────

  getGallery(): Promise<GalleryImage[]> {
    return Promise.resolve(this._gallery);
  }

  // ── Social Links ──────────────────────────────────────────────────

  getSocialLinks(): Promise<SocialLink[]> {
    return Promise.resolve(this._socialLinks);
  }

  // ── Site ──────────────────────────────────────────────────────────

  getSite(): Promise<Site> {
    return Promise.resolve(this._site);
  }
}

export const portfolioService = new PortfolioService();
