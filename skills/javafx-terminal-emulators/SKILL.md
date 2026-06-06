---
name: javafx-terminal-emulators
description: Build JavaFX terminal emulators or shell-style console panes with background process I/O, ANSI handling, and safe FX-thread updates.
triggers:
  - terminal emulator javafx
  - javafx console pane
  - jeditermfx
  - process output javafx
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - terminal
  - console
  - ansi
  - process
  - shell
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Terminal Emulators

Use this skill when the UI needs a real terminal emulator or a shell-like console pane for running
commands, inspecting logs, or talking to remote systems interactively.

## Example

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import javafx.application.Platform;
import javafx.scene.control.TextArea;

public class ConsolePane extends TextArea {

    public void runCommand(String... command) {
        new Thread(() -> {
            try {
                var process = new ProcessBuilder(command).redirectErrorStream(true).start();
                try (var reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        var output = line + System.lineSeparator();
                        Platform.runLater(() -> appendText(output));
                    }
                }
            } catch (Exception ex) {
                Platform.runLater(() -> appendText(ex.getMessage() + System.lineSeparator()));
            }
        }, "console-reader").start();
    }
}
```

## Setup notes

- A true terminal emulator needs keyboard handling, cursor tracking, and ANSI processing; a plain
  log view is not enough.
- Read process output on background threads and update the UI on the FX thread only.
- Use PTY support when the shell must behave like an interactive terminal instead of a one-shot
  process runner.

## Gotchas

- `TextArea`-only implementations usually break copy/paste, selection, and ANSI color behavior.
- Interactive shells can deadlock if stdin/stdout are not drained carefully.
- Terminal size changes often need explicit propagation to the underlying PTY or process.
