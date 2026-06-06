# Use Cases — JavaFX Architecture and Frameworks

Derived from the AwesomeJavaFX framework and library sections, this document captures the recurring
architectural choices that repeatedly show up in mature JavaFX applications: MVC / MVP / MVVM,
dependency injection, routing / flow management, and reactive state handling.

## Architecture Selection

```mermaid
flowchart TD
    Start["Need application structure"] --> Scope{"Single view or multi-screen app?"}
    Scope -- Small / local --> Simple["Plain JavaFX + extracted views"]
    Scope -- Medium / multi-screen --> Pattern{"Preferred interaction style?"}
    Pattern -- Presenter-driven --> MVP["MVP / afterburner-style"]
    Pattern -- Binding-heavy view models --> MVVM["MVVM / mvvmFX / MVCI"]
    Pattern -- Classic layered controllers --> MVC["MVC / APX / DataFX-style"]
    Pattern -- Event-stream and reducer driven --> Reactive["Redux / ReactFX / ReactorFX"]
```

## Dependency and Flow Decisions

```mermaid
graph LR
    App["Application shell"] --> DI["Dependency injection"]
    DI --> Controllers["Controllers / Presenters / ViewModels"]
    Controllers --> Flow["Navigation / routing / flow"]
    Flow --> Services["Background services / remote data"]
    Services --> State["Observable application state"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-ARCH-1\nChoose a presentation pattern"] --> UC2["UC-ARCH-2\nWire DI into controllers or presenters"]
    UC2 --> UC3["UC-ARCH-3\nCentralize navigation between views"]
    UC3 --> UC4["UC-ARCH-4\nModel remote or long-lived application state"]
    UC4 --> UC5["UC-ARCH-5\nAdopt reactive event streams only where they simplify complexity"]
```

## Candidate skills from this domain

- Skill for choosing between plain JavaFX, MVP, MVVM, MVCI, or reducer-based state models
- Skill for integrating DI with FXML controllers and application services
- Skill for navigation / flow orchestration across multi-screen desktop apps
- Skill for reactive state pipelines with JavaFX observables plus Reactor / Rx / ReactFX style APIs

## Key gotchas

- Do not force a framework onto a small app that only needs a few views and shared state.
- Keep thread ownership explicit when reactive or DI-managed services feed UI state.
- Prefer one navigation model per app; mixing ad-hoc scene swaps with framework routing becomes hard
  to reason about quickly.
