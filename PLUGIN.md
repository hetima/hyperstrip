# Developing HyperStrip Content Plugin

Content plugin is a normal Hyper plugin that has at least one React Component and registering code for it.


Registration:
```js
import PluginComponentClass from './plugin_component'

export function onRendererWindow(window) {
  //window.stripPlugins = [pluginClass, ...]
  window.stripPlugins = (window.stripPlugins || []).concat(PluginComponentClass)
}
```

Implementation:
```js
import React, { Component } from 'react'
export default class PluginComponentClass extends Component {
  static displayName() {
    return 'plugin-name'
  }

  render() {
    return (
      <div className="wrapper">Hello World!</div>
    )
  }
}
```

`static displayName()` must be implemented. This value corresponds to `plugins` listing in `~/.hyper.js`.


## Brief Configuration

HyperStrip configuration allows the expression below.

```js
    hyperstrip: {
      statusBar:{
        plugins: [
          'hyperline-uptime',
          'hyperline-cpu', {color:'#ccc'},
          'hyperline-memory',
          'hyperline-time', {format:'YYYY-MM-DD hh:mm:ss'},
        ]
      }
    },
```
String is plugin to load. The subsequent dictionary is read as `props.brief` of the previous plugin.

Example:
```js
export default class Time extends Component {
  constructor(props) {
    super(props)
    if (!this.props.brief.format){
      this.props.brief.format = 'LTS'
    }
  }

  getCurrentTime() {
    return moment().format(this.props.brief.format)
  }
}
```


