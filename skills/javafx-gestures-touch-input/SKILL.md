---
name: javafx-gestures-touch-input
description: Handle JavaFX gestures, pinch-to-zoom, panning, and multi-touch interaction with explicit transform ownership.
triggers:
  - javafx pinch zoom
  - gesturefx
  - javafx touch input
  - tuiofx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - gestures
  - touch
  - zoom
  - pan
  - input
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Gestures and Touch Input

Use this skill when the UI needs touch-aware interaction: zoomable viewports, pannable canvases, or
multi-touch surfaces. Libraries such as GestureFX and TuioFX are useful once gestures become central
to the product.

## Example

```java
import javafx.application.ConditionalFeature;
import javafx.application.Platform;
import javafx.scene.image.ImageView;
import javafx.scene.input.ScrollEvent;
import javafx.scene.layout.StackPane;

public class ZoomPane extends StackPane {

    public ZoomPane(ImageView imageView) {
        getChildren().add(imageView);

        addEventFilter(ScrollEvent.SCROLL, event -> {
            if (!event.isControlDown()) {
                return;
            }

            double factor = event.getDeltaY() > 0 ? 1.1 : 0.9;
            imageView.setScaleX(imageView.getScaleX() * factor);
            imageView.setScaleY(imageView.getScaleY() * factor);
            event.consume();
        });

        if (Platform.isSupported(ConditionalFeature.INPUT_TOUCH)) {
            setStyle("-fx-background-color: derive(cornflowerblue, 80%);");
        }
    }
}
```

## Setup notes

- Centralize transform state so zoom, pan, and selection logic do not fight each other.
- Keep pointer, mouse, and touch interactions aligned instead of implementing separate inconsistent behaviors.
- Use library support when gesture orchestration becomes more complex than a single zoomable pane.

## Gotchas

- Gesture input availability varies by hardware and target.
- Coordinate transforms affect hit-testing, overlays, and annotation logic.
- Touch-friendly targets need larger hit areas and clearer feedback than mouse-first UIs.
