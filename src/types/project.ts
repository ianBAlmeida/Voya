import { Milestone } from "./milestone";

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  isPriority: boolean;
  milestones: Milestone[];
}
