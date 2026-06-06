---
name: javafx-application-lifecycle
description: Manage the JavaFX Application lifecycle, primary stage setup, startup sequencing, and shutdown behavior.
triggers:
  - javafx application lifecycle
  - application start stage
  - application stop javafx
  - primary stage initialization
compatibility:
  java: 17+
  javafx: 21+
category: project-setup
tags:
  - application
  - lifecycle
  - stage
  - startup
  - shutdown
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Application Lifecycle

Use this skill when the application already exists or the question is specifically about
`Application.init()`, `start(Stage)`, `stop()`, or primary-stage ownership rather than initial
scaffolding.

## Example

```java
package com.example.app;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class MainApp extends Application {

    private ExecutorService executor;

    @Override
    public void init() {
        executor = Executors.newSingleThreadExecutor();
    }

    @Override
    public void start(Stage stage) {
        stage.setTitle("Lifecycle Demo");
        stage.setScene(new Scene(new Label("Ready"), 320, 160));
        stage.show();
    }

    @Override
    public void stop() {
        executor.shutdownNow();
    }
}
```

## Setup notes

- Keep `init()` for non-UI initialization; no scene graph access belongs there.
- Treat the primary `Stage` as application-level infrastructure and pass navigation decisions through
  a shell or coordinator instead of random controllers.
- Close executors, subscriptions, file watchers, and native resources explicitly in `stop()`.

## Gotchas

- The `Stage` is only available in `start(Stage)`, not in `init()`.
- UI changes must run on the JavaFX Application Thread.
- `javafx-project-starter` is the right skill for generating a new app skeleton; this skill is for
  lifecycle semantics and ownership boundaries inside an app.
