export interface SkillCompatibility {
  java: string;
  javafx: string;
}

export interface Skill {
  name: string;
  path: string;
  description: string;
  triggers: string[];
  compatibility: SkillCompatibility;
  category: string;
  tags: string[];
}

export interface SkillWithContent extends Skill {
  content: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface RepositoryInfo {
  name: string;
  description: string;
  baseline: SkillCompatibility;
  updated?: string;
}

export interface SkillIndex {
  version: number;
  repository: RepositoryInfo;
  skills: Skill[];
  skillGroups: SkillGroup[];
}

export declare const index: SkillIndex;
export declare const skills: Skill[];
export declare function getSkillContent(name: string): string;
export declare function getSkill(name: string): SkillWithContent | null;
