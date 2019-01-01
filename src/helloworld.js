import React, { Component } from 'react'

export default class HelloWorld extends Component {
  static displayName() {
    return 'helloworld'
  }

  render() {
    return (
      <div className="wrapper">
        <span className="label">HyperStrip</span> <a href="https://github.com/hetima/hyperstrip" style={{
          color: '#fff',
          textDecoration: 'none',
          pointerEvents: 'auto',
          WebkitAppRegion: 'no-drag'
        }} onClick={ev => {
          window.require('electron').shell.openExternal(ev.target.href);
          ev.preventDefault();
        }}> &lt;Click to open HyperStrip project page for more info&gt;</a>
      </div>
    )
  }
}
