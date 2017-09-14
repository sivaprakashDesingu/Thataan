import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChangePractiseText = this.handleInputChangePractiseText.bind(this)
    this.handleInputChangeUserTypedText = this.handleInputChangeUserTypedText.bind(this)
    this.state = { practiseText: '', userTypedText: '' }
    this.mismatchIndex = []
  }

  handleInputChangePractiseText (e) {
    let targetValue = e.target.value
    this.setState({ practiseText: targetValue })
  }

  handleInputChangeUserTypedText (e) {
    let userTypedTextInput = e.target.value
    let practiseText = this.state.practiseText
    let compareIndex = userTypedTextInput.length - 1
    if (userTypedTextInput[compareIndex] !== practiseText[compareIndex] && this.mismatchIndex.includes(compareIndex) === false) {
      this.mismatchIndex.push(compareIndex)
      console.log('input letter doesnot match the toPractise letter', this.mismatchIndex)
    }

    if (this.mismatchIndex[this.mismatchIndex.length - 1] > compareIndex) {
      this.mismatchIndex.pop()
    }
    console.log('input letter doesnot match the toPractise letter', this.mismatchIndex)
    this.setState({ userTypedText: userTypedTextInput })
  }

  highlightWronglyTypedLetters (practiseText, mismatchIndex) {
    let practiseCharactersArray = practiseText.split('') 
    practiseCharactersArray = practiseCharactersArray.map((v, i, a) => { 
      if (mismatchIndex.includes(i)) { return <mark>{v}</mark> }
      else {
        return a[i]
    }  
    })
    console.log(practiseCharactersArray) 
    return (practiseCharactersArray) 
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
        <div>
          {this.highlightWronglyTypedLetters(this.state.practiseText, this.mismatchIndex)}
        </ div>
//	<div>M<mark>O</mark>NOJ</div>
        <br />
        <KeyBoard pressedKey={this.state.practiseText[this.state.userTypedText.length]} />
      </div>
    )
  }
}

export default App
