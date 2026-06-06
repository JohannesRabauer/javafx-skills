# Use Cases — JavaFX Properties, Bindings, and Events

Covers observable state, property binding, listeners, and event handling patterns.

## Property and Binding Flow

```mermaid
graph LR
    Model["Model Property"] --> Bind["Binding or Listener"]
    Bind --> Control["Control Property"]
    Control --> UI["Updated UI"]
```

## Common Patterns

```mermaid
flowchart TD
    Start["Need reactive UI state"] --> Mode{"What kind of coupling?"}
    Mode -- One-way display --> Uni["bind(...)"]
    Mode -- Two editable values --> Bi["bindBidirectional(...)"]
    Mode -- Side effects --> Listen["ChangeListener / InvalidationListener"]
    Mode -- User interaction --> Event["addEventHandler / setOnAction"]
```

## Key gotchas

- Bindings are great for derived values; avoid mutating a bound property directly.
- Prefer observable properties on presentation models that the UI can bind to cleanly.
- Use listeners for side effects, not as a substitute for all data flow.
