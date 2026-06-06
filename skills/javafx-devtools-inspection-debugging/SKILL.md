---
name: javafx-devtools-inspection-debugging
description: Improve JavaFX development with scene inspection, CSS debugging, state-devtools, and diagnostic overlays.
triggers:
  - scenic view javafx
  - javafx css debugging
  - scene graph inspector javafx
  - javafx devtools
compatibility:
  java: 17+
  javafx: 21+
category: tooling
tags:
  - devtools
  - inspection
  - debugging
  - css
  - diagnostics
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Devtools, Inspection, and Debugging

Use this skill when the problem is understanding what the UI is doing: layout issues, CSS
application, live scene-graph state, reducer events, thread diagnostics, or development-only
debugging overlays.

## Example

```java
import javafx.scene.control.Label;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.StackPane;

public class InspectableView extends StackPane {

    public InspectableView() {
        var root = new BorderPane(new Label("Press F12"));
        var overlay = new Label("Debug overlay");
        overlay.setVisible(false);
        overlay.setManaged(false);

        setOnKeyPressed(event -> {
            if (event.getCode() == KeyCode.F12) {
                overlay.setVisible(!overlay.isVisible());
            }
        });

        getChildren().addAll(root, overlay);
        setFocusTraversable(true);
    }
}
```

## Setup notes

- Use tools such as Scenic View, CssFX, Scene Builder, browser debuggers, or custom overlays to
  shorten feedback loops during UI work.
- Keep development-only tools behind build flags, shortcuts, or explicit environment checks.
- If the app uses reducer or event-stream state, expose a focused debug surface for actions and state changes.

## Gotchas

- Diagnostic helpers should not leak into production unintentionally.
- CSS issues are often easier to solve with live inspection than by guessing selector precedence.
- Debug surfaces must stay read-mostly unless the product explicitly supports live editing tools.
