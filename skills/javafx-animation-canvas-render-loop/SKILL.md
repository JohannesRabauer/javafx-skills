---
name: javafx-animation-canvas-render-loop
description: Animate JavaFX UIs with Timeline, Transition, Canvas, and AnimationTimer-based render loops.
triggers:
  - animationtimer javafx
  - timeline javafx
  - canvas javafx
  - render loop javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - animation
  - canvas
  - animationtimer
  - timeline
  - rendering
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Animation, Canvas, and Render Loops

Use this skill when the UI needs property animation, custom per-frame drawing, or deterministic
render/update loops built on top of JavaFX primitives.

## Example

```java
import javafx.animation.AnimationTimer;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;

public class RenderLoopView extends StackPane {

    public RenderLoopView() {
        var canvas = new Canvas(640, 360);
        var gc = canvas.getGraphicsContext2D();

        AnimationTimer timer = new AnimationTimer() {
            private long lastUpdate;
            private double x;

            @Override
            public void handle(long now) {
                if (lastUpdate == 0L) {
                    lastUpdate = now;
                    return;
                }

                double deltaSeconds = (now - lastUpdate) / 1_000_000_000.0;
                lastUpdate = now;
                x = (x + 120 * deltaSeconds) % canvas.getWidth();

                render(gc, canvas.getWidth(), canvas.getHeight(), x);
            }
        };

        timer.start();
        getChildren().add(canvas);
    }

    private void render(GraphicsContext gc, double width, double height, double x) {
        gc.setFill(Color.BLACK);
        gc.fillRect(0, 0, width, height);
        gc.setFill(Color.CORNFLOWERBLUE);
        gc.fillOval(x, height / 2 - 20, 40, 40);
    }
}
```

## Setup notes

- Use `Timeline` or `Transition` when a standard property animation is enough.
- Use `AnimationTimer` only for explicit per-frame control.
- Keep simulation, file IO, and networking off the FX thread even when the render loop runs on it.

## Gotchas

- `Canvas` is immediate-mode rendering, so redraw responsibility is entirely yours.
- Delta-time logic must guard against the first frame and timing spikes.
- If all you need is a fade, move, or scale animation, a render loop is unnecessary complexity.
