# Use Cases — JavaFX MIDI Device Integration

Derived from JavaFX MIDI examples and tools such as AlmasB's `MidiApp`, Musekeys, Arpeggiatorum,
forge-groovebox, EWItool, and MIDI-oriented JavaFX talks.

## Integration Flow

```mermaid
flowchart TD
    Need["Need JavaFX + MIDI integration"] --> Choice{"What is the source?"}
    Choice -- Built-in synth --> Synth["Synthesizer / MidiChannel"]
    Choice -- MIDI file playback --> Seq["Sequencer / Sequence"]
    Choice -- Hardware device --> Dev["MidiDevice / Transmitter / Receiver"]
    Synth --> Bridge["Bridge events to JavaFX safely"]
    Seq --> Bridge
    Dev --> Bridge
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-MIDI-1\nDiscover and open MIDI devices"] --> UC2["UC-MIDI-2\nDecode NOTE_ON / NOTE_OFF / CC events"]
    UC2 --> UC3["UC-MIDI-3\nBridge non-FX MIDI callbacks onto the FX thread"]
    UC3 --> UC4["UC-MIDI-4\nCombine sequencer playback with JavaFX controls and status views"]
```

## Key gotchas

- `Receiver.send(...)` is not called on the JavaFX Application Thread.
- `NOTE_ON` with velocity `0` must be treated as `NOTE_OFF`.
- Modular JavaFX projects need `requires java.desktop;` for `javax.sound.midi`.
