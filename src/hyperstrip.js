import React, { Component } from 'react'
import decorate from 'hyper/decorate'

class HyperStrip extends Component {

  render() {
    const { plugins, config, ...props } = this.props

    let colors = ["#fff"]
    if (Array.isArray(config.colors) && config.colors.length > 0) {
      colors = config.colors;
    }

    return (
      <div className="hyperstrip" {...props}>
        {plugins.map((plugin, index) => {
          const brief = plugin.brief || {}
          let color = colors[index % colors.length]
          let drag = 'drag'
          let pointerEvents = 'none'

          if (brief.color){
            color = brief.color
          }
          return (
            <div key={index} className="wrapper" style={{
              color: color,
              stroke: color,
              display: 'flex',
              flexShrink: '0',
              alignItems: 'center',
              paddingLeft: config.itemPadding,
              paddingRight: config.itemPadding,
              WebkitAppRegion: drag,
              pointerEvents: pointerEvents,
            }} >
              <plugin.cls brief={brief} />
            </div>)
        })}
        <style jsx>{`
          .hyperstrip {
            display: flex;
            align-items: center;
            position: absolute;
            overflow: hidden;
            bottom: 0;
            height: ${config.height};
            width: 100%;
            pointer-events: none;
            background: ${config.background};
            margin: 2px 0;
            padding: 0 10px;
            font-family: ${config.fontFamily};
            font-size: ${config.fontSize};
            -webkit-app-region: drag;
          }
        `}</style>
      </div>
    )
  }
}


export default decorate(HyperStrip, 'HyperStrip')
