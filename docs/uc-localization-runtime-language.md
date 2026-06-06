# Use Cases — JavaFX Localization and Runtime Language

Derived from AwesomeJavaFX entries such as Language Manager, VocabHunter, and Welk Lidwoord.

## Localization Strategy

```mermaid
flowchart TD
    Need["Need multilingual JavaFX UI"] --> Choice{"When can language change?"}
    Choice -- At startup only --> Static["Bundle at startup"]
    Choice -- While app is running --> Dynamic["Runtime locale switching"]
    Choice -- Domain content is multilingual too --> Content["UI locale + content locale strategy"]
```

## Primary Use Cases

```mermaid
graph TD
    UC1["UC-I18N-1\nResolve labels from resource bundles"] --> UC2["UC-I18N-2\nSwitch locale at runtime"]
    UC2 --> UC3["UC-I18N-3\nBind UI text to locale-aware state"]
    UC3 --> UC4["UC-I18N-4\nKeep formatting and translation keys consistent across views"]
```

## Key gotchas

- Runtime language switching is harder than startup-only localization.
- Translation keys, formatting rules, and pluralization must stay separate from widget code.
- Long text expansion changes layout assumptions quickly.
