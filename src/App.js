import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = { practiseText: '', userTypedText: '' }
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
        <br />
        <input type='text' name='userTypedText' value={this.state.userTypedText} onChange={this.handleInputChange} />
        <br />
        <KeyBoard pressedKey={this.state.practiseText[this.state.userTypedText.length]} />
      </div>
    )
  }
}

export default App
