---
name: javafx-properties-bindings
description: Build JavaFX UIs with core observable properties, bindings, and listeners.
triggers:
  - javafx property binding
  - simpleintegerproperty
  - javafx changelistener
  - bind bidirectional
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - properties
  - bindings
  - listeners
  - state
  - events
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Properties and Bindings

Use this skill when UI state should stay synchronized without manual widget updates scattered
throughout the codebase.

## Example

```java
import javafx.beans.binding.Bindings;
import javafx.beans.property.IntegerProperty;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class CounterView extends VBox {

    private final IntegerProperty count = new SimpleIntegerProperty(0);

    public CounterView() {
        var label = new Label();
        label.textProperty().bind(Bindings.format("Count: %d", count));

        var increment = new Button("Increment");
        increment.setOnAction(event -> count.set(count.get() + 1));

        getChildren().addAll(label, increment);
    }

    public IntegerProperty countProperty() {
        return count;
    }
}
```

## Setup notes

- Expose properties when other UI parts need to bind to them.
- Prefer bindings for derived display values and listeners for side effects.
- Keep domain logic out of event handlers when a presentation model would make the state clearer.
- Use `javafx-reactive-binding-state` when the requirement moves beyond core properties into event
  streams, reducers, or cross-client state synchronization.

## Gotchas

- A bound property cannot be set directly until it is unbound.
- Bidirectional binding is useful for forms but easy to overuse; keep ownership of the state clear.
- Listener-heavy code becomes brittle quickly when there is no central state model.
