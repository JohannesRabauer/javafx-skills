# Use Cases — JavaFX Rich Text, Documents, and Editors

Derived from AwesomeJavaFX entries such as RichTextFX, RichTextArea, GemsFX PDF viewer, AsciidocFX,
PDFsam Basic, EPUBCheckFX, Bounding Box Editor, graph editor, Mindolph, Recaf, and other editor-like
real-world applications.

## Editor Surface Selection

```mermaid
flowchart TD
    Need["Need an editor or document-centric UI"] --> Kind{"What is being edited?"}
    Kind -- Rich formatted text --> Rich["Rich text editor"]
    Kind -- Structured documents --> Doc["Document pipeline / preview / validation"]
    Kind -- Diagrams or graphs --> Graph["Visual editor canvas"]
    Kind -- Images or annotations --> Annot["Image annotation workflow"]
    Kind -- Code or technical content --> Tech["Specialized editor or inspector"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-EDIT-1\nProvide rich text editing with formatting and embedded content"] --> UC2["UC-EDIT-2\nBuild document workflows with preview, validation, and export"]
    UC2 --> UC3["UC-EDIT-3\nCreate structured editors for diagrams, graphs, or maps of knowledge"]
    UC3 --> UC4["UC-EDIT-4\nSupport annotation, selection, and precise editing gestures"]
    UC4 --> UC5["UC-EDIT-5\nCombine search, undo, and file workflows into a usable editor shell"]
```

## Candidate skills from this domain

- Skill for rich text editor composition and formatting toolbars
- Skill for document preview, validation, and export-oriented desktop apps
- Skill for visual editors with selection, drag handles, overlays, and undo / redo
- Skill for editor workspace patterns: tabs, side panels, search, history, and file management

## Key gotchas

- Editor apps need undo, selection, clipboard, and persistence from the beginning.
- Rich document workflows usually require background parsing and preview generation.
- Annotation and graph editors depend heavily on hit-testing, zooming, and coordinate transforms.
