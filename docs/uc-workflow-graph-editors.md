# Use Cases — JavaFX Workflow and Graph Editors

Derived from AwesomeJavaFX projects such as graph editor libraries, VWorkflows, and node-mapping
tools that let users build or edit connected workflows visually.

## Workflow Editor Flow

```mermaid
flowchart TD
    Start["Need a node-based editor"] --> Shape{"What is the model?"}
    Shape -- Business workflow --> Flow["Workflow / process editor"]
    Shape -- Visual programming --> Graph["Node graph / code generation editor"]
    Shape -- Mapping or transformation --> Map["Data mapping / ETL-style editor"]
```

## Primary Use Cases

```mermaid
graph LR
    UC1["UC-GRAPH-1\nCreate draggable nodes and connections"] --> UC2["UC-GRAPH-2\nPersist the graph model separately from the scene"]
    UC2 --> UC3["UC-GRAPH-3\nSupport zooming, selection, and undo/redo"]
    UC3 --> UC4["UC-GRAPH-4\nExport or execute the workflow"]
```

## Skill opportunities

- Skill for building custom node graph editors with JavaFX scene graph primitives
- Skill for separating graph model, view, and command history from the UI layer
- Skill for zooming, panning, snapping, and connection routing in visual editors

## Key gotchas

- If the graph model lives only in the scene graph, undo/redo and persistence become fragile.
- Large node graphs need virtualized rendering or culling strategies.
- Connection routing and hit testing become a product feature, not just a rendering detail.
