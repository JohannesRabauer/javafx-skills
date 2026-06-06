import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsDir = resolve(__dirname, 'skills');

export const index = JSON.parse(
  readFileSync(resolve(skillsDir, 'index.json'), 'utf-8')
);

export const skills = index.skills;

export function getSkillContent(name) {
  return readFileSync(resolve(skillsDir, name, 'SKILL.md'), 'utf-8');
}

export function getSkill(name) {
  const meta = skills.find((s) => s.name === name);
  if (!meta) {
    return null;
  }
  return { ...meta, content: getSkillContent(name) };
}
