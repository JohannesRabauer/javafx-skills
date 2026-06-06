import type { SkillIndex, AnnotatedSkill } from '../types/skills';
import rawData from '@skills/index.json';

const data = rawData as SkillIndex;

export const totalCount = data.skills.length;
export const repository = data.repository;
export const groups = data.skillGroups;

const categoryLabels: Record<string, string> = {
  'project-setup': 'Project Setup',
  'ui-core': 'UI Core',
  architecture: 'Architecture',
  'ui-advanced': 'UI Advanced',
  'platform-integration': 'Platform',
  tooling: 'Tooling',
  'app-patterns': 'App Patterns'
};

export function compatibilityLabel(skill: { compatibility: { java: string; javafx: string } }) {
  return `Java ${skill.compatibility.java} · JavaFX ${skill.compatibility.javafx}`;
}

export const skills: AnnotatedSkill[] = data.skills.map((skill, index) => ({
  ...skill,
  cardIndex: index,
  compatibilityLabel: compatibilityLabel(skill),
  categoryLabel: categoryLabels[skill.category] ?? skill.category
}));

export const categoryCounts = skills.reduce<Record<string, number>>((acc, skill) => {
  acc[skill.category] = (acc[skill.category] ?? 0) + 1;
  return acc;
}, {});

export const categories = [
  { key: 'all', label: 'All', count: totalCount },
  ...Object.entries(categoryCounts).map(([key, count]) => ({
    key,
    label: categoryLabels[key] ?? key,
    count
  }))
];
