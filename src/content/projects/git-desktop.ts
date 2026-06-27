import type { Project } from "@/types/Project";

export const gitDesktop: Project = {
  id: "proj-002",
  slug: "git-desktop",
  title: "Git Desktop",
  shortDescription:
    "A cross-platform desktop application providing a visual interface for Git operations with real-time collaboration features.",
  description: `A cross-platform desktop Git client built with Electron and React that simplifies version control workflows. The application provides an intuitive visual interface for common Git operations including branching, merging, rebasing, and conflict resolution.

Real-time collaboration features allow teams to review pull requests, leave comments, and track changes together. Built-in diff viewer, commit history visualization, and integration with GitHub/GitLab APIs.`,
  technologies: ["Electron", "React", "TypeScript", "Node.js", "GraphQL", "Git"],
  github: "https://github.com/username/git-desktop",
  liveDemo: undefined,
  featured: false,
  status: "in-progress",
  thumbnail: "/images/git-desktop-thumb.jpg",
  images: [
    "/images/git-desktop-1.jpg",
    "/images/git-desktop-2.jpg",
  ],
};
