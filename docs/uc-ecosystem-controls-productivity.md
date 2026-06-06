# Use Cases — JavaFX Ecosystem Controls and Productivity

Derived from AwesomeJavaFX entries such as ControlsFX, FormsFX, ValidatorFX, PreferencesFX,
RichTextFX, RichTextArea, CalendarFX, ChartFx, Medusa, TilesFX, MaterialFX, BootstrapFX, JMetro,
Scenic View, and CssFX.

## Ecosystem Decision Flow

```mermaid
flowchart TD
    Need["Need more than core JavaFX controls"] --> Kind{"What is missing?"}
    Kind -- Business forms --> Forms["Forms / validation / preferences"]
    Kind -- Rich content --> Rich["Rich text / PDF / calendars / charts"]
    Kind -- Styling --> Theme["Themes / icons / CSS workflow"]
    Kind -- Diagnostics --> Tooling["Scene inspection / CSS live reload / component inspection"]
    Kind -- High-density dashboards --> Dash["Tiles / gauges / scientific charts"]
```

## Primary Use Cases

```mermaid
graph LR
    Dev([Developer]) --> UC1["UC-ECO-1\nSelect mature third-party controls instead of rebuilding them"]
    Dev --> UC2["UC-ECO-2\nGenerate business forms with validation and preference panels"]
    Dev --> UC3["UC-ECO-3\nApply consistent theming, icon packs, and CSS workflows"]
    Dev --> UC4["UC-ECO-4\nInspect scene graphs and iterate on layout faster"]
    Dev --> UC5["UC-ECO-5\nCompose dashboards, charts, and data-heavy widgets"]
```

## Skill opportunities

- Skill for evaluating when to use ControlsFX, FormsFX, ValidatorFX, or PreferencesFX
- Skill for integrating rich text, calendar, chart, and dashboard components into a JavaFX shell
- Skill for theming with JMetro, BootstrapFX, MaterialFX, icon packs, and CSS reload workflows
- Skill for developer tooling with Scenic View, CssFX, and component inspection utilities

## Key gotchas

- Third-party controls often bring their own CSS expectations; theme conflicts are common.
- Validation, forms, and preferences should share a single state model instead of separate copies of
  the same settings.
- Rich widgets can increase startup cost and styling complexity, so isolate them behind reusable
  modules rather than scattering direct dependencies everywhere.
