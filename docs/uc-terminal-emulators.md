# Use Cases — JavaFX Terminal Emulators and Console UIs

Derived from AwesomeJavaFX projects such as JediTermFX and terminal-like developer tools that need
embedded shells, process consoles, or ANSI-aware log panes.

## Terminal UI Flow

```mermaid
flowchart TD
    Start["Need a terminal or console panel"] --> Kind{"What is required?"}
    Kind -- Full terminal emulator --> Emulator["PTY / ANSI terminal emulator"]
    Kind -- Process console --> Console["Command output and input console"]
    Kind -- Embedded shell tool --> Shell["Interactive admin / developer shell"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-TERM-1\nEmbed a terminal emulator in a JavaFX tool"] --> UC2["UC-TERM-2\nStream process output safely to the FX thread"]
    UC2 --> UC3["UC-TERM-3\nSupport shell input, ANSI colors, and copy/paste"]
```

## Skill opportunities

- Skill for choosing between a true terminal emulator and a simpler process console
- Skill for bridging background process I/O to JavaFX controls without freezing the UI
- Skill for handling ANSI escape sequences, scrolling, and clipboard behavior consistently

## Key gotchas

- A terminal emulator is not just a `TextArea`; it needs cursor, keyboard, and ANSI handling.
- Process I/O must be read on background threads and marshalled back to the FX thread only for UI
  updates.
- Interactive shells often need platform-specific PTY support rather than raw stdin/stdout pipes.
