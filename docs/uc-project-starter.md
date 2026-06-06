# Use Cases — JavaFX Project Starter Workflow

Covers interactive project discovery, docs-first specification, and scaffolding for new JavaFX
applications.

## Actors and Primary Use Cases

```mermaid
graph LR
    Dev([Developer])
    Agent([Coding Agent])
    Repo([Project Repository])

    Dev --> UC1["UC-START-1\nAnswer bounded setup questions"]
    Dev --> UC2["UC-START-2\nReview starter specification"]
    Dev --> UC3["UC-START-3\nConfirm build and packaging choices"]

    Agent --> UC4["UC-START-4\nSynthesize application brief"]
    Agent --> UC5["UC-START-5\nCreate initial architecture notes"]
    Agent --> UC6["UC-START-6\nInitialize JavaFX project skeleton"]
    Agent --> UC7["UC-START-7\nCreate starter views and controllers"]
    Agent --> UC8["UC-START-8\nAdd initial tests where appropriate"]

    Repo --> UC6
    Repo --> UC7
    Repo --> UC8
```

## Interactive vs Default Path

```mermaid
flowchart TD
    Start["Need new JavaFX application"] --> Mode{"Interactive user available?"}
    Mode -- Yes --> Qs["Ask bounded question flow\n(one question at a time)"]
    Mode -- No --> Defaults["Apply conservative defaults:\nJava 17, JavaFX 21, single window, simple navigation"]
    Qs --> Spec["Create starter specification"]
    Defaults --> Spec
    Spec --> Approve{"Specification approved?"}
    Approve -- No --> Qs
    Approve -- Yes --> Init["Initialize JavaFX project"]
```

## Delivery Flow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Agent as Coding Agent
    participant Docs as Documentation
    participant Code as Project Code

    Dev->>Agent: describe application idea
    Agent->>Dev: ask bounded setup questions
    Agent->>Docs: create brief and starter notes
    Docs-->>Dev: reviewable specification
    Dev->>Agent: approve / refine
    Agent->>Code: scaffold JavaFX project
    Agent->>Code: add starter scene and wiring
```
