# Use Cases — JavaFX Desktop Shell and Integration

Derived from AwesomeJavaFX projects such as AnchorFX, DesktopPaneFX, WorkbenchFX, TabShell,
TabPanePro, StagePro, FX-BorderlessScene, FXTrayIcon, FXTaskbarProgressBar, CustomStage, and
PreferencesFX.

## Desktop Shell Topology

```mermaid
flowchart TD
    Start["Need a desktop app shell"] --> Shape{"Interaction model?"}
    Shape -- Single main window --> Main["Standard stage + navigation regions"]
    Shape -- Multi-document or detachable tabs --> Workbench["Workbench / docking / tab shell"]
    Shape -- Internal windows --> MDI["MDI / desktop pane"]
    Shape -- Native feel / utility app --> Tray["Tray, taskbar, and window chrome integration"]
```

## Shell Composition

```mermaid
graph TD
    Shell["Application shell"] --> Nav["Navigation / tab model"]
    Shell --> Window["Stage decoration and window controls"]
    Shell --> Prefs["Preferences and persisted layout"]
    Shell --> Integration["Tray / taskbar / desktop integration"]
    Shell --> Content["Editors, tools, dashboards, or viewers"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-SHELL-1\nCreate a docking or tabbed workbench"] --> UC2["UC-SHELL-2\nSupport detachable tools or internal windows"]
    UC2 --> UC3["UC-SHELL-3\nUse custom undecorated stages safely"]
    UC3 --> UC4["UC-SHELL-4\nPersist window layout and user preferences"]
    UC4 --> UC5["UC-SHELL-5\nExpose tray icons or taskbar progress for long-running apps"]
```

## Skill opportunities

- Skill for choosing between standard navigation, detachable tabs, docking, or MDI shells
- Skill for custom stage chrome, resizing, snapping, and platform-safe window controls
- Skill for desktop integration with tray menus, taskbar progress, and persisted user workspace

## Key gotchas

- Custom undecorated stages often break accessibility, resizing, and platform conventions unless
  carefully handled.
- Docking and detachable-tab shells need a durable layout persistence model from day one.
- Tray and taskbar features are platform-sensitive; support must degrade explicitly when unavailable.
