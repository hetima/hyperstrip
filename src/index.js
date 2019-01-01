import React, { Component } from 'react'
import HyperStrip from './hyperstrip'
import DefaultConfig from './default-config'
import helloworld from './helloworld'

export function onRendererWindow(window) {
    //window.stripPlugins = [pluginClass, ...]
    window.stripPlugins = (window.stripPlugins || []).concat(helloworld)
}

// export function reduceUI(state, { type, config }) {
//     switch (type) {
//         case 'CONFIG_LOAD':
//         case 'CONFIG_RELOAD': {
//             return state.set('hyperstrip', config.hyperstrip)
//         }
//         default:
//             break
//     }
//     return state
// }

// export function mapHyperState({ ui: { fontFamily, hyperstrip } }, map) {
//     return Object.assign({}, map, {
//         fontFamily
//     })
// }

function filterPluginsByConfig(userPluginNames) {
    const allPlugins = window.stripPlugins
    const filtered = []
    const dict = {}

    if (!userPluginNames) return filtered

    allPlugins.forEach((plugin) => {
        if (plugin.displayName) {
            const name = plugin.displayName()
            dict[name] = plugin
        }
    })

    userPluginNames.forEach((name) => {
        if (typeof name == 'string' && dict.hasOwnProperty(name)) {
            filtered.push({cls:dict[name]})
        } else if (typeof name == 'object' && filtered.length > 0 ) {
            filtered[filtered.length - 1].brief = name
        }
    })

    return filtered
}


function getStatusBarConfig() {
    const defaultValue = DefaultConfig.statusBar
    const config = window.config.getConfig().hyperstrip
    if (!config || !config.statusBar) return defaultValue

    return Object.assign({}, defaultValue, config.statusBar)
}

export function decorateHyperStrip(HyperStrip) {
    return class extends Component {
        static displayName() {
            return 'HyperStrip'
        }

        render() {
            const config = getStatusBarConfig()
            const plugins = filterPluginsByConfig(config.plugins)
            return <HyperStrip {...this.props} plugins={plugins} config={config} />
        }
    }
}

export function decorateHyper(Hyper) {

    return class extends Component {
        static displayName() {
            return 'Hyper'
        }

        render() {
            const customChildren = (
                <div>
                    {this.props.customChildren}
                    <HyperStrip />
                </div>
            )

            return <Hyper {...this.props} customChildren={customChildren} />
        }
    }
}
