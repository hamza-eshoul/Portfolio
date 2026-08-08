import { ReactNode } from "react";

export enum SkillCategory {
  Frontend = "Frontend",
  Backend = "Backend",
  DevOps = "DevOps",
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillSet {
  main: Skill[];
  complementary?: Skill[];
}

export type SkillsData = Record<SkillCategory, SkillSet>;

export interface ProjectDescriptionData {
  text: string;
  highlight: string;
}

export interface ProjectData {
  isReverse: boolean;
  image: string;
  title: string;
  repoLink: string;
  previewLink: string;
  technologies: string[];
  description: ProjectDescriptionData;
}
