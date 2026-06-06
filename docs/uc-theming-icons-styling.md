# Use Cases — JavaFX Theming, Icons, and Styling

Derived from AwesomeJavaFX entries such as BootstrapFX, JMetro, MaterialFX, JFoenix, MonetFX,
FontAwesomeFX, Ikonli, FluentFxCss, CssFX, FroXty, SyntheticaFX, and related styling tools.

## Styling Strategy

```mermaid
flowchart TD
    Start["Need a polished visual system"] --> Choice{"What is the main styling goal?"}
    Choice -- Faster consistent theme --> Theme["Adopt a theme pack"]
    Choice -- Iconography --> Icons["Use an icon library"]
    Choice -- Programmatic CSS generation --> Builder["Use a CSS builder"]
    Choice -- Faster iteration --> Reload["Add live CSS reload workflow"]
    Choice -- Platform or brand feel --> Custom["Layer custom tokens and brand styles"]
```

## Primary Use Cases

```mermaid
graph LR
    Dev([Developer]) --> UC1["UC-STYLE-1\nChoose a coherent look-and-feel system"]
    Dev --> UC2["UC-STYLE-2\nApply icon packs consistently across controls and actions"]
    Dev --> UC3["UC-STYLE-3\nManage style tokens and CSS generation programmatically"]
    Dev --> UC4["UC-STYLE-4\nSpeed up visual iteration with hot reload and inspection tools"]
    Dev --> UC5["UC-STYLE-5\nMix library themes with custom branding safely"]
```

## Candidate skills from this domain

- Skill for selecting and integrating JavaFX theme libraries
- Skill for icon pack usage and action-driven visual language
- Skill for scalable CSS architecture, tokens, and programmatic style generation
- Skill for hot-reload styling workflows during UI development

## Key gotchas

- Theme libraries and third-party controls often disagree on class names and CSS assumptions.
- Inline styles are convenient for prototypes but undermine reusable theming.
- Material or fluent-inspired libraries can shape the whole component strategy, not just colors.
