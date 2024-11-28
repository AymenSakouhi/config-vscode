This is what you need to add for the settings.json file of your profile to make sure the custom css and js files are loaded.
```json
"vscode_custom_css.imports": [
    "file:///path/custom-vscode.css",
    "file:///path/vscode-script.js"
  ],
```