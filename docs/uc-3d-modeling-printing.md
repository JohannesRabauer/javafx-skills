# Use Cases — JavaFX 3D Modeling and Printing

Derived from AwesomeJavaFX projects such as JCSG, JFXScad, FXyz, and other 3D or CAD-oriented
JavaFX tools.

## 3D Modeling Flow

```mermaid
flowchart TD
    Start["Need a modeling or preview tool"] --> Shape{"Primary task?"}
    Shape -- Construct geometry --> Model["Create solids / meshes / primitives"]
    Shape -- Inspect model --> Preview["Render a 3D preview scene"]
    Shape -- Export for fabrication --> Export["Export to STL / OBJ / print pipeline"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-3D-1\nPreview generated geometry in a JavaFX SubScene"] --> UC2["UC-3D-2\nEdit parameters and rebuild the model"]
    UC2 --> UC3["UC-3D-3\nExport geometry to downstream tooling"]
```

## Skill opportunities

- Skill for using JavaFX 3D scene graph primitives as a modeling preview surface
- Skill for integrating CAD / solid geometry libraries with editable parameter panels
- Skill for keeping export and fabrication logic separate from 3D preview rendering

## Key gotchas

- JavaFX 3D preview is not the same thing as geometry generation or export.
- Mesh and CSG generation often belongs in a separate model layer.
- Export pipelines are library-specific; keep them isolated behind a narrow interface.
