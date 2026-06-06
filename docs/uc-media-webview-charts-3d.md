# Use Cases — JavaFX Media, WebView, Charts, and 3D

Covers higher-level platform features that often deserve dedicated skills.

## Feature Buckets

```mermaid
graph TD
    JavaFX["JavaFX Platform Features"] --> Media["Media / MediaPlayer / MediaView"]
    JavaFX --> Web["WebView / WebEngine"]
    JavaFX --> Charts["Chart controls"]
    JavaFX --> ThreeD["SubScene / Camera / Shape3D"]
```

## When to Split Into Dedicated Skills

```mermaid
flowchart TD
    Start["Feature request"] --> Scope{"Touches advanced platform API?"}
    Scope -- Yes --> Dedicated["Create or use a dedicated skill"]
    Scope -- No --> Core["Keep within a broader UI skill"]
```

## Key gotchas

- Media codecs and platform packaging requirements vary by target environment.
- `WebView` embeds a browser engine; expose only the minimum needed bridge surface.
- JavaFX 3D is scene-graph based and separate from any external game engine workflow.
