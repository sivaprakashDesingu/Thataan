import React, { Component } from 'react'
import './App.css'
import KeyGroup from './KeyGroup.js'
import Key from './Key'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = { textbox1: 'c' }
  }

  handleInputChange (e) {
    let targetValue = e.target.value
    let targetName = e.target.name
    this.setState({ [targetName]: targetValue })
  }
  render () {
    return (
	    <div>
	<input type='text' name='textbox1' value={this.state.textbox1} onChange={this.handleInputChange} />
        <KeyBoard pressedKey={this.state.textbox1[this.state.textbox1.length - 1]} />
	    </div>
    )
  }
}

export default App
