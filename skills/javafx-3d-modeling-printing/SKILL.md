---
name: javafx-3d-modeling-printing
description: Build JavaFX 3D modeling tools and print/export workflows with isolated geometry generation and preview rendering.
triggers:
  - javafx 3d modeling
  - csg javafx
  - javafx cad
  - 3d printing javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - 3d
  - cad
  - geometry
  - printing
  - modeling
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX 3D Modeling and Printing

Use this skill when the project needs a JavaFX 3D preview surface for CAD-like geometry generation,
solid modeling, or export-to-print workflows.

## Example

```java
import javafx.scene.Group;
import javafx.scene.SceneAntialiasing;
import javafx.scene.SubScene;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Box;

public class ModelPreviewPane extends BorderPane {

    public ModelPreviewPane() {
        var shape = new Box(140, 90, 60);
        var preview = new SubScene(new Group(shape), 480, 360, true, SceneAntialiasing.BALANCED);
        preview.setFill(Color.web("#202020"));
        setCenter(preview);
    }
}
```

## Setup notes

- Treat 3D preview, geometry generation, and export/printing as separate concerns.
- Keep CAD or CSG libraries behind a narrow model layer so the UI can refresh from parameters.
- Use JavaFX 3D for visualization, but isolate export code for STL, OBJ, or slicer pipelines.

## Gotchas

- JavaFX 3D preview does not replace geometry generation or export logic.
- Mesh generation and printing workflows are usually library-specific and should not leak into views.
- Complex models need thoughtful camera, lighting, and interaction handling to stay usable.
