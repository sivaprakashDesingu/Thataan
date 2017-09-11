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
    this.setState({ practiseText: targetValue })
  }

  handleInputChangeUserTypedText (e) {
    let userTypedTextInput = e.target.value
    let practiseText = this.state.practiseText
    let compareIndex = userTypedTextInput.length - 1
    console.log('input: ', userTypedTextInput[compareIndex], 'practise: ', practiseText[compareIndex])
    if (userTypedTextInput[compareIndex] !== practiseText[compareIndex]) {
      console.log('input letter doesnot match the toPractise letter')
    }
    this.setState({ userTypedText: userTypedTextInput })
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
