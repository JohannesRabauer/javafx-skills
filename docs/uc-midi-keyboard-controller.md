# Use Cases — JavaFX MIDI Keyboard Controller

Derived from JavaFX piano-keyboard implementations such as Musekeys and Karedi-style piano views.

## Keyboard Control Model

```mermaid
flowchart TD
    Need["Need a playable or visual piano keyboard"] --> Choice{"Primary role?"}
    Choice -- User input --> Input["Virtual keyboard control"]
    Choice -- External MIDI feedback --> Visual["Pressed-key visualizer"]
    Choice -- Both --> Hybrid["Control + visualizer"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-KEYS-1\nMap MIDI note numbers to white and black keys"] --> UC2["UC-KEYS-2\nRender keyboard geometry responsively"]
    UC2 --> UC3["UC-KEYS-3\nShow press and release state from MIDI events"]
    UC3 --> UC4["UC-KEYS-4\nExpose the keyboard as a reusable JavaFX control or MIDI endpoint"]
```

## Key gotchas

- Black-key layering and note mapping are easy to get subtly wrong.
- Zooming or resizing the keyboard changes key geometry assumptions.
- MIDI-driven key updates still need FX-thread-safe visual state changes.
