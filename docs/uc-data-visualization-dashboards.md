# Use Cases — JavaFX Data Visualization and Dashboards

Derived from AwesomeJavaFX entries such as ChartFx, Medusa, TilesFX, JavaFX Dashboard,
JavaFX DataViewer, Orson Charts, FXGraphics2D, javafx-d3, Kubed, FlexGanttFX, and scientific or
analytics-style real-world tools like binjr and Deep Space Trajectory Explorer.

## Visualization Choice

```mermaid
flowchart TD
    Need["Need to show complex data"] --> Mode{"What kind of data experience?"}
    Mode -- KPIs and status --> Dash["Tiles / gauges / dashboards"]
    Mode -- Time series / scientific --> Sci["High-volume scientific charts"]
    Mode -- Schedules and plans --> Gantt["Timeline / Gantt views"]
    Mode -- Web-like data visuals --> Hybrid["D3 / Plotly / hybrid visualisation"]
    Mode -- 3D analytical views --> ThreeD["3D charts or geometry-based views"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-VIZ-1\nBuild dashboards with KPIs, tiles, and gauges"] --> UC2["UC-VIZ-2\nRender large time-series or scientific datasets"]
    UC2 --> UC3["UC-VIZ-3\nAdd scheduling and planning visualizations such as Gantt views"]
    UC3 --> UC4["UC-VIZ-4\nEmbed web-backed charting when JavaFX charts are not enough"]
    UC4 --> UC5["UC-VIZ-5\nSupport interaction patterns like zoom, pan, history, and selection"]
```

## Candidate skills from this domain

- Skill for dashboards with gauges, tiles, and status-oriented widgets
- Skill for real-time or high-volume charting in JavaFX
- Skill for hybrid charting using embedded web technologies when needed
- Skill for chart interaction patterns: zoom, drag, overlays, and history

## Key gotchas

- High-frequency updates need throttling and rendering strategy, not just faster charts.
- Scientific and dashboard widgets often need shared formatting, units, and color semantics.
- Hybrid chart stacks add a browser bridge and packaging implications that should stay explicit.
