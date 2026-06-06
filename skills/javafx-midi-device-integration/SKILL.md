---
name: javafx-midi-device-integration
description: Connect JavaFX to javax.sound.midi devices, sequencers, and receivers with safe FX-thread bridging.
triggers:
  - javafx midi
  - javax.sound.midi javafx
  - javafx sequencer midi
  - midi receiver javafx
compatibility:
  java: 17+
  javafx: 21+
category: platform-integration
tags:
  - midi
  - java-sound
  - receiver
  - sequencer
  - hardware
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX MIDI Device Integration

Use this skill when a JavaFX app must talk to `javax.sound.midi`: play MIDI files, open hardware
devices, decode note/control events, or route MIDI activity into JavaFX UI state.

## Example

```java
import javax.sound.midi.MidiChannel;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.ShortMessage;
import javax.sound.midi.Synthesizer;
import javafx.application.Platform;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class MidiMonitorView extends VBox {

    private MidiChannel channel;

    public MidiMonitorView() throws Exception {
        var status = new Label("Idle");
        getChildren().add(status);

        Synthesizer synthesizer = MidiSystem.getSynthesizer();
        synthesizer.open();
        channel = synthesizer.getChannels()[0];

        ShortMessage noteOn = new ShortMessage();
        noteOn.setMessage(ShortMessage.NOTE_ON, 0, 60, 96);

        channel.noteOn(noteOn.getData1(), noteOn.getData2());
        Platform.runLater(() -> status.setText("Played note " + noteOn.getData1()));
    }
}
```

```java
module com.example.app {
    requires java.desktop;
    requires javafx.controls;
}
```

## Setup notes

- Use `Synthesizer` and `MidiChannel` for direct sound generation, `Sequencer` for MIDI file
  playback, and `MidiDevice` discovery when hardware routing matters.
- Treat `Receiver.send(...)` and other MIDI callbacks as non-FX threads; bridge UI updates with
  `Platform.runLater(...)`.
- Decode `ShortMessage` carefully: command, channel, note/controller number, and velocity/value.

## Gotchas

- `NOTE_ON` with velocity `0` is effectively `NOTE_OFF`.
- MIDI callbacks that touch the scene graph directly will break thread-safety.
- Device discovery should filter out endpoints that cannot transmit or that represent the synth or
  sequencer when the app is searching for external input.
