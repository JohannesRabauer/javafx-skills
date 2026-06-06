import type { APIRoute } from 'astro';
import { skills } from '../data/skills';

const skillFiles = import.meta.glob('../../../skills/*/SKILL.md', {
  query: '?raw',
  import: 'default'
});

export const GET: APIRoute = async () => {
  const sections: string[] = ['# JavaFX Skills — Full Reference', ''];

  for (const skill of skills) {
    const key = Object.keys(skillFiles).find((entry) => entry.includes(`/${skill.name}/SKILL.md`));
    if (!key) {
      continue;
    }
    const content = (await skillFiles[key]()) as string;
    sections.push(`## ${skill.name}`, '', content.trim(), '', '---', '');
  }

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
