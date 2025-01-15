# atype-bin-font

_**Inspired** by **[Atypography](https://www.atypography.com/) Art Movement.**_

> **CLI only** at this point and **requires NodeJS** to run.

## Usage

`$ node index.js gvfsashgawt`

```

 ██  ███ ███ ██
 ██  ██  ███  ██
 ██    █ ███  ██
 ██ █    ██  ███
 ██    █ ███ ███
 ███ █

```

### CLI Arguments

- `--zero=<char>` or `-0=<char>` : replace zeros with `<char>`
- `--one=<char>` or `-1=<char>` : replace ones with `<char>`
- `--per-line` or `-p` : number of glyphs per line

### More Examples

`$ node index.js 'gvfsashgawt' -p=6`

```

 ██  ███ ███ ██  ██  ██  ███  ██ ██    █ ███  ██
 ██ █    ██  ███ ██    █ ███ ███ ███ █

```

Defining replacers of ones and zeros in bits:

`node index.js 'gvfsashgawt' -1='|'`

```

 ||  ||| ||| ||
 ||  ||  |||  ||
 ||    | |||  ||
 || |    ||  |||
 ||    | ||| |||
 ||| |

```

`$ node index.js 'gvfsashgawt' -0='.' -1='X' -p=4`

```

.XX..XXX.XXX.XX..XX..XX..XXX..XX
.XX....X.XXX..XX.XX.X....XX..XXX
.XX....X.XXX.XXX.XXX.X..

```

To provide input string that has space inside, wrap it with quotes:

`$ node index.js 'gvfsash gawt'`

```

 ██  ███ ███ ██
 ██  ██  ███  ██
 ██    █ ███  ██
 ██ █     █
 ██  ███ ██    █
 ███ ███ ███ █

```

Otherwise, you'll get the error.

`$ node index.js gvfsash gawt`

```
Only one input string is allowed!!
```
