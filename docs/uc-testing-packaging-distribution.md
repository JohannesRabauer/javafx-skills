# Use Cases — JavaFX Testing, Packaging, and Distribution

Derived from AwesomeJavaFX entries such as TestFX, assertj-javafx, TestFX-dsl, FXLauncher,
Update4j, Maven jpackage Template, Getdown, JavaFXPorts, JPro, WebFX, and ecosystem articles about
`jpackage`.

## Delivery Lifecycle

```mermaid
flowchart LR
    Build["Build app"] --> Test["Run UI and property tests"]
    Test --> Package["Create runtime image / installer"]
    Package --> Update["Ship updater or launcher"]
    Update --> Target{"Target environment?"}
    Target -- Desktop --> Native["Native installers"]
    Target -- Browser --> Web["Browser deployment"]
    Target -- Mobile / embedded --> Device["Mobile / embedded packaging"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-OPS-1\nAutomate JavaFX UI tests"] --> UC2["UC-OPS-2\nAssert properties, bindings, and control state"]
    UC2 --> UC3["UC-OPS-3\nBuild installable desktop bundles with jpackage"]
    UC3 --> UC4["UC-OPS-4\nAdd auto-update or launcher flows"]
    UC4 --> UC5["UC-OPS-5\nChoose desktop, browser, mobile, or embedded target strategy"]
```

## Skill opportunities

- Skill for TestFX-based UI automation and robust scene-graph assertions
- Skill for packaging JavaFX apps with `jlink` and `jpackage`
- Skill for auto-update and launcher integration with Update4j or FXLauncher-style flows
- Skill for selecting desktop vs browser vs mobile / embedded distribution models

## Key gotchas

- UI tests fail nondeterministically when background work, dialogs, or animations are not accounted
  for explicitly.
- Packaging must match the app's module graph and native dependencies, especially for media and
  WebView.
- Browser and mobile targets change the deployment model enough that they should be treated as
  separate product decisions, not late packaging tweaks.
