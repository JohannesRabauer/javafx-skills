# Use Cases — JavaFX Web, Maps, and Embedded Integration

Derived from AwesomeJavaFX entries such as JxBrowser, Webview Debugger, jpro, WebFX, GMapFX,
Gluon Maps, JavaFX DataViewer, javafx-d3, and ResumeFX.

## Integration Choice

```mermaid
flowchart TD
    Need["Need capabilities beyond pure scene graph widgets"] --> Kind{"What kind of integration?"}
    Kind -- Embedded browser --> Browser["WebView or embedded Chromium"]
    Kind -- Map and geospatial UI --> Maps["Map tiles, overlays, and geospatial interactions"]
    Kind -- Web deployment --> Deploy["Browser-targeted JavaFX delivery"]
    Kind -- JS-backed visualisation --> Bridge["Java-to-JS bridge for charts or UI"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-WEB-1\nEmbed browser content or advanced web components"] --> UC2["UC-WEB-2\nBridge JavaFX state with JavaScript-driven views"]
    UC2 --> UC3["UC-WEB-3\nBuild geospatial interfaces with layers and overlays"]
    UC3 --> UC4["UC-WEB-4\nDebug embedded web content and browser interactions"]
    UC4 --> UC5["UC-WEB-5\nEvaluate desktop-native versus browser-delivered JavaFX strategies"]
```

## Candidate skills from this domain

- Skill for WebView / embedded browser integration and Java-JS communication
- Skill for geospatial JavaFX UIs with maps, markers, layers, and overlays
- Skill for hybrid JavaFX/web visualisation pipelines
- Skill for deciding when to deliver JavaFX in the browser versus as a native desktop app

## Key gotchas

- Browser embedding changes security, debugging, and packaging constraints significantly.
- Map widgets need clear ownership of projection, overlay updates, and interaction state.
- Hybrid JavaFX/web flows are product architecture decisions, not just a widget choice.
