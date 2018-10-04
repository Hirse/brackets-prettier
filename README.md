[![npm Version](https://img.shields.io/npm/v/hirse.brackets-prettier.svg)](https://www.npmjs.com/package/hirse.brackets-prettier)
[![Brackets Extension Registry Version](https://badges.ml/hirse.brackets-prettier/version.svg)](https://brackets-extension-badges.github.io#hirse.brackets-prettier)
[![Brackets Extension Registry Downloads](https://badges.ml/hirse.brackets-prettier/total.svg)](https://brackets-extension-badges.github.io#hirse.brackets-prettier)

[![Build Status](https://travis-ci.org/Hirse/brackets-prettier.svg?branch=master)](https://travis-ci.org/Hirse/brackets-prettier)
[![Greenkeeper](https://badges.greenkeeper.io/Hirse/brackets-prettier.svg)](https://greenkeeper.io/)

<a href="http://brackets.io/"><img src="https://raw.githubusercontent.com/Hirse/brackets-prettier/master/images/brackets.png" alt="Brackets" align="left" /></a>

<a href="http://prettier.io/"><img src="https://raw.githubusercontent.com/Hirse/brackets-prettier/master/images/prettier.png" alt="Prettier" align="right" /></a>

# Brackets Prettier
[Brackets][Brackets] Extension to format files using [Prettier][prettier].

![Brackets Prettier Button](https://raw.githubusercontent.com/Hirse/brackets-prettier/master/images/brackets-prettier.png)

## Installation
### Latest Release
To install the latest _release_ of this extension use the built-in Brackets [Extension Manager][Brackets Extension Manager] which downloads the extension from the [Brackets Extension Registry][Brackets Extension Registry].

### Latest Commit
To install the latest _commit_ of this extension use the built-in Brackets [Extension Manager][Brackets Extension Manager] which has a function to `Install from URL...` using this link:
```
https://github.com/Hirse/brackets-prettier/archive/master.zip
```

### Brackets npm Registry
The latest _release_ of this extension is also available on the [Brackets npm Registry][Brackets npm Registry].

## Usage
Use the Toolbar Button with the prettier icon, the menu entry *Edit* > *Format File with Prettier*, or the keyboard shortcut `Ctrl`-`Alt`-`F` (`Cmd`-`Shift`-`F` on Mac).

## Configuration
This extension reads indentation settings from Brackets and otherwise relies on Prettier to determine the configuration itself. Prettier [options][prettier options] can be set in a [configuration file][prettier config file] in the project folder.

## License
Brackets Detect Indentation is licensed under the [MIT license][MIT].  
[Prettier][prettier] itself is also licensed under the [MIT license][MIT].


[Brackets]: http://brackets.io
[Brackets Extension Manager]: https://github.com/adobe/brackets/wiki/Brackets-Extensions
[Brackets Extension Registry]: https://registry.brackets.io
[Brackets npm Registry]: https://github.com/zaggino/brackets-npm-registry
[MIT]: https://opensource.org/licenses/MIT
[prettier]: https://prettier.io
[prettier options]: https://prettier.io/docs/en/options.html
[prettier config file]: https://prettier.io/docs/en/configuration.html
