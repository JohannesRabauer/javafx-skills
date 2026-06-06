# Use Cases — JavaFX UI Layout and Navigation

Covers scene graph composition, layout panes, reusable views, and screen transitions.

## Layout Selection

```mermaid
flowchart TD
    Need["Need to place UI content"] --> Choice{"Primary layout need?"}
    Choice -- Top / Left / Center regions --> Border["BorderPane"]
    Choice -- Rows or columns --> Box["HBox / VBox"]
    Choice -- Form or grid alignment --> Grid["GridPane"]
    Choice -- Anchor to edges --> Anchor["AnchorPane"]
    Choice -- Free positioning / overlays --> Stack["StackPane / Pane"]
```

## Navigation Model

```mermaid
graph LR
    State["Application state"] --> Router["Navigation logic"]
    Router --> SceneSwap["Swap Scene root"]
    Router --> Dialog["Open Dialog or Stage"]
    Router --> Overlay["Show in-place overlay"]
```

## Key gotchas

- Prefer swapping the root or center content over creating many top-level windows.
- Keep navigation state outside individual controls when multiple views need to coordinate.
- Use layout panes before absolute positioning; `Pane` should be the exception, not the default.
