# Contributing to Spades

First off, thanks for taking the time to contribute! 🖤🤍💜

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier to maintain the codebase and smooth out the experience for all involved. The community looks forward to your contributions! 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Tell your friends!

## Table of Contents

- [Contributing to Spades](#contributing-to-spades)
  - [Table of Contents](#table-of-contents)
    - [Creating a Variant](#creating-a-variant)
    - [Adjusting Language Color Scheme](#adjusting-language-color-scheme)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Improving the Documentation](#improving-the-documentation)
    - [Reporting Bugs](#reporting-bugs)

### Creating a Variant

As of March 2023, I've added another variant to the _Spades_ color theme called _Spades: Benoit_, after the asexual activist [Yasmin Benoit](https://www.instagram.com/theyasminbenoit/?hl=en). Contributors (probably just myself lol) should name future variants after ace activists and notable figures.

1. **Create the file** - Until a cleaner workflow is implemented, it's best to just copy one file and then change the hex values to whatever for the new theme
2. **Update `package.json`** - As outlined in `vsc-extension-quickstart.md`, the `themes` folder holds the locations of each theme defined in `package.json` in the base directory. Under the `contributes/themes` key, add the new theme with:

```json
{
  "label": "[Variant]",
  "uiTheme": "vs-dark",
  "path": "./themes/[Variant]-color-theme.json"
}
```

3. Verify the variant is seen by the extension

### Adjusting Language Color Scheme

If there's a programming or markup language that you want to be supported, you can either:

1. Leave an Issue
2. Code it yourself! Steps detailed below:

First check that the language isn't already implemented. See the [already supported languages](README.md#supported-languages]. There, you'll also find which languages are to be supported next as well. Regardless, if you still want to add a language, then here are the steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Red-CS/Spades
   ```

2. **Change into the new directory**
   ```bash
   cd ./Spades
   ```
3. **Run the extension**
   1. Press `F5` to open a new window with your extension loaded.
   2. Open `File > Preferences > Color Themes` and pick your color theme.
   3. Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
4. **Apply changes**
   Changes to the theme file are automatically applied to the Extension Development Host window. Test out what you have, and try to use the same preexisting theme colors.
5. **Add an example file**
   The [Language References] folder contains a host of different example files. This allows other people to get a general feel of what the theme looks like for other languages. Please add an example program that is well developed. [This](https://github.com/TheRenegadeCoder/sample-programs/tree/main/archive) repository is great for getting programs of various programming languages.
   > Each file should contain imports, Strings, keywords, etc to get a good feel

Once you're finished with that, follow the cleanup instructions:

1. Add your name and Github username to the [Collaborators](README.md/#collaborators) section, formatted as follows:
   > Name (Github Username) - Language
   > If you add more than one language, separate them with commas.
2. Update the [Supported Languages](README.md/#supported-languages) and [Languages To Be Implemented](README.md/#languages-to-be-implemented) sections of the README accordingly.
3. Add any new colors/shades introduced to the [Colors](README.md/#colors) section.
4. Bump the Theme version up by one minor patch in the [`package.json`](package.json)
   > For example, if the current version is `1.3.4`, update it to `1.4.0`
5. Submit a Pull Request! I'll be happy to view your changes, and so long as everything looks good and the above directions were followed, your PR should be accepted!

### Suggesting Enhancements

If you're unhappy with any aspects of the theme or would like an improvement in any area, just leave an issue! I'll be happy to take a look at it and see what I can do to fix the problem.

### Improving the Documentation

To suggest changes to the documentation, you can either edit any markdown file directly in Github or clone the project and edit it that way, then submitting a Pull Request. Please add a description as to why your submitting this change.

### Reporting Bugs

People mess up, things happen. If you see any bugs, please leave an issue! I'll address it as soon as I can.
