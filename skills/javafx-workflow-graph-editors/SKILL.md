---
name: javafx-workflow-graph-editors
description: Build node-based JavaFX workflow editors, graph canvases, and visual programming surfaces with clean model separation.
triggers:
  - graph editor javafx
  - workflow editor javafx
  - visual programming javafx
  - node graph javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - graph
  - workflow
  - nodes
  - editor
  - diagram
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Workflow and Graph Editors

Use this skill when the application lets users create or edit connected node graphs, workflows, or
visual programming layouts.

## Example

```java
import javafx.scene.control.Label;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Line;

public class GraphCanvas extends Pane {

    public GraphCanvas() {
        var a = node("Input", 60, 60);
        var b = node("Transform", 240, 160);
        var link = new Line(120, 90, 240, 190);
        getChildren().addAll(link, a, b);
    }

    private Label node(String title, double x, double y) {
        var label = new Label(title);
        label.relocate(x, y);
        label.setStyle("-fx-padding: 12; -fx-background-color: #1c2128; -fx-text-fill: white;");
        return label;
    }
}
```

## Setup notes

- Keep the graph model separate from the scene graph so persistence, undo/redo, and execution logic
  do not depend on node positions alone.
- Support zooming, panning, selection, and connection routing from the start.
- Prefer command objects or transactions for mutations so graph edits remain reversible.

## Gotchas

- A graph editor that stores only `Node` references becomes difficult to persist or test.
- Large graphs need virtualization or culling strategies to stay responsive.
- Connection hit-testing and edge routing are part of the product, not just decoration.
