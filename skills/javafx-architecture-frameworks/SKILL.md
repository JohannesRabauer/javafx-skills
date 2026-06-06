---
name: javafx-architecture-frameworks
description: Choose JavaFX architecture patterns such as plain scene-graph, MVP, MVVM, MVCI, DI, and routed shells.
triggers:
  - javafx architecture
  - mvvm javafx
  - javafx dependency injection
  - afterburner fx architecture
compatibility:
  java: 17+
  javafx: 21+
category: architecture
tags:
  - architecture
  - mvvm
  - mvp
  - dependency-injection
  - navigation
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Architecture and Frameworks

Use this skill when the main question is which architectural approach to choose or how to keep
controllers, services, navigation, and state ownership coherent as the application grows.

## Example

```java
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

public final class DashboardViewModel {

    private final StringProperty title = new SimpleStringProperty("Dashboard");
    private final Navigator navigator;

    public DashboardViewModel(Navigator navigator) {
        this.navigator = navigator;
    }

    public StringProperty titleProperty() {
        return title;
    }

    public void openSettings() {
        navigator.show("settings");
    }

    public interface Navigator {
        void show(String routeId);
    }
}
```

## Setup notes

- Use plain JavaFX plus extracted views for small applications.
- Reach for MVP, MVVM, MVCI, or framework-backed shells when many views share state and navigation.
- Keep one owner for navigation and service construction instead of letting controllers instantiate
  each other ad hoc.
- Use `javafx-reactive-binding-state` for implementation details of reducers, streams, or
  synchronized state pipelines.

## Gotchas

- A framework does not fix unclear state ownership.
- Mixing several navigation styles inside one app quickly becomes hard to reason about.
- Dependency injection is most useful when it simplifies service boundaries, not when it hides them.
