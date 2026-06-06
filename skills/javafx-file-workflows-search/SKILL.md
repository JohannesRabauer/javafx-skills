---
name: javafx-file-workflows-search
description: Build JavaFX file choosers, directory watches, import/export flows, and desktop search interfaces safely.
triggers:
  - javafx file chooser
  - fxfilechooser
  - livedirsfx
  - javafx desktop search
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - files
  - search
  - import
  - export
  - directories
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX File Workflows and Search

Use this skill when the application is file-centric: open/save flows, directory watching, CSV or
structured imports, or desktop search and indexing tools.

## Example

```java
import java.io.File;
import javafx.collections.FXCollections;
import javafx.collections.transformation.FilteredList;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.stage.FileChooser;
import javafx.stage.Window;

public class FileSearchView extends BorderPane {

    private final FilteredList<String> files = new FilteredList<>(
            FXCollections.observableArrayList("report.csv", "notes.txt", "summary.json"),
            file -> true
    );

    public FileSearchView(Window owner) {
        var query = new TextField();
        query.setPromptText("Filter files");
        query.textProperty().addListener((obs, oldValue, newValue) ->
                files.setPredicate(name -> name.toLowerCase().contains(newValue.toLowerCase()))
        );

        var list = new ListView<>(files);
        var chooser = new FileChooser();
        chooser.setTitle("Open File");

        list.setOnMouseClicked(event -> {
            if (event.getClickCount() == 2) {
                File selected = chooser.showOpenDialog(owner);
                if (selected != null) {
                    files.getSource().add(selected.getName());
                }
            }
        });

        setTop(query);
        setCenter(list);
    }
}
```

## Setup notes

- Keep scanning, indexing, and directory watch work off the FX thread.
- Make file permissions, missing paths, and parse errors visible in the UI rather than silently skipping them.
- Use focused libraries such as FXFileChooser or LiveDirsFX when the file workflow itself is a core feature.

## Gotchas

- Large directories and search results need incremental loading or virtualization.
- File-system state changes can invalidate current selections unexpectedly.
- Import/export flows are product workflows, not just button handlers.
