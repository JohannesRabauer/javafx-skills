# Use Cases — JavaFX Mobile, Embedded, and Multi-Target Delivery

Derived from AwesomeJavaFX entries such as JavaFXPorts, JPro, WebFX, and Raspberry Pi or mobile
learning resources referenced by the curated list.

## Target Strategy

```mermaid
flowchart TD
    Need["Need JavaFX beyond standard desktop"] --> Choice{"Which target matters?"}
    Choice -- Mobile or touch device --> Mobile["Mobile-oriented target"]
    Choice -- Embedded device --> Embedded["Embedded or Raspberry Pi style target"]
    Choice -- Browser delivery --> Browser["Browser-delivered JavaFX strategy"]
    Choice -- Shared code across targets --> Shared["Multi-target architecture"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-TARGET-1\nChoose target-specific packaging and runtime strategy"] --> UC2["UC-TARGET-2\nDesign responsive UIs for smaller or touch-centric screens"]
    UC2 --> UC3["UC-TARGET-3\nIsolate platform services behind adapters"]
    UC3 --> UC4["UC-TARGET-4\nPlan desktop and browser or device targets explicitly rather than retrofitting them later"]
```

## Key gotchas

- Desktop assumptions break quickly on mobile, browser, and embedded targets.
- Input hardware, media support, and performance profiles vary materially between targets.
- Multi-target delivery works best when platform services are abstracted early.
