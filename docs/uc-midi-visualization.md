# Use Cases — JavaFX MIDI Visualization

Derived from JavaFX MIDI visualizers such as Musekeys waterfalls, chart-driven analyzers, and
music-focused talks about JavaFX plus MIDI.

## Visualization Choice

```mermaid
flowchart TD
    Need["Need to visualize MIDI data"] --> Choice{"What view matters most?"}
    Choice -- Falling notes / piano roll --> Roll["Piano roll or waterfall"]
    Choice -- Live event or spectrum view --> Chart["Chart-based visualization"]
    Choice -- Combined keyboard + timeline --> Hybrid["Keyboard plus timeline"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-VIZMIDI-1\nTransform MIDI ticks or timestamps into visual positions"] --> UC2["UC-VIZMIDI-2\nRender note ranges and durations efficiently"]
    UC2 --> UC3["UC-VIZMIDI-3\nSynchronize playback state with JavaFX animation or render loops"]
    UC3 --> UC4["UC-VIZMIDI-4\nUse color, channels, and overlays to distinguish musical structure"]
```

## Key gotchas

- Real-time visualizers can flood `Platform.runLater(...)` if updates are not batched.
- Tick-to-time conversion needs an explicit timing model.
- Long files and dense note streams benefit from pooling or virtualization.
