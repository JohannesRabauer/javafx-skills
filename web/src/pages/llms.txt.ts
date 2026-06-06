import type { APIRoute } from 'astro';
import { skills } from '../data/skills';

const RAW = 'https://raw.githubusercontent.com/JohannesRabauer/javafx-skills/main/skills';

export const GET: APIRoute = () => {
  const lines = [
    '# JavaFX Skills',
    '',
    '> Canonical, tool-agnostic coding skills for AI-assisted JavaFX development (Java 17+, JavaFX 21+).',
    '',
    '## Skills',
    '',
    ...skills.map((skill) => `- [${skill.name}](${RAW}/${skill.name}/SKILL.md): ${skill.description.trim().replace(/\s+/g, ' ')}`),
    '',
    '## Resources',
    '',
    `- [Index](${RAW}/../index.json): Full index with metadata, triggers, tags, and categories`,
    `- [Download ZIP](https://github.com/JohannesRabauer/javafx-skills/releases/latest/download/javafx-skills.zip): All skills as a single archive`,
    `- [npm package](https://www.npmjs.com/package/javafx-skills): Programmatic access via Node.js`,
    `- [Website](https://johannesrabauer.github.io/javafx-skills/): Browse and search skills`,
    `- [Repository](https://github.com/JohannesRabauer/javafx-skills): Source on GitHub`
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
