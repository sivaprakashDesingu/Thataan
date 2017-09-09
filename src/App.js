import React, { Component } from 'react'
import './App.css'
import KeyGroup from './KeyGroup.js'
import Key from './Key'
import KeyBoard from './KeyBoard'

class App extends Component {
  render () {
    return (
        <KeyBoard pressedKey='g' />
    )
  }
}

export default App
