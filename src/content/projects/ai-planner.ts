import type { Project } from "@/types/Project";

export const aiPlanner: Project = {
  id: "proj-001",
  slug: "ai-planner",
  title: "AI Planner",
  shortDescription:
    "An intelligent task planning application that uses machine learning to optimize daily schedules and boost productivity.",
  description: `A full-stack application built with React and Node.js that leverages machine learning algorithms to create optimized daily schedules. The application analyzes user habits, task priorities, and available time slots to generate the most efficient workflow.

Key features include smart scheduling, drag-and-drop task management, collaborative planning, and AI-powered productivity insights. The system learns from user behavior over time to provide increasingly accurate scheduling recommendations.`,
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "TensorFlow.js", "Docker"],
  github: "https://github.com/username/ai-planner",
  liveDemo: "https://ai-planner-demo.vercel.app",
  featured: true,
  status: "completed",
  thumbnail: "/images/ai-planner-thumb.jpg",
  images: [
    "/images/ai-planner-1.jpg",
    "/images/ai-planner-2.jpg",
    "/images/ai-planner-3.jpg",
  ],
};
