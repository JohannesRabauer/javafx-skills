---
name: javafx-web-maps-embedded-integration
description: Integrate JavaFX with JavaScript bridges, embedded browsers, maps, and browser-delivered JavaFX strategies.
triggers:
  - webview javascript bridge javafx
  - javafx map view
  - jxbrowser javafx
  - webfx jpro javafx
compatibility:
  java: 17+
  javafx: 21+
category: platform-integration
tags:
  - webview
  - javascript
  - maps
  - browser
  - integration
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Web, Maps, and Embedded Integration

Use this skill when the app must bridge JavaFX state to JavaScript, embed browser-centric features,
show maps with overlays, or evaluate browser-delivered JavaFX technologies.

## Example

```java
import netscape.javascript.JSObject;
import javafx.concurrent.Worker;
import javafx.scene.web.WebView;

public class BrowserBridge {

    public WebView createView() {
        var webView = new WebView();
        var engine = webView.getEngine();

        engine.getLoadWorker().stateProperty().addListener((obs, oldState, newState) -> {
            if (newState == Worker.State.SUCCEEDED) {
                JSObject window = (JSObject) engine.executeScript("window");
                window.setMember("javaBridge", this);
            }
        });

        engine.loadContent("""
                <html>
                <body>
                    <button onclick="window.javaBridge.log('clicked')">Call Java</button>
                </body>
                </html>
                """);

        return webView;
    }

    public void log(String message) {
        System.out.println(message);
    }
}
```

## Setup notes

- Keep core `WebView` or `WebEngine` setup in `javafx-media-webview-3d`; use this skill for bridge
  logic, embedded-browser workflows, maps, and web delivery decisions.
- Decide early whether a map or browser feature is central enough to justify browser-centric
  packaging or debugging constraints.
- Treat JavaScript bridges as an API surface with explicit ownership, not as a grab bag of callbacks.

## Gotchas

- Browser integration changes security, debugging, and packaging assumptions significantly.
- Maps need stable ownership of layers, projection, markers, and overlay refresh timing.
- Browser-delivered JavaFX and native desktop JavaFX are different deployment models, not skin-deep variants.
