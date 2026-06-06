---
name: javafx-theming-icons-styling
description: Apply JavaFX themes, icon packs, stylesheet architecture, and live styling workflows consistently.
triggers:
  - javafx theme
  - ikonli javafx
  - javafx css architecture
  - live css reload javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - theming
  - css
  - icons
  - branding
  - styling
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Theming, Icons, and Styling

Use this skill when the requirement is about consistent visual language, stylesheet structure, theme
libraries, icon packs, or development-time styling workflows.

## Example

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class ThemeDemoApp extends Application {

    @Override
    public void start(Stage stage) {
        var button = new Button("Primary Action");
        button.getStyleClass().add("primary-button");

        var scene = new Scene(new StackPane(button), 360, 180);
        scene.getStylesheets().add(getClass().getResource("/theme/app.css").toExternalForm());

        stage.setScene(scene);
        stage.show();
    }
}
```

```css
.root {
    -fx-font-family: "Inter";
    -fx-background-color: #101318;
}

.primary-button {
    -fx-background-color: #3f7cff;
    -fx-text-fill: white;
    -fx-font-weight: bold;
}
```

## Setup notes

- Define theme tokens and style classes early so views depend on semantic names instead of color
  literals.
- Introduce theme libraries such as JMetro, BootstrapFX, MaterialFX, JFoenix, or icon packs such as
  Ikonli only after deciding how much control the project wants over branding.
- Keep hot-reload or inspector tooling development-only.

## Gotchas

- Theme libraries and third-party controls often ship conflicting CSS assumptions.
- Inline styles are fine for spikes, but they block reusable theming later.
- Global theme switches should not require manually rewriting individual control styles.
