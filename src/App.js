import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class App extends Component {
  constructor () {
    super()
    this.handleInputChangePractiseText = this.handleInputChangePractiseText.bind(this)
    this.handleInputChangeUserTypedText = this.handleInputChangeUserTypedText.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.state = { practiseText: '', userTypedText: '' }
    this.mismatchIndex = []
    this.compareIndex = -1
  }

  handleInputChangePractiseText (e) {
    let targetValue = e.target.value
    this.setState({ practiseText: targetValue })
  }


  handleInputChangeUserTypedText (e) {
    let userTypedTextInput = e.target.value
    this.setState({ userTypedText: userTypedTextInput })
  }

  handleOnKeyDown (e) {
    let userTypedTextInput = e.target.value
  //  this.setState({ userTypedText: userTypedTextInput })

    console.log('onchange fired ', userTypedTextInput)
    let practiseText = this.state.practiseText
    this.compareIndex = userTypedTextInput.length - 1
    if (userTypedTextInput[this.compareIndex] !== practiseText[this.compareIndex] && this.mismatchIndex.includes(this.compareIndex) === false) {
      this.mismatchIndex.push(this.compareIndex)
      console.log('input letter doesnot match the toPractise letter', 'input :',userTypedTextInput[this.compareIndex], 'compare :', practiseText[this.compareIndex], 'compare index :', this.compareIndex)
    }

    if (this.mismatchIndex[this.mismatchIndex.length - 1] > this.compareIndex) {
      this.mismatchIndex.pop()
    }
    console.log('mismatchIndex', this.mismatchIndex)

    this.setState({ userTypedText: userTypedTextInput })
  }


  highlightTypedLetters (practiseText, mismatchIndex, compareIndex) {
    console.log('inside hightlight', practiseText, mismatchIndex)
    let practiseCharactersArray = practiseText.split('')
    practiseCharactersArray = practiseCharactersArray.map((v, i, a) => {
      if (mismatchIndex.includes(i)) {
        return <mark>{v}</mark>
      }
      else if (i <= compareIndex) {
        return <u>{a[i]}</u>
      }
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
        <input type='text' name='userTypedText' value={this.state.userTypedText} onChange={this.handleInputChangeUserTypedText} onKeyUp={this.handleOnKeyDown} />
        <br />
        <div>
          {this.highlightTypedLetters(this.state.practiseText, this.mismatchIndex, this.compareIndex)}
        </ div>
        <div>
          {this.state.practiseText}
        </ div>
        <br />
        <KeyBoard pressedKey={this.state.practiseText[this.state.userTypedText.length]} />
      </div>
    )
  }
}

export default App
