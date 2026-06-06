---
name: javafx-ui-layout-navigation
description: Structure JavaFX scenes with layout panes, root swapping, dialogs, and reusable navigation patterns.
triggers:
  - javafx layout panes
  - borderpane navigation
  - swap scene root javafx
  - javafx navigation
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - layout
  - navigation
  - borderpane
  - scene-graph
  - dialogs
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX UI Layout and Navigation

Use this skill when the application needs stable scene composition, reusable views, and predictable
screen transitions without prematurely introducing a full framework.

## Example

```java
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;

public class MainShell extends BorderPane {

    public MainShell() {
        var homeButton = new Button("Home");
        var settingsButton = new Button("Settings");

        homeButton.setOnAction(event -> setCenter(createPage("Home")));
        settingsButton.setOnAction(event -> setCenter(createPage("Settings")));

        var topBar = new HBox(12, homeButton, settingsButton);
        topBar.setPadding(new Insets(16));

        setTop(topBar);
        setCenter(createPage("Home"));
    }

    private StackPane createPage(String title) {
        var pane = new StackPane(new Label(title));
        pane.setPadding(new Insets(24));
        return pane;
    }
}
```

## Setup notes

- Prefer layout panes such as `BorderPane`, `VBox`, `HBox`, and `GridPane` before reaching for free
  positioning with `Pane`.
- Treat view swapping as navigation infrastructure, not as ad-hoc event-handler code spread across
  controls.
- Open dialogs or secondary stages only when the interaction truly deserves separate window state.

## Gotchas

- Many top-level windows are harder to coordinate than swapping content in one shell.
- Absolute coordinates become brittle as soon as resizing, localization, or theming changes.
- For framework-backed routing decisions, use `javafx-architecture-frameworks`.
