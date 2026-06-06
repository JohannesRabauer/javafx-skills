# Use Cases — JavaFX Devtools, Inspection, and Debugging

Derived from AwesomeJavaFX entries such as Scenic View, CssFX, Component-Inspector,
redux-javafx-devtool, Gluon Scene Builder, e(fx)clipse, Webview Debugger, and diagnostic apps such
as JStackFX.

## Tooling Workflow

```mermaid
flowchart LR
    Build["Build UI"] --> Inspect["Inspect scene graph and component state"]
    Inspect --> Style["Debug and reload CSS"]
    Style --> Diagnose["Inspect state, events, or thread diagnostics"]
    Diagnose --> Iterate["Refine layout, state flow, and behavior"]
```

## Primary Use Cases

```mermaid
graph LR
    Dev([Developer]) --> UC1["UC-DEV-1\nInspect live scene graphs and component properties"]
    Dev --> UC2["UC-DEV-2\nReload and debug CSS without restarting the app"]
    Dev --> UC3["UC-DEV-3\nVisualize application state changes and reducer actions"]
    Dev --> UC4["UC-DEV-4\nUse design-time tooling for FXML and component composition"]
    Dev --> UC5["UC-DEV-5\nSurface runtime diagnostics such as thread or browser state"]
```

## Candidate skills from this domain

- Skill for scene-graph inspection and layout troubleshooting
- Skill for CSS iteration workflows and visual debugging
- Skill for state-devtool integration in reactive JavaFX apps
- Skill for design-time tooling with Scene Builder and IDE support

## Key gotchas

- Debug tooling is most useful when it is built into the development workflow, not added after UI
  complexity explodes.
- CSS and state debugging should not leak into production builds unintentionally.
- Tooling that introspects browser state, reducers, or threads needs explicit separation from user
  features.
