export type MilestoneStatus = "completed" | "pending";

export interface Milestone {
  id: string;
  title: string;
  status: MilestoneStatus;
}
