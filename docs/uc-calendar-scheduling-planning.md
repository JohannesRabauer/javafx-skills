# Use Cases — JavaFX Calendar, Scheduling, and Planning

Derived from AwesomeJavaFX entries such as CalendarFX, FlexGanttFX, SkedPal, and PI-Rail-FX.

## Planning View Selection

```mermaid
flowchart TD
    Need["Need a time-oriented UI"] --> Choice{"What is the primary planning view?"}
    Choice -- Day / week / month --> Calendar["Calendar layout"]
    Choice -- Task timeline --> Gantt["Gantt or timeline view"]
    Choice -- Mixed planning + details --> Split["Planner shell + detail editor"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-PLAN-1\nShow events and date-centric schedules"] --> UC2["UC-PLAN-2\nBuild timeline and dependency views"]
    UC2 --> UC3["UC-PLAN-3\nPersist planning state, filters, and date ranges"]
    UC3 --> UC4["UC-PLAN-4\nCombine planning widgets with forms, dialogs, and workbench shells"]
```

## Key gotchas

- Date and time-zone handling becomes a product concern quickly.
- Calendar-style UIs need clear ownership of selection, editing, and overlap rules.
- Timeline and Gantt views usually need virtualization once the dataset grows.
