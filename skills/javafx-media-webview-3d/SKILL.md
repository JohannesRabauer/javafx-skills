---
name: javafx-media-webview-3d
description: Use JavaFX Media, WebView/WebEngine core setup, and 3D scene-graph primitives safely.
triggers:
  - javafx mediaplayer
  - media view javafx
  - webengine javafx
  - javafx 3d
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - media
  - webview
  - webengine
  - subscene
  - 3d
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Media, WebView, and 3D

Use this skill for the core setup of JavaFX media playback, `WebView` / `WebEngine`, and 3D scene
graph primitives. Use `javafx-web-maps-embedded-integration` when the requirement is specifically
about JavaScript bridges, maps, or browser-delivered JavaFX.

## Example

```java
import javafx.scene.Group;
import javafx.scene.SceneAntialiasing;
import javafx.scene.SubScene;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Box;
import javafx.scene.web.WebView;

public class MediaWeb3DView extends BorderPane {

    public MediaWeb3DView() {
        var webView = new WebView();
        webView.getEngine().load("https://openjfx.io");

        var cube = new Box(120, 120, 120);
        cube.setTranslateX(180);
        cube.setTranslateY(160);

        var subScene = new SubScene(new Group(cube), 360, 320, true, SceneAntialiasing.BALANCED);
        subScene.setFill(Color.web("#202020"));

        setLeft(webView);
        setCenter(subScene);
    }
}
```

## Setup notes

- Add JavaFX modules deliberately: `javafx.media`, `javafx.web`, and `javafx.graphics` 3D support
  only when the feature set needs them.
- Keep core `WebView` usage simple here: loading content, sizing it correctly, and managing lifecycle.
- Treat 3D as scene-graph work with its own camera, lighting, and picking decisions.

## Gotchas

- Media codecs and native platform packaging requirements vary by target environment.
- `WebView` loading is asynchronous; do not assume content is immediately ready.
- 3D scene graph usage has different performance and input constraints than standard 2D controls.
