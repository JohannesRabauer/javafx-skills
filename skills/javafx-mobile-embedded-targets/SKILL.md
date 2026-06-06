---
name: javafx-mobile-embedded-targets
description: Plan JavaFX applications for mobile, embedded, browser-delivered, and multi-target runtimes with explicit platform boundaries.
triggers:
  - javafx mobile
  - javafx embedded
  - javafxports
  - raspberry pi javafx
compatibility:
  java: 17+
  javafx: 21+
category: platform-integration
tags:
  - mobile
  - embedded
  - browser
  - deployment
  - platform
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Mobile, Embedded, and Multi-Target Delivery

Use this skill when the same JavaFX codebase must support desktop plus browser, mobile, or embedded
targets, or when the product is device-oriented from the start.

## Example

```java
import javafx.application.Application;
import javafx.application.ConditionalFeature;
import javafx.application.Platform;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class TargetAwareApp extends Application {

    @Override
    public void start(Stage stage) {
        boolean touch = Platform.isSupported(ConditionalFeature.INPUT_TOUCH);
        var label = new Label(touch ? "Touch-first layout" : "Desktop layout");

        stage.setScene(new Scene(new StackPane(label), 480, 320));
        stage.show();
    }
}
```

## Setup notes

- Treat platform differences as architecture, not just packaging.
- Keep device services, browser bridges, and native integrations behind explicit adapters.
- Use this skill with `javafx-testing-packaging-distribution` and `javafx-web-maps-embedded-integration`
  when delivery and browser integration overlap.

## Gotchas

- Desktop assumptions about screen size, hover, filesystem access, and media support do not carry
  over cleanly to other targets.
- Platform-specific APIs should not leak into core UI code.
- Multi-target support is easiest when platform capability checks are centralized.
