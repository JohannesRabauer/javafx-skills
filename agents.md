# JavaFX Skills Repository Guide for Coding Agents

This repository stores reusable AI coding skills for **JavaFX**.

## Repository roles

- `docs/` — JavaFX domain analysis and starter coverage documents
- `skills/` — final agent-facing skill packages, each in `skills/<skill-name>/SKILL.md`
- `skills/index.json` — machine-readable manifest for discovery by AI tools

## Primary rule

Do **not** invent JavaFX APIs, lifecycle hooks, CSS behavior, FXML semantics, concurrency rules,
or module names. Verify them against authoritative JavaFX sources first:

1. the official OpenJFX Javadoc
2. the official OpenJFX documentation and samples

If the API is uncertain, say so in the skill draft or leave a TODO note rather than presenting
guesses as facts.

## What good skill content looks like

Every skill should be practical, implementation-oriented, and optimized for code generation.
Follow the established pattern already used in this repo:

1. YAML front matter with:
   - `name`
   - `description`
   - `triggers`
   - `compatibility`
   - `category`
   - `tags`
   - `metadata`
   - `allowed-tools`
2. A clear title and short overview
3. Copyable Java examples that match real JavaFX usage
4. Dependency or setup notes when relevant
5. A **Gotchas** section with failure-prone details
6. References to local supporting files when needed

## Authoring standards

- Target **Java 17+** and **JavaFX 21+** unless the repository clearly moves to a newer baseline.
- Prefer Java examples unless a request explicitly asks for Kotlin.
- Keep examples small but complete enough to paste into a real project.
- Explain JavaFX application-thread constraints, initialization order, and controller wiring when
  they matter.
- Call out CSS selectors, resource paths, property binding behavior, and background-thread caveats.
- Prefer exact JavaFX terminology from the public API over generic UI wording.

## Naming and placement conventions

- Add new skills under `skills/javafx-<topic>/SKILL.md`
- Add supporting references under `skills/javafx-<topic>/references/`
- Keep domain analysis docs in `docs/uc-*.md`
- Use lowercase kebab-case for new directories and files unless JavaFX naming requires otherwise

## Catalog synchronization

- When a skill is added, removed, or renamed, update `skills/index.json`, the relevant `docs/uc-*.md`
  files, and the `web/` site in the same change.
- If the catalog gains a new category or grouping, update the website's category labels and any
  related repo guidance so the UI, manifest, and docs stay aligned.
- Treat the website as a live view of the catalog, not as a separate copy of the skill list.

## Catalog synchronization

- When a skill is added, removed, or renamed, update `skills/index.json`, the relevant `docs/uc-*.md`
  files, and the `web/` site in the same change.
- If the catalog gains a new category or grouping, update the website's category labels and any
  related repo guidance so the UI, manifest, and docs stay aligned.
- Treat the website as a live view of the catalog, not as a separate copy of the skill list.

## How to research before editing

Before writing a new skill or revising an existing one:

1. Identify the relevant JavaFX package or feature area
2. Check the public API in the OpenJFX Javadoc
3. Find an official sample or documentation example for the same pattern
4. Capture the most common and the most failure-prone patterns
5. Write the skill around those proven patterns

## Content boundaries

- Focus on **how to build with JavaFX**, not on generic Java tutorials
- Do not duplicate large chunks of library source or Javadoc
- Do not include speculative roadmap features
- Do not blur JavaFX with other UI frameworks or game engines

## Preferred output for generated skills

When asked to create or update a skill, produce:

1. the `SKILL.md` file
2. any minimal supporting reference files required by that skill
3. an updated `skills/index.json` entry if skill metadata changed
4. related updates in `docs/` only if the repository structure or coverage changed materially

## Quality bar

A skill is ready when it is:

- grounded in current JavaFX APIs and docs
- internally consistent with this repository's format
- actionable for an AI coding agent
- explicit about caveats that commonly break implementations
