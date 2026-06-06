---
name: javafx-forms-validation-preferences
description: Build JavaFX forms, validation flows, suggestion inputs, and preferences screens with clear state ownership.
triggers:
  - javafx form validation
  - preferencesfx
  - javafx settings screen
  - javafx autocomplete field
compatibility:
  java: 17+
  javafx: 21+
category: ui-advanced
tags:
  - forms
  - validation
  - preferences
  - settings
  - controls
metadata:
  scope: repository
  maturity: starter
allowed-tools:
  - view
  - rg
  - apply_patch
---

# JavaFX Forms, Validation, and Preferences

Use this skill when the application needs structured data entry, validation feedback, settings
screens, or preference persistence. This is the focused slice left after splitting broader
ecosystem-oriented concerns into their own skills.

## Example

```java
import java.util.prefs.Preferences;
import javafx.beans.binding.Bindings;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.VBox;

public class SettingsForm extends VBox {

    private final Preferences preferences = Preferences.userNodeForPackage(SettingsForm.class);

    public SettingsForm() {
        var endpointField = new TextField(preferences.get("endpoint", ""));
        var errorLabel = new Label();
        var saveButton = new Button("Save");

        errorLabel.textProperty().bind(
                Bindings.when(endpointField.textProperty().isEmpty())
                        .then("Endpoint is required")
                        .otherwise("")
        );

        saveButton.disableProperty().bind(endpointField.textProperty().isEmpty());
        saveButton.setOnAction(event -> preferences.put("endpoint", endpointField.getText()));

        getChildren().addAll(new Label("API Endpoint"), endpointField, errorLabel, saveButton);
    }
}
```

## Setup notes

- Keep a single presentation model for form values, validation state, and persisted preferences.
- Use built-in JavaFX controls first, then add libraries such as ControlsFX, FormsFX, ValidatorFX,
  FXForm2, or PreferencesFX when the project truly benefits from them.
- Keep suggestions and autocomplete separate from validation so input guidance and error handling do
  not fight each other.

## Gotchas

- Bidirectional bindings can make it unclear which layer owns the authoritative form value.
- Persist only validated values unless the product explicitly wants draft-state restoration.
- Preference screens become fragile when UI labels double as persistence keys.
