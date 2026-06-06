# Use Cases — JavaFX Concurrency and Services

Covers background tasks, service reuse, progress reporting, and safe UI updates.

## Threading Rule

```mermaid
graph LR
    Background["Background thread"] --> Result["Task value / message / progress"]
    Result --> FX["JavaFX Application Thread"]
    FX --> UI["UI update"]
```

## Worker Selection

```mermaid
flowchart TD
    Need["Need background work"] --> Kind{"One-shot or reusable?"}
    Kind -- One-shot --> Task["Task<V>"]
    Kind -- Reusable --> Service["Service<V>"]
    Task --> UI["bind progress / message / state"]
    Service --> UI
```

## Key gotchas

- Never mutate scene graph nodes directly from `call()`.
- Prefer task state callbacks over manual polling.
- Propagate failure state visibly; do not swallow exceptions inside background work.
