---
name: javafx-desktop-shell-integration
description: Build JavaFX desktop shells with workbenches, detachable tabs, custom stages, tray integration, and persisted layouts.
triggers:
  - javafx docking
  - detachable tabs javafx
  - custom undecorated stage javafx
  - javafx tray icon
compatibility:
  java: 17+
  javafx: 21+
category: platform-integration
tags:
  - desktop
  - workbench
  - docking
  - tray
  - stage
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Desktop Shell and Integration

Use this skill when the application behaves like a full desktop tool rather than a single-screen UI:
tabbed workspaces, detachable tools, custom stage chrome, tray icons, or persisted shell layout.

## Example

```java
import java.util.prefs.Preferences;
import javafx.scene.control.Tab;
import javafx.scene.control.TabPane;
import javafx.scene.layout.BorderPane;

public class WorkbenchShell extends BorderPane {

    private final Preferences preferences = Preferences.userNodeForPackage(WorkbenchShell.class);

    public WorkbenchShell() {
        var tabPane = new TabPane();
        tabPane.getTabs().addAll(
                new Tab("Explorer"),
                new Tab("Editor"),
                new Tab("Output")
        );

        var selectedIndex = preferences.getInt("selectedTab", 0);
        tabPane.getSelectionModel().select(Math.min(selectedIndex, tabPane.getTabs().size() - 1));
        tabPane.getSelectionModel().selectedIndexProperty().addListener((obs, oldValue, newValue) ->
                preferences.putInt("selectedTab", newValue.intValue())
        );

        setCenter(tabPane);
    }
}
```

## Setup notes

- Decide early whether the product is a standard single-window app, a tabbed workbench, or a
  docking / MDI-style tool.
- Persist workspace and window state from the first iteration if users can rearrange content.
- Treat tray, taskbar, and custom stage chrome as platform integration features with explicit
  fallback behavior.

## Gotchas

- Undecorated custom stages often lose native resize, accessibility, or platform conventions.
- Shell layout persistence becomes part of the product contract once users depend on it.
- Tray features are platform-sensitive and should fail visibly rather than silently.
