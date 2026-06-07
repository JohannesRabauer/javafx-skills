# JavaFX Skills

`javafx-skills` is a repository of reusable **AI coding skills for JavaFX**.

The canonical source of truth is:

- `skills/*/SKILL.md` — one skill per directory, written in Markdown with YAML front matter
- `skills/index.json` — machine-readable manifest for discovery and routing
- `agents.md` / `AGENTS.md` — repository-level instructions for coding agents
- `.claude-plugin/plugin.json` — Claude Code plugin manifest

## Goal

Make JavaFX implementation guidance easy to consume by humans, GitHub Copilot, Claude Code,
Cursor, and generic agent runtimes without locking the content into any single tool format.

## Repository layout

| Path | Purpose |
|---|---|
| `skills/*/SKILL.md` | Canonical skill documents |
| `skills/index.json` | Tool-friendly skill inventory |
| `docs/` | JavaFX domain analysis and starter docs |
| `agents.md` | Main repository guidance for coding agents |
| `AGENTS.md` | Compatibility entry point for agent tools |
| `.github/copilot-instructions.md` | GitHub Copilot-specific adapter |
| `CLAUDE.md` | Claude Code-specific adapter |
| `.cursor/rules/javafx-skills.mdc` | Cursor-specific adapter |
| `.claude-plugin/` | Claude Code marketplace and plugin manifests |
| `.mcp.json` | Claude Code MCP server configuration |
| `mcp/` | MCP servers for stdio and HTTP access |
| `web/` | Astro-powered GitHub Pages website |
| `.github/workflows/` | npm publish, release ZIP, and Pages deploy workflows |

## Canonical skill format

Every skill lives in `skills/<skill-name>/SKILL.md` and uses YAML front matter with these fields:

- `name`
- `description`
- `triggers`
- `compatibility`
- `category`
- `tags`
- `metadata`
- `allowed-tools`

This keeps the repository readable as plain Markdown while still being easy to index.

## How tools should consume this repo

1. Read `skills/index.json` to discover candidate skills.
2. Select one or more relevant `skills/*/SKILL.md` files by `category`, `tags`, or `triggers`.
3. Use those skills as implementation guidance.
4. When API details matter, verify them against the official OpenJFX Javadoc and OpenJFX samples.

## Distribution and deployment

The repository now ships the same install and deployment surfaces as the reference repository,
adapted for the JavaFX catalog:
 
- Claude Code plugin metadata via `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.mcp.json`
- npm package metadata and typed Node entry points via `package.json`, `index.js`, and `index.d.ts`
- MCP access via `mcp/server.js` (stdio) and `mcp/server-http.js` (HTTP)
- Render deployment config in `render.yaml`
- Smithery endpoint metadata in `smithery.yaml`
- GitHub Actions for:
  - publishing the npm package
  - releasing `javafx-skills.zip`
  - building and deploying the Astro website to GitHub Pages
- A static browser UI in `web/` for browsing and searching the catalog

## Use the catalog

| Surface | What it is for |
|---|---|
| Claude Code plugin marketplace | Add this repository as a marketplace with `/plugin marketplace add JohannesRabauer/javafx-skills`, then install `javafx-skills@javafx-skills-marketplace` so Claude Code gets the JavaFX skills plus the hosted MCP endpoint automatically. |
| [Website](https://johannesrabauer.github.io/javafx-skills/) | Browse the catalog in the browser, filter skills by category, search triggers and tags, and open per-skill pages for quick discovery. |
| [MCP server](https://javafx-skills.onrender.com) | Connect compatible MCP clients and AI tools to the live catalog so they can list skills, search by topic, and load full `SKILL.md` guidance programmatically. |
| [Smithery](https://smithery.ai/servers/rabauer-dev/javafx-skills) | Install and configure the hosted MCP server through Smithery for supported clients instead of wiring the endpoint manually. |
| [npm package](https://www.npmjs.com/package/javafx-skills) | Consume the manifest and skill files from Node.js tooling or local automation using the published package instead of cloning the repository. |

The website reads the skill manifest directly, so any catalog change should be kept in sync with
`skills/index.json`, the docs index, and the web UI together.

## Claude Code installation

Install this catalog with the same marketplace flow used by `vaadin/claude-plugin`:

1. Add the marketplace:

   ```shell
   /plugin marketplace add JohannesRabauer/javafx-skills
   ```

2. Install the plugin:

   ```shell
   /plugin install javafx-skills@javafx-skills-marketplace
   ```

For local development without installing from a marketplace, launch Claude Code from the repository
root with:

```shell
claude --plugin-dir .
```

## Compatibility notes

- Baseline target: **Java 17+**
- JavaFX baseline: **21+**
- The skill files are canonical; adapter files should point back to them rather than duplicating
  their content.
