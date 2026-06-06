# Use Cases — JavaFX File Workflows and Search

Derived from AwesomeJavaFX entries such as FXFileChooser, LiveDirsFX, SmartCSVFX, JFXNodeMapper,
Figures, and FXDesktopSearch.

## File Workflow Selection

```mermaid
flowchart TD
    Need["Need file-centric behavior"] --> Choice{"Primary workflow?"}
    Choice -- Open or save content --> Pick["File chooser or save flow"]
    Choice -- Watch the filesystem --> Watch["Directory watching"]
    Choice -- Import / export structured data --> Transform["Mapping and transformation"]
    Choice -- Search local content --> Search["Indexing and search UI"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-FILE-1\nChoose files and directories efficiently"] --> UC2["UC-FILE-2\nWatch local changes and refresh views"]
    UC2 --> UC3["UC-FILE-3\nImport or export structured data safely"]
    UC3 --> UC4["UC-FILE-4\nBuild desktop search and filter workflows"]
```

## Key gotchas

- Long-running file scans and indexing must stay off the FX thread.
- File and directory workflows need explicit error and permission handling.
- Search results often need virtualization and incremental refresh.
