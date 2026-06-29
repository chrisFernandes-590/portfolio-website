import type { Skill } from "@/types/Skill";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { DiVisualstudio } from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { FaCss, FaHtml5 } from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiGraphql,
  SiFigma,
  SiOllama,
} from "react-icons/si";

export const skills: Skill[] = [
  {
    category: "Frontend",
    name: "React",
    icon: { icon: FaReact, color: "blue" },
    level: 92,
    displayOrder: 1,
  },
  {
    category: "Frontend",
    name: "HTML",
    icon: { icon: FaHtml5, color: "orange" },
    level: 92,
    displayOrder: 1,
  },
  {
    category: "Frontend",
    name: "CSS",
    icon: { icon: FaCss, color: "purple" },
    level: 92,
    displayOrder: 1,
  },
  {
    category: "Frontend",
    name: "TypeScript",
    icon: { icon: BsTypescript, color: "blue" },
    level: 88,
    displayOrder: 2,
  },
  {
    category: "Frontend",
    name: "JavaScript",
    icon: { icon: BsJavascript, color: "yellow" },
    level: 88,
    displayOrder: 2,
  },
  {
    category: "Frontend",
    name: "Tailwind CSS",
    icon: { icon: SiTailwindcss, color: "blue" },
    level: 85,
    displayOrder: 3,
  },
  {
    category: "Frontend",
    name: "Next.js",
    icon: { icon: SiNextdotjs, color: "zinc" },
    level: 80,
    displayOrder: 4,
  },
  {
    category: "Backend",
    name: "Node.js",
    icon: { icon: FaNodeJs, color: "green" },
    level: 85,
    displayOrder: 5,
  },
  {
    category: "Backend",
    name: "Python",
    icon: { icon: FaPython, color: "yellow" },
    level: 78,
    displayOrder: 6,
  },
  {
    category: "Backend",
    name: "Ollama",
    icon: { icon: SiOllama, color: "zinc" },
    level: 78,
    displayOrder: 6,
  },
  {
    category: "Backend",
    name: "PostgreSQL",
    icon: { icon: SiPostgresql, color: "blue" },
    level: 75,
    displayOrder: 7,
  },
  {
    category: "Tools",
    name: "Git",
    icon: { icon: FaGitAlt, color: "orange" },
    level: 90,
    displayOrder: 9,
  },
  {
    category: "Tools",
    name: "VS Code",
    icon: { icon: DiVisualstudio, color: "purple" },
    level: 95,
    displayOrder: 11,
  },
  {
    category: "Tools",
    name: "Docker",
    icon: { icon: FaDocker, color: "blue" },
    level: 76,
    displayOrder: 10,
  },
  {
    category: "Tools",
    name: "Figma",
    icon: { icon: SiFigma, color: "zinc" },
    level: 70,
    displayOrder: 12,
  },
];
