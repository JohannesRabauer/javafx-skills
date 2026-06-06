---
name: javafx-testing-packaging-distribution
description: Test JavaFX UIs and ship them with jlink, jpackage, auto-updaters, and target-aware distribution choices.
triggers:
  - testfx javafx
  - jpackage javafx
  - update4j
  - javafx distribution
compatibility:
  java: 17+
  javafx: 21+
category: project-setup
tags:
  - testing
  - packaging
  - jpackage
  - updates
  - distribution
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
  - bash
---

# JavaFX Testing, Packaging, and Distribution

Use this skill when the requirement spans UI automation, installer creation, runtime-image setup, or
choosing how the app should be delivered to desktop, browser, mobile, or embedded targets.

## Example

```java
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import org.junit.jupiter.api.Test;
import org.testfx.framework.junit5.ApplicationTest;

import static org.testfx.api.FxAssert.verifyThat;
import static org.testfx.matcher.control.LabeledMatchers.hasText;

public class HelloViewTest extends ApplicationTest {

    @Override
    public void start(javafx.stage.Stage stage) {
        stage.setScene(new javafx.scene.Scene(new StackPane(new Button("Hello")), 240, 120));
        stage.show();
    }

    @Test
    void showsHelloButton() {
        verifyThat(".button", hasText("Hello"));
    }
}
```

## Setup notes

- Use TestFX for scene-graph automation and assertion libraries for control state and binding checks.
- Build runtime images with `jlink` and installers with `jpackage` once the module graph is stable.
- Treat auto-update tools such as Update4j or FXLauncher as deployment architecture, not a late add-on.
- Keep browser, mobile, and embedded targets as explicit product decisions because packaging and
  capability constraints differ materially.

## Gotchas

- UI tests become flaky when dialogs, background work, and animations are not synchronized.
- Packaging must account for optional modules such as media or web support.
- Distribution workflows should be repeatable in CI rather than dependent on manual local steps.
