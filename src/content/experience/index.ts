import type { Experience } from "@/types/Experience";

export const experiences: Experience[] = [
  {
    company: "TechCorp",
    position: "Senior Software Engineer",
    duration: "Jan 2024 — Present",
    description:
      "Led the development of a real-time collaboration platform serving over 50,000 users. Architected microservices infrastructure and mentored a team of 4 junior developers. Reduced API response times by 40% through query optimization and caching strategies.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    company: "StartupHub",
    position: "Full Stack Developer",
    duration: "Jun 2022 — Dec 2023",
    description:
      "Built and shipped 3 major product features for a SaaS analytics platform. Implemented CI/CD pipelines that reduced deployment time by 60%. Developed a real-time notification system handling 1M+ events daily.",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "MongoDB", "AWS"],
  },
  {
    company: "WebAgency",
    position: "Junior Developer",
    duration: "Sep 2021 — May 2022",
    description:
      "Developed responsive web applications for diverse clients using React and Node.js. Collaborated with designers to implement pixel-perfect UIs and improved lighthouse performance scores by an average of 35 points.",
    technologies: ["React", "JavaScript", "Sass", "Node.js", "MySQL"],
  },
];
