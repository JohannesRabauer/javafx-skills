# Use Cases — JavaFX Application Lifecycle

Covers startup, shutdown, stage creation, and module-aware application scaffolding.

## Actors and Primary Use Cases

```mermaid
graph LR
    Dev([Developer])
    App([JavaFX Application])
    Stage([Primary Stage])

    Dev --> UC1["UC-LIFE-1\nCreate Application entry point"]
    Dev --> UC2["UC-LIFE-2\nConfigure primary stage"]
    Dev --> UC3["UC-LIFE-3\nLoad initial scene"]
    Dev --> UC4["UC-LIFE-4\nHandle shutdown cleanly"]

    App --> UC1
    App --> UC3
    Stage --> UC2
    Stage --> UC4
```

## Startup Flow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant JVM as JVM
    participant App as Application
    participant Stage as Primary Stage

    Dev->>JVM: launch(...)
    JVM->>App: init()
    JVM->>App: start(Stage)
    App->>Stage: setTitle(...)
    App->>Stage: setScene(...)
    App->>Stage: show()
    JVM->>App: stop() on shutdown
```

## Key gotchas

- Create and mutate UI state on the JavaFX Application Thread.
- Keep `init()` for non-UI setup; the `Stage` is only available in `start(...)`.
- Close background work explicitly in `stop()` when the application owns executors or services.
