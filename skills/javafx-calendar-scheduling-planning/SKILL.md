---
name: javafx-calendar-scheduling-planning
description: Build JavaFX calendar, date-centric scheduling, and Gantt-style planning interfaces with clear time-state ownership.
triggers:
  - calendarfx
  - javafx scheduling ui
  - javafx gantt chart
  - planning timeline javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - calendar
  - scheduling
  - gantt
  - planning
  - timeline
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Calendar, Scheduling, and Planning

Use this skill when the UI is built around dates, schedules, event grids, or timeline planning
views. Libraries such as CalendarFX or FlexGanttFX are relevant when the product outgrows simpler
date-pickers and list-based scheduling.

## Example

```java
import java.time.LocalDate;
import javafx.collections.FXCollections;
import javafx.scene.control.DatePicker;
import javafx.scene.control.ListView;
import javafx.scene.layout.BorderPane;

public class PlannerView extends BorderPane {

    public PlannerView() {
        var datePicker = new DatePicker(LocalDate.now());
        var items = new ListView<>(FXCollections.observableArrayList(
                "09:00 Standup",
                "11:00 Review",
                "14:00 Planning"
        ));

        datePicker.valueProperty().addListener((obs, oldValue, newValue) ->
                setBottom(new ListView<>(FXCollections.observableArrayList(
                        newValue + " / Focus block",
                        newValue + " / Follow-up tasks"
                )))
        );

        setTop(datePicker);
        setCenter(items);
    }
}
```

## Setup notes

- Keep schedule state separate from rendered calendar widgets.
- Use simple JavaFX controls for lightweight planning; move to CalendarFX or Gantt-style components
  when overlap, dependency, or timeline density becomes the core requirement.
- Model timezone and recurrence rules explicitly rather than burying them in UI code.

## Gotchas

- Date-heavy apps break quickly when timezone assumptions stay implicit.
- Planning widgets often need filtering, persistence, and inline editing together.
- Large timelines and dense calendars need virtualization or segmented rendering.
