---
name: javafx-concurrency-services
description: Use JavaFX Task and Service correctly for background work and responsive UIs.
triggers:
  - javafx task
  - javafx service
  - background work javafx
  - platform runlater
compatibility:
  java: 17+
  javafx: 21+
category: platform
tags:
  - task
  - service
  - threading
  - background
  - responsiveness
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Concurrency and Services

Use this skill when expensive work must stay off the JavaFX Application Thread while the UI
remains observable and responsive.

## Example

```java
import javafx.concurrent.Task;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ProgressBar;
import javafx.scene.layout.VBox;

public class LoaderView extends VBox {

    public LoaderView() {
        var status = new Label("Idle");
        var progress = new ProgressBar(0);
        var button = new Button("Load");

        button.setOnAction(event -> {
            Task<String> task = new Task<>() {
                @Override
                protected String call() throws Exception {
                    updateMessage("Loading data...");
                    updateProgress(0.5, 1.0);
                    Thread.sleep(250);
                    updateProgress(1.0, 1.0);
                    return "Done";
                }
            };

            status.textProperty().bind(task.messageProperty());
            progress.progressProperty().bind(task.progressProperty());
            task.setOnSucceeded(done -> {
                status.textProperty().unbind();
                status.setText(task.getValue());
            });

            var thread = new Thread(task, "loader-task");
            thread.setDaemon(true);
            thread.start();
        });

        getChildren().addAll(status, progress, button);
    }
}
```

## Setup notes

- Prefer `Task` for one-shot work and `Service` for restartable workflows.
- Bind message and progress properties so the UI reflects worker state without manual polling.
- Keep executor ownership explicit when the application manages many background operations.

## Gotchas

- Do not touch scene graph nodes from `call()`.
- Unbind UI properties when a completed worker should no longer own the label or progress bar.
- Surface failure states through `setOnFailed(...)` or worker state bindings instead of swallowing
  exceptions.
