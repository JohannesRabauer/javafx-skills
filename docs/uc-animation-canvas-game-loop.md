# Use Cases — JavaFX Animation, Canvas, and Render Loops

Covers timeline-based animation, transitions, immediate-mode rendering with `Canvas`, and simple
game-loop style updates using `AnimationTimer`.

## Animation Choice

```mermaid
flowchart TD
    Need["Need motion or repeated updates"] --> Choice{"What changes?"}
    Choice -- Property over time --> Timeline["Timeline / KeyFrame"]
    Choice -- Common visual transition --> Transition["Fade / Translate / Scale / Rotate Transition"]
    Choice -- Per-frame custom rendering --> Timer["AnimationTimer"]
    Choice -- Pixel-style drawing --> Canvas["Canvas + GraphicsContext"]
```

## Loop Pattern

```mermaid
sequenceDiagram
    participant Timer as AnimationTimer
    participant Model as Application State
    participant View as Scene Graph or Canvas

    Timer->>Model: update(deltaTime)
    Model->>View: render current state
    Timer->>Timer: next frame
```

## Key gotchas

- Use `AnimationTimer` only when frame-by-frame control is actually required.
- `Canvas` is immediate mode; resizing and redraw strategy need to be explicit.
- Keep heavy simulation or IO off the FX thread even when the UI updates every frame.
