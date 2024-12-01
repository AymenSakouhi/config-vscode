This is what you need to add for the settings.json file of your profile to make sure the custom css and js files are loaded.
This is in case if you want to do them yourself and I have already provided an old folder where these are generated and ready to be used.
If you are on Macos please make sure to check the path of the files and replace them with the correct path.
```json
"vscode_custom_css.imports": [
    "file:///path/custom-vscode.css",
    "file:///path/vscode-script.js"
  ]
```

# Beautiful commands to know for vim

`shift + a`: Move to the end of the line and enter insert mode

`a`: Move to the end of the line and enter insert mode

`x`: Delete character under cursor

`"+y`: Copy to clipboard

`"+p`: Paste from clipboard

`"+x`: Cut to clipboard

`"+d`: Delete to clipboard

### advanced stuff

`qk`: Record macro to register k

`@k`: Play macro from register k

`*`: Search for a string

`shift + n`: Search for previous occurrence

`shift + N`: Search for next occurrence

`c + i + w`: Change inner word

<ins>!! + command: Repeat last command + command</ins>

`after !! + n`: Go to next word n times

`after !! + .`: Repeat last command

`:%s/old/new/g`: Replace all occurrences of old with new

`:%s/old/new/gc`: Replace all occurrences of old with new with confirmation

### Navigate into the () or {} 

`%`: Move to matching parenthesis or brace
### Selecting certain characters in a phrase

To select certain characters in a phrase, you can use visual mode in Vim:

1. Move the cursor to the beginning of the phrase.
2. Press `v` to enter visual mode.
3. Use the arrow keys or `h`, `j`, `k`, `l` to move the cursor and select the desired characters.

Alternatively, you can use `v` followed by a motion command to select specific characters:

- `v2l`: Select the current character and the next character.
- `v3h`: Select the current character and the previous two characters.

For more precise selection, you can use block visual mode:

1. Move the cursor to the beginning of the block.
2. Press `Ctrl + v` to enter block visual mode.
3. Use the arrow keys or `h`, `j`, `k`, `l` to select the block of characters.
### Yanking

`v + i + w`: Select inner word

`v + a + w`: Select a word

`p`: Paste after cursor

`P`: Paste before cursor

`"+p`: Paste from clipboard

`:reg`: Show registers

`"+number + p`: Paste from register