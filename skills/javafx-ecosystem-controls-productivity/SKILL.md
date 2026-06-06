---
name: javafx-ecosystem-controls-productivity
description: Choose and integrate mature third-party JavaFX control libraries for forms, productivity widgets, theming, and developer workflow support.
triggers:
  - controlsfx javafx
  - formsfx javafx
  - validatorfx javafx
  - javafx third-party controls
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - controls
  - productivity
  - forms
  - themes
  - third-party
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Ecosystem Controls and Productivity

Use this skill when the project should extend core JavaFX with mature libraries such as ControlsFX,
FormsFX, ValidatorFX, PreferencesFX, RichTextFX, CalendarFX, GemsFX, MaterialFX, JFoenix, JMetro,
Ikonli, FXRibbon, or similar productivity-oriented widgets.

## Example

```java
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;

public class ProductivityPane extends VBox {

    public ProductivityPane() {
        var title = new Label("Choose the right control library for the job");
        var notes = new TextField();
        notes.setPromptText("Replace with a third-party control only when it removes real complexity");

        var save = new Button("Save");
        save.setOnAction(event -> System.out.println(notes.getText()));

        getChildren().addAll(title, notes, save);
    }
}
```

## Setup notes

- Prefer core JavaFX controls first; add ecosystem libraries only when they reduce real product
  complexity.
- Decide whether the library owns visuals, validation, navigation, or editing behavior before wiring
  it into a screen.
- Keep styling conventions and control-library dependencies centralized so themes do not leak across
  the codebase.

## Gotchas

- Third-party controls often carry CSS and skin assumptions that conflict with the base app theme.
- Mixing too many control suites in one view creates inconsistent behavior and styling.
- Keep productivity widgets behind a small integration layer so they can be swapped later.
