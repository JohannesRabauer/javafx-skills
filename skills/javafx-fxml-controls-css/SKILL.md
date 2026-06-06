---
name: javafx-fxml-controls-css
description: Compose JavaFX views with FXML, controller injection, and control wiring.
triggers:
  - javafx fxml
  - javafx controller
  - fx:id
  - fxml loader
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - fxml
  - controller
  - controls
  - css
  - styling
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX FXML, Controls, and CSS

Use this skill when the project should separate view markup, controller logic, and styling.

## Example

```xml
<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.geometry.Insets?>
<?import javafx.scene.control.Button?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.layout.VBox?>

<VBox xmlns="http://javafx.com/javafx/21"
      xmlns:fx="http://javafx.com/fxml/1"
      fx:controller="com.example.app.ui.HomeController"
      spacing="12">
    <padding>
        <Insets top="24" right="24" bottom="24" left="24" />
    </padding>

    <Label fx:id="titleLabel" text="Welcome" styleClass="title" />
    <Button text="Refresh" onAction="#refresh" />
</VBox>
```

```java
package com.example.app.ui;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class HomeController {

    @FXML
    private Label titleLabel;

    @FXML
    private void refresh() {
        titleLabel.setText("Refreshed");
    }
}
```

```css
.title {
    -fx-font-size: 20px;
    -fx-font-weight: bold;
}
```

## Setup notes

- Keep controller classes focused on UI orchestration and delegate business logic elsewhere.
- Use stylesheet classes instead of inline style strings for maintainability.
- Resolve FXML resources via the classpath relative to the owning class or module.
- Use `javafx-theming-icons-styling` for broader theme-system, icon-pack, and CSS architecture work.

## Gotchas

- `fx:id` mismatches fail at load time, not compile time.
- Modular applications must `opens` FXML controller packages to `javafx.fxml`.
- CSS selectors target JavaFX style classes and pseudo-classes, not web CSS semantics one-to-one.
