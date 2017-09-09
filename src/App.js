import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = { practiseText: '' }
  }

  handleInputChange (e) {
    let targetValue = e.target.value
    let targetName = e.target.name
    this.setState({ [targetName]: targetValue })
  }
  render () {
    return (
      <div>
        <input type='text' name='practiseText' value={this.state.practiseText} onChange={this.handleInputChange} />
        <KeyBoard pressedKey={this.state.practiseText[this.state.practiseText.length - 1]} />
      </div>
    )
  }
}

export default App
