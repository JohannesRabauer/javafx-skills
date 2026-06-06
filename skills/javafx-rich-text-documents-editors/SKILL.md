---
name: javafx-rich-text-documents-editors
description: Build JavaFX editor-style applications for rich text, documents, annotation, and file-centric workflows.
triggers:
  - richtextfx javafx
  - javafx editor workspace
  - document preview javafx
  - javafx annotation tool
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - editors
  - rich-text
  - documents
  - annotation
  - workspace
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Rich Text, Documents, and Editors

Use this skill when the application behaves like an editor: document tabs, preview panes, annotation
surfaces, search, undo/redo, or export-oriented workflows.

## Example

```java
import javafx.geometry.Orientation;
import javafx.scene.control.ListView;
import javafx.scene.control.TextArea;
import javafx.scene.control.ToolBar;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.SplitPane;

public class EditorShell extends BorderPane {

    public EditorShell() {
        var files = new ListView<String>();
        files.getItems().addAll("notes.md", "draft.txt", "summary.adoc");

        var editor = new TextArea();
        var preview = new TextArea();
        preview.setEditable(false);

        editor.textProperty().addListener((obs, oldValue, newValue) -> preview.setText(newValue));

        var split = new SplitPane(editor, preview);
        split.setOrientation(Orientation.HORIZONTAL);

        setTop(new ToolBar());
        setLeft(files);
        setCenter(split);
    }
}
```

## Setup notes

- Plan for undo, selection, clipboard, file IO, and persistence from the beginning.
- Add libraries such as RichTextFX, RichTextArea, or PDF/document viewers only when the editing
  model truly requires them.
- Keep preview generation and document parsing off the FX thread.

## Gotchas

- Editor-style apps quickly need stable workspace state, not just a central text area.
- Annotation and diagram tools depend on hit-testing, transforms, and zoom behavior.
- Preview panes and export pipelines can hide expensive background work if they update too eagerly.
