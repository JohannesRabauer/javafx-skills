# Use Cases — JavaFX FXML, Controls, and CSS

Covers declarative views, controller wiring, common controls, and stylesheet-driven customization.

## FXML Loading Path

```mermaid
sequenceDiagram
    participant App as Application
    participant Loader as FXMLLoader
    participant FXML as View.fxml
    participant Ctrl as Controller

    App->>Loader: setLocation(...)
    Loader->>FXML: parse
    Loader->>Ctrl: create / inject
    Loader-->>App: root node
```

## Styling Flow

```mermaid
graph LR
    CSS["stylesheet.css"] --> Scene["Scene or Parent"]
    Scene --> Selector["Style classes / ids / pseudoclasses"]
    Selector --> Control["Skinned Controls"]
```

## Key gotchas

- `fx:id` requires matching controller fields and `@FXML` where needed.
- Resource loading failures usually come from incorrect classpath-relative paths.
- Prefer style classes over inline styles so themes stay reusable.
