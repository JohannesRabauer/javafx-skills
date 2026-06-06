# Use Cases — Real-World JavaFX Application Patterns

Derived from the AwesomeJavaFX real-world examples section, which highlights recurring application
types rather than isolated widgets: editors, developer tools, dashboards, media apps, launchers,
search tools, and knowledge-management software.

## Product Pattern Clusters

```mermaid
mindmap
  root((JavaFX App Patterns))
    Editors
      Document editors
      Rich text tools
      Diagram and mind-map tools
      Annotation tools
    Developer Tools
      API clients
      Bytecode or thread-dump tools
      Redis and ZooKeeper GUIs
      Search and inspection utilities
    Dashboards and Analytics
      Time-series charts
      Scientific visualization
      Monitoring panels
      Financial or status dashboards
    Media and Content
      Media players
      Ebook and PDF workflows
      Music tools
      Browser-assisted apps
    Productivity and Launchers
      Preferences-heavy apps
      Knowledge management
      Launchers
      Wallets and multi-account tools
```

## Use-Case Extraction Flow

```mermaid
flowchart TD
    Example["Real-world JavaFX product"] --> Pattern{"What repeats?"}
    Pattern -- Complex workspace --> Shell["Desktop shell skill"]
    Pattern -- Data-heavy tables or charts --> Data["Controls / dashboard skill"]
    Pattern -- Long-running IO --> Async["Concurrency / background skill"]
    Pattern -- Packaging-sensitive distribution --> Dist["Packaging / updater skill"]
    Pattern -- Editing / validation --> Edit["Forms / rich text / validation skill"]
```

## Skill opportunities

- Skill for editor-style apps with tool panes, documents, and persisted workspace state
- Skill for developer-tool UIs that need tables, trees, search, logs, and async operations
- Skill for dashboard and analytics apps with real-time charts and high-density status components
- Skill for content-centric apps combining media, WebView, rich text, and file workflows

## Key gotchas

- Real products usually combine several JavaFX domains; single-feature skills are rarely enough.
- Search, indexing, file IO, and preview pipelines almost always require careful background-task
  design.
- Workspace persistence, import / export, and error reporting are often the difference between a
  demo and a usable desktop application.
