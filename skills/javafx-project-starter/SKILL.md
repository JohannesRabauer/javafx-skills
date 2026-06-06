---
name: javafx-project-starter
description: Scaffold a JavaFX application with baseline structure, module-aware startup wiring, and a first scene.
triggers:
  - create javafx project
  - initialize javafx application
  - new javafx starter
  - scaffold javafx app
compatibility:
  java: 17+
  javafx: 21+
category: project-setup
tags:
  - starter
  - scaffolding
  - application
  - stage
  - scene
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
  - bash
---

# JavaFX Project Starter

Use this skill to initialize a JavaFX application with a clean entry point, a primary stage, and a
first scene that can evolve into a larger UI architecture.

## Baseline structure

```text
src/main/java/
  com/example/app/
    MainApp.java
    ui/
      MainView.java
```

## Minimal application skeleton

```java
package com.example.app;

import com.example.app.ui.MainView;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class MainApp extends Application {

    @Override
    public void start(Stage stage) {
        var root = new MainView();
        var scene = new Scene(root, 960, 640);

        stage.setTitle("JavaFX App");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

```java
package com.example.app.ui;

import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;

public class MainView extends BorderPane {

    public MainView() {
        setPadding(new Insets(24));
        setCenter(new Label("Hello, JavaFX"));
    }
}
```

```java
module com.example.app {
    requires javafx.controls;

    exports com.example.app;
    exports com.example.app.ui;
}
```

## Setup notes

- Keep the first scene small and explicit; avoid premature multi-window complexity.
- Prefer extracting views into dedicated classes early instead of building everything in
  `Application.start(...)`.
- Document whether the project uses plain scene-graph construction, FXML, or a hybrid approach.
- Add only the JavaFX modules the project actually uses, then expand deliberately for FXML, media,
  WebView, or 3D.

## Gotchas

- UI creation belongs on the JavaFX Application Thread.
- If the project is modular, `module-info.java` must open controller packages when FXML is used.
- Keep build configuration aligned with the chosen JavaFX modules instead of adding everything by
  default.
