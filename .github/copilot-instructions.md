# GitHub Copilot Instructions for JavaFX Skills

Use this repository as a skill catalog for JavaFX.

## Preferred workflow

1. Read `skills/index.json` first.
2. Select the most relevant `skills/*/SKILL.md` files using `triggers`, `tags`, and `category`.
3. Use those skill files as the canonical repository guidance.
4. Validate JavaFX APIs and behavior against the official OpenJFX Javadoc and samples.

## Important constraints

- Target Java 17+ and JavaFX 21+ unless the repository clearly states otherwise.
- Do not invent lifecycle hooks, CSS behavior, FXML semantics, or concurrency rules.
- Keep generated solutions aligned with real JavaFX patterns when possible.

## Catalog synchronization

- If you add, remove, or rename a skill, update `skills/index.json`, the related `docs/uc-*.md`
  coverage docs, and the `web/` site together.
- When the catalog shape changes, keep the website category labels and manifest grouping in sync.
- The website is a live catalog view, so do not treat it as optional decoration.
