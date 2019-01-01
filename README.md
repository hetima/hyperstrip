# HyperStrip

HyperStrip is plugin for [Hyper](https://hyper.is/) terminal that provides status line inspired by [HyperLine](https://github.com/Hyperline/hyperline). Tested with Hyper 2.1.0 on Windows 10.

This plugin only provides the container element. Contents are separately developed so that it's easy to extend and maintain.

# Installation

edit `~/.hyper.js` or other usual ways.

```js
plugins: [
  'hyperstrip',
],
```

# Configuration

edit `~/.hyper.js` like this. Don't forget adjust the terminal frame at `padding`.

```js
  config: {
    padding: '12px 14px 30px 12px',
    hyperstrip: {
      statusBar: {
        background: 'rgba(0, 0, 0, 0.1)',
        colors: ['#fff'],
        fontSize: '14px',
        fontFamily: 'Consolas',
        height: '28px',
        plugins: [
          'hyperline-cpu',
          'hyperline-memory',
          'hyperline-network',
        ]
      }
    },
```

Default values are defined at [default-config.js](src/default-config.js) with a bit detailed explanation.

## Brief Configuration
`plugins` section can contain a optional dictionary called Brief Configuration.

```
'some-plugin-has-brief', { color:'#ccc', otherConfig:'' }, 'next-plugin',
```
String is plugin to load. The subsequent dictionary is read as `props.brief` of the previous plugin.  
Brief Configuration is plugin specific, except of `color` is generally recognized and overrides `colors`.

# Developing Content Plugin

Content plugin is a normal Hyper plugin that has at least one React Component and registering code for it. See [PLUGIN.md](PLUGIN.md) for more info.

## Example Plugins

- [hyperstrip-hyperline-essentials](https://github.com/hetima/hyperstrip-hyperline-essentials) : Plugin collection ported from HyperLine.


# Author
HyperStrip
- hetima

based on HyperLine
- Nick Tikhonov [@nicktikhonov](https://github.com/nicktikhonov)
- Tim Neutkens [@timneutkens](https://github.com/timneutkens)
- Stefan Ivic [@stefanivic](https://github.com/stefanivic)
- Henrik Dahlheim [@henrikdahl](https://github.com/henrikdahl)
