This is what you need to add for the settings.json file of your profile to make sure the custom css and js files are loaded.
```json
"vscode_custom_css.imports": [
    "file:///path/custom-vscode.css",
    "file:///path/vscode-script.js"
  ],
```

#Beautiful commands to know for vim
#===============================

shift + a: # Move to the end of the line and enter insert mode
a : # Move to the end of the line and enter insert mode
x: # Delete character under cursor
"+y: # Copy to clipboard
"+p: # Paste from clipboard
"+x: # Cut to clipboard
"+d: # Delete to clipboard

<!-- advanced stuff -->

qk: # Record macro to register k
@k: # Play macro from register k

star (\*) : # Search for a string
shift + n: # Search for previous occurence
shift + N: # Search for next occurence

c + i + w : # Change inner word
after !! + n: # go to next word n times
after !! + .: # Repeat last command
:%s/old/new/g: # Replace all occurences of old with new
:%s/old/new/gc: # Replace all occurences of old with new with confirmation

<!-- Navigate into the () or {} -->

%: # Move to matching parenthesis or brace
%: # Move to matching parenthesis or brace

<!-- Yanking -->

v + i + w: # Select inner word
v + a + w: # Select a word
p: # Paste after cursor
P: # Paste before cursor
"+p: # Paste from clipboard
:reg: # Show registers
"+number + p: # Paste from register number
