---
name: javafx-localization-runtime-language
description: Localize JavaFX applications with resource bundles, locale-aware formatting, and runtime language switching.
triggers:
  - javafx localization
  - runtime language switch javafx
  - resourcebundle javafx
  - javafx i18n
compatibility:
  java: 17+
  javafx: 21+
category: ui-core
tags:
  - localization
  - i18n
  - resourcebundle
  - locale
  - translation
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Localization and Runtime Language

Use this skill when the UI must support multiple locales, runtime language switching, or
locale-sensitive formatting. Libraries such as Language Manager show that dynamic switching is a
meaningful JavaFX use case beyond startup-only resource bundles.

## Example

```java
import java.util.Locale;
import java.util.ResourceBundle;
import javafx.beans.binding.Bindings;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class LocalizedView extends VBox {

    private final ObjectProperty<Locale> locale = new SimpleObjectProperty<>(Locale.ENGLISH);

    public LocalizedView() {
        var label = new Label();
        var switchButton = new Button();

        label.textProperty().bind(Bindings.createStringBinding(
                () -> bundle().getString("greeting"),
                locale
        ));

        switchButton.textProperty().bind(Bindings.createStringBinding(
                () -> bundle().getString("switchLanguage"),
                locale
        ));

        switchButton.setOnAction(event -> locale.set(
                locale.get().equals(Locale.ENGLISH) ? Locale.GERMAN : Locale.ENGLISH
        ));

        getChildren().addAll(label, switchButton);
    }

    private ResourceBundle bundle() {
        return ResourceBundle.getBundle("i18n.messages", locale.get());
    }
}
```

## Setup notes

- Keep locale state centralized so text, formatting, and selection widgets switch together.
- Use resource bundles for UI strings and separate them from domain-content translation logic.
- Plan for longer translated text and culture-specific formatting early in the layout.

## Gotchas

- Runtime language switching needs binding-aware text resolution, not one-time label assignment.
- Translation keys should be stable identifiers, not English strings reused as keys.
- Locale-aware formatting affects numbers, dates, and currency, not just labels.
