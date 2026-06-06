# Use Cases — JavaFX Reactive Bindings and State

Derived from AwesomeJavaFX entries such as Advanced Bindings, EasyBind, ReactFX, ReactorFX,
RxJavaFX, ReduxFX, SynchronizeFX, MVCI Framework, and mvciFX.

## State Model Selection

```mermaid
flowchart TD
    Need["Need more than basic JavaFX binding"] --> Kind{"What is missing?"}
    Kind -- Computed values --> Bind["Advanced bindings / EasyBind"]
    Kind -- Event composition --> Stream["ReactFX / RxJavaFX / ReactorFX"]
    Kind -- App-wide immutable state --> Reducer["Reducer / Redux-style state"]
    Kind -- Cross-process sync --> Sync["Remote or cross-JVM synchronized state"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-STATE-1\nExpress derived UI state without listener boilerplate"] --> UC2["UC-STATE-2\nCompose event streams from controls and observables"]
    UC2 --> UC3["UC-STATE-3\nAdopt reducer-based application state where updates must stay auditable"]
    UC3 --> UC4["UC-STATE-4\nBridge reactive back-end pipelines onto JavaFX safely"]
    UC4 --> UC5["UC-STATE-5\nSynchronize state across windows, JVMs, or clients when collaboration is required"]
```

## Candidate skills from this domain

- Skill for advanced JavaFX binding patterns and computed observable values
- Skill for reactive event pipelines with JavaFX controls and collections
- Skill for reducer-style state stores and time-travel-friendly app architecture
- Skill for synchronizing reactive or remote state into a JavaFX UI

## Key gotchas

- Reactive pipelines still need explicit FX-thread handoff before mutating the UI.
- Reducer-based state helps with auditability, but overcomplicates small forms quickly.
- Cross-window or cross-JVM synchronization requires conflict and ownership rules, not just bindings.
