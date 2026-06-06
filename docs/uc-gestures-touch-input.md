# Use Cases — JavaFX Gestures and Touch Input

Derived from AwesomeJavaFX entries such as GestureFX and TuioFX.

## Interaction Flow

```mermaid
flowchart TD
    Need["Need richer interaction than clicks"] --> Choice{"What interaction matters?"}
    Choice -- Zoom and pan --> Viewport["Gesture-driven viewport"]
    Choice -- Multi-touch surface --> Touch["Touch-point tracking"]
    Choice -- Large display / tabletop --> Surface["Surface-specific interaction model"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-GEST-1\nSupport pinch-to-zoom and pan"] --> UC2["UC-GEST-2\nTrack touch points explicitly"]
    UC2 --> UC3["UC-GEST-3\nDesign gesture-safe overlays and hit targets"]
    UC3 --> UC4["UC-GEST-4\nGracefully degrade when touch hardware is unavailable"]
```

## Key gotchas

- Gesture handling and mouse handling need a coordinated ownership model.
- Zoomable surfaces require explicit coordinate transforms.
- Multi-touch availability differs by hardware and target platform.
