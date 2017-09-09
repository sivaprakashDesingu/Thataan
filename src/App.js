import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChangePractiseText = this.handleInputChangePractiseText.bind(this)
    this.handleInputChangeUserTypedText = this.handleInputChangeUserTypedText.bind(this)
    this.state = { practiseText: '', userTypedText: '' }
  }

  handleInputChangePractiseText (e) {
    let targetValue = e.target.value
    let targetName = e.target.name
    this.setState({ practiseText: targetValue })
  }

  handleInputChangeUserTypedText (e) {
    let userTypedText = e.target.value
    let practiseText = this.state.practiseText
    let compareIndex = userTypedText.length - 1
    if (userTypedText[compareIndex] === practiseText[compareIndex]) {
      this.setState({ userTypedText: userTypedText })
    }
  }
  render () {
    return (
      <div>
        <label> Practise Text </ label>
        <input type='text' name='practiseText' value={this.state.practiseText} onChange={this.handleInputChangePractiseText} />
        <br />
        <label> Your Text</ label>
        <input type='text' name='userTypedText' value={this.state.userTypedText} onChange={this.handleInputChangeUserTypedText} />
        <br />
        <KeyBoard pressedKey={this.state.practiseText[this.state.userTypedText.length]} />
      </div>
    )
  }
}

export default App
