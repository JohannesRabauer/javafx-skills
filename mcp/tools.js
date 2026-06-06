import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const skillsDir = resolve(__dirname, '../skills');

const index = JSON.parse(readFileSync(resolve(skillsDir, 'index.json'), 'utf-8'));
export const skills = index.skills;

export function getSkillContent(name) {
  return readFileSync(resolve(skillsDir, name, 'SKILL.md'), 'utf-8');
}

export function search(query) {
  const q = query.toLowerCase();
  return skills.filter((skill) =>
    skill.name.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q) ||
    skill.category.toLowerCase().includes(q) ||
    skill.tags.some((tag) => tag.toLowerCase().includes(q)) ||
    skill.triggers.some((trigger) => trigger.toLowerCase().includes(q))
  );
}

export function createMcpServer() {
  const server = new Server(
    { name: 'javafx-skills', version: '1.0.0' },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: 'list_skills',
        description:
          'List all available JavaFX coding skills with name, description, category, compatibility, and tags.',
        inputSchema: { type: 'object', properties: {} }
      },
      {
        name: 'get_skill',
        description:
          'Return the full SKILL.md content for one skill. Use this to load the actual coding guidance.',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Exact skill name, e.g. "javafx-project-starter"'
            }
          },
          required: ['name']
        }
      },
      {
        name: 'search_skills',
        description:
          'Search skills by keyword across names, descriptions, tags, triggers, and categories.',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string', description: 'Search keyword or phrase' }
          },
          required: ['query']
        }
      }
    ]
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === 'list_skills') {
      const rows = skills.map((skill) => ({
        name: skill.name,
        description: skill.description.trim().replace(/\s+/g, ' '),
        category: skill.category,
        compatibility: skill.compatibility,
        tags: skill.tags
      }));
      return { content: [{ type: 'text', text: JSON.stringify(rows, null, 2) }] };
    }

    if (name === 'get_skill') {
      const skill = skills.find((entry) => entry.name === args.name);
      if (!skill) {
        return {
          content: [{ type: 'text', text: `No skill named "${args.name}". Use list_skills to see all names.` }],
          isError: true
        };
      }
      return { content: [{ type: 'text', text: getSkillContent(skill.name) }] };
    }

    if (name === 'search_skills') {
      const hits = search(args.query);
      if (hits.length === 0) {
        return { content: [{ type: 'text', text: `No skills matched "${args.query}".` }] };
      }
      const rows = hits.map((skill) => ({
        name: skill.name,
        description: skill.description.trim().replace(/\s+/g, ' '),
        category: skill.category,
        compatibility: skill.compatibility,
        tags: skill.tags,
        triggers: skill.triggers
      }));
      return { content: [{ type: 'text', text: JSON.stringify(rows, null, 2) }] };
    }

    return {
      content: [{ type: 'text', text: `Unknown tool: ${name}` }],
      isError: true
    };
  });

  return server;
}
