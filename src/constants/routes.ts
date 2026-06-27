export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT_DETAIL: "/projects/:slug",
  BLOG: "/blog",
  BLOG_DETAIL: "/blog/:slug",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export const routeHelpers = {
  project: (slug: string) => `/projects/${slug}`,
  blog: (slug: string) => `/blog/${slug}`,
} as const;
