---
name: javafx-midi-visualization
description: Visualize MIDI notes in JavaFX with piano rolls, waterfalls, note timelines, and chart-based views.
triggers:
  - javafx midi visualization
  - midi piano roll javafx
  - midi waterfall javafx
  - midi note timeline javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - midi
  - visualization
  - piano-roll
  - timeline
  - charts
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX MIDI Visualization

Use this skill when MIDI events should become visible: falling-note displays, piano rolls, channel
views, or chart-driven music analyzers.

## Example

```java
import javafx.animation.AnimationTimer;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;

public class MidiRollView extends StackPane {

    private double noteX;

    public MidiRollView() {
        var canvas = new Canvas(640, 240);
        var gc = canvas.getGraphicsContext2D();

        AnimationTimer timer = new AnimationTimer() {
            @Override
            public void handle(long now) {
                noteX = (noteX + 2) % canvas.getWidth();
                render(gc, canvas.getWidth(), canvas.getHeight(), noteX);
            }
        };

        timer.start();
        getChildren().add(canvas);
    }

    private void render(GraphicsContext gc, double width, double height, double x) {
        gc.setFill(Color.BLACK);
        gc.fillRect(0, 0, width, height);
        gc.setFill(Color.LIMEGREEN);
        gc.fillRect(x, 60, 24, 100);
    }
}
```

## Setup notes

- Pick one timing model: sequencer ticks, timestamps, or frame-based interpolation.
- Use `AnimationTimer` or batched FX-thread updates to keep MIDI visualization smooth.
- Use this skill with `javafx-midi-device-integration` when the view reacts to live incoming MIDI
  traffic, and with `javafx-data-visualization-dashboards` when charts complement the piano roll.

## Gotchas

- Dense event streams can overwhelm the FX queue if every MIDI event triggers its own UI mutation.
- Visualization math should separate note duration, channel color, and viewport mapping.
- Long sequences benefit from pooled nodes or canvas-based rendering instead of one node per note.
