---
name: javafx-data-visualization-dashboards
description: Build JavaFX charts, dashboards, gauges, and high-volume visualizations with the right level of tooling.
triggers:
  - javafx chart
  - javafx dashboard
  - tilesfx
  - chartfx javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - charts
  - dashboards
  - gauges
  - visualization
  - analytics
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Data Visualization and Dashboards

Use this skill when the UI needs built-in charts, KPI dashboards, scientific plots, or high-density
status panels. This skill owns chart selection, including when built-in JavaFX charts are enough and
when to escalate to ecosystem libraries.

## Example

```java
import javafx.collections.FXCollections;
import javafx.scene.chart.LineChart;
import javafx.scene.chart.NumberAxis;
import javafx.scene.chart.XYChart;
import javafx.scene.layout.BorderPane;

public class MetricsDashboard extends BorderPane {

    public MetricsDashboard() {
        var xAxis = new NumberAxis();
        var yAxis = new NumberAxis();
        var chart = new LineChart<>(xAxis, yAxis);
        chart.setLegendVisible(false);

        var series = new XYChart.Series<Number, Number>();
        series.setData(FXCollections.observableArrayList(
                new XYChart.Data<>(0, 12),
                new XYChart.Data<>(1, 18),
                new XYChart.Data<>(2, 15),
                new XYChart.Data<>(3, 24)
        ));

        chart.getData().add(series);
        setCenter(chart);
    }
}
```

## Setup notes

- Start with built-in JavaFX `Chart` controls for straightforward business graphs.
- Escalate to libraries such as ChartFx, Orson Charts, Medusa, TilesFX, FlexGanttFX, or hybrid
  web-backed visualizations when scale or interaction requirements exceed the core controls.
- Define shared units, formatting, and color semantics across the full dashboard rather than per
  widget.

## Gotchas

- High-frequency data feeds need throttling and aggregation, not just more redraws.
- Fancy dashboard widgets can become unreadable if layout density outpaces information hierarchy.
- Web-backed charting belongs here only for visualization needs; browser integration itself belongs
  to `javafx-web-maps-embedded-integration`.
