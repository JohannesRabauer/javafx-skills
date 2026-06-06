---
name: javafx-reactive-binding-state
description: Extend JavaFX with advanced bindings, event streams, reducers, and synchronized reactive state.
triggers:
  - reactfx javafx
  - reduxfx
  - reactive javafx state
  - rxjavafx
compatibility:
  java: 17+
  javafx: 21+
category: architecture
tags:
  - reactive
  - bindings
  - reducers
  - streams
  - state
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Reactive Bindings and State

Use this skill when core JavaFX properties are not enough and the application needs derived
observable graphs, composed event streams, reducer-style state, or synchronized reactive pipelines.

## Example

```java
import javafx.beans.binding.Bindings;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import javafx.collections.FXCollections;
import javafx.collections.transformation.FilteredList;
import javafx.scene.control.ListView;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;

public class ReactiveFilterView extends VBox {

    private final StringProperty filter = new SimpleStringProperty("");

    public ReactiveFilterView() {
        var input = new TextField();
        var items = FXCollections.observableArrayList("alpha", "beta", "gamma", "delta");
        var filtered = new FilteredList<>(items, item -> true);

        filter.bind(input.textProperty());
        filter.addListener((obs, oldValue, newValue) ->
                filtered.setPredicate(item -> item.contains(newValue))
        );

        var status = new TextField();
        status.textProperty().bind(Bindings.size(filtered).asString("Matches: %d"));
        status.setEditable(false);

        getChildren().addAll(input, status, new ListView<>(filtered));
    }
}
```

## Setup notes

- Keep this skill for advanced state composition: EasyBind-style computed values, ReactFX or Rx-style
  streams, reducer architectures, and synchronized state pipelines.
- Reserve `javafx-properties-bindings` for plain `Property`, `Binding`, and listener usage.
- Make thread handoff explicit whenever reactive streams feed the JavaFX scene graph.

## Gotchas

- Reactive abstractions do not remove the need for ownership boundaries around state updates.
- Reducer-style state is valuable only if traceability or complex coordination justifies it.
- Cross-window or cross-client synchronization needs conflict rules, not just more observables.
