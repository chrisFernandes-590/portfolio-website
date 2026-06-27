import { aiPlanner } from "./ai-planner";
import { gitDesktop } from "./git-desktop";
import type { Project } from "@/types/Project";

export const projects: Project[] = [aiPlanner, gitDesktop];

export { aiPlanner, gitDesktop };
