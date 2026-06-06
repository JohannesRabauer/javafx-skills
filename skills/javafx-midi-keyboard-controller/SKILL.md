---
name: javafx-midi-keyboard-controller
description: Build JavaFX piano-keyboard controls that map MIDI notes to white and black keys and show note state clearly.
triggers:
  - javafx piano keyboard
  - midi keyboard javafx
  - virtual piano javafx
  - midi note mapping javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - midi
  - piano
  - keyboard
  - note-mapping
  - controls
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX MIDI Keyboard Controller

Use this skill when a JavaFX app needs a virtual piano, a MIDI-driven note visualizer, or a custom
keyboard control that tracks pressed and released notes.

## Example

```java
import java.util.HashMap;
import java.util.Map;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;

public class PianoKeyboard extends Pane {

    private final Map<Integer, Rectangle> whiteKeys = new HashMap<>();

    public PianoKeyboard() {
        double whiteKeyWidth = 24;
        int[] midiNotes = {60, 62, 64, 65, 67, 69, 71, 72};

        for (int i = 0; i < midiNotes.length; i++) {
            Rectangle key = new Rectangle(i * whiteKeyWidth, 0, whiteKeyWidth, 120);
            key.setFill(Color.WHITE);
            key.setStroke(Color.BLACK);
            whiteKeys.put(midiNotes[i], key);
            getChildren().add(key);
        }
    }

    public void press(int note) {
        Rectangle key = whiteKeys.get(note);
        if (key != null) {
            key.setFill(Color.CORNFLOWERBLUE);
        }
    }

    public void release(int note) {
        Rectangle key = whiteKeys.get(note);
        if (key != null) {
            key.setFill(Color.WHITE);
        }
    }
}
```

## Setup notes

- Keep note-number-to-key mapping explicit and testable.
- Model white and black keys separately once the control expands beyond a toy example.
- Use this skill with `javafx-midi-device-integration` when the keyboard reacts to external MIDI input.

## Gotchas

- Black-key geometry and z-ordering are easy to miscalculate.
- Resizable keyboards need layout logic, not fixed coordinates alone.
- Visual press/release updates still need FX-thread-safe dispatch when driven from MIDI callbacks.
