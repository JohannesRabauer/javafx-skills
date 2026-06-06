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

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface SkillIndex {
  version: number;
  repository: {
    name: string;
    description: string;
    baseline: SkillCompatibility;
    updated?: string;
  };
  skills: Skill[];
  skillGroups: SkillGroup[];
}

export interface AnnotatedSkill extends Skill {
  cardIndex: number;
  compatibilityLabel: string;
  categoryLabel: string;
}
