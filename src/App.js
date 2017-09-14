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
  }

  handleInputChangePractiseText (e) {
    let targetValue = e.target.value
    this.setState({ practiseText: targetValue })
  }


  handleInputChangeUserTypedText (e) {
    let userTypedTextInput = e.target.value
    this.setState({ userTypedText: userTypedTextInput })

  /*  console.log('onchange fired ', userTypedTextInput)
    let practiseText = this.state.practiseText
    let compareIndex = this.state.userTypedText.length - 1
    if (userTypedTextInput[compareIndex] !== practiseText[compareIndex] && this.mismatchIndex.includes(compareIndex) === false) {
      this.mismatchIndex.push(compareIndex)
      console.log('input letter doesnot match the toPractise letter', 'input :',userTypedTextInput[compareIndex], 'compare :', practiseText[compareIndex], 'compare index :', compareIndex)
    }

    if (this.mismatchIndex[this.mismatchIndex.length - 1] > compareIndex) {
      this.mismatchIndex.pop()
    }
    console.log('mismatchIndex', this.mismatchIndex)
    */
  }

  handleOnKeyDown (e) {
    let userTypedTextInput = e.target.value
  //  this.setState({ userTypedText: userTypedTextInput })

    console.log('onchange fired ', userTypedTextInput)
    let practiseText = this.state.practiseText
    let compareIndex = userTypedTextInput.length - 1
    if (userTypedTextInput[compareIndex] !== practiseText[compareIndex] && this.mismatchIndex.includes(compareIndex) === false) {
      this.mismatchIndex.push(compareIndex)
      console.log('input letter doesnot match the toPractise letter', 'input :',userTypedTextInput[compareIndex], 'compare :', practiseText[compareIndex], 'compare index :', compareIndex)
    }

    if (this.mismatchIndex[this.mismatchIndex.length - 1] > compareIndex) {
      this.mismatchIndex.pop()
    }
    console.log('mismatchIndex', this.mismatchIndex)

    let userTypedTextInput2 = e.target.value
    this.setState({ userTypedText: userTypedTextInput })
  }


  highlightWronglyTypedLetters (practiseText, mismatchIndex) {
    console.log('inside hightlight', practiseText, mismatchIndex)
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
        <input type='text' name='userTypedText' value={this.state.userTypedText} onChange={this.handleInputChangeUserTypedText} onKeyUp={this.handleOnKeyDown} />
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
