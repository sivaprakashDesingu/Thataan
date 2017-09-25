import React, { Component } from 'react'
import './App.css'
import KeyBoard from './KeyBoard'

class TypingTutor extends Component {
  constructor () {
    super()
    this.handleInputChangePractiseText = this.handleInputChangePractiseText.bind(this)
    this.handleInputChangeUserTypedText = this.handleInputChangeUserTypedText.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.handleLevelChange = this.handleLevelChange.bind(this)
    this.state = { practiseText: '', userTypedText: '', level: '1' }
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

  handleLevelChange (e) {
    let userInput = e.target.value
    this.setState({ level: userInput})
    fetch('http://localhost:5000/practise_data/1/', {mode: 'cors', headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }})
	  .then((response) => response.json())
	  .then((responseJson) => this.setState({practiseText:responseJson}))
	  .catch((error) => console.log(error))
  }

  handleOnKeyDown (e) {
    let userTypedTextInput = e.target.value
    let practiseText = this.state.practiseText
    this.compareIndex = userTypedTextInput.length - 1
    if (userTypedTextInput[this.compareIndex] !== practiseText[this.compareIndex] && this.mismatchIndex.includes(this.compareIndex) === false) {
      this.mismatchIndex.push(this.compareIndex)
    }

    if (this.mismatchIndex[this.mismatchIndex.length - 1] > this.compareIndex) {
      this.mismatchIndex.pop()
    }

    this.setState({ userTypedText: userTypedTextInput })
  }

  highlightTypedLetters (practiseText, mismatchIndex, compareIndex) {
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
    return (practiseCharactersArray)
  }

  componentWillMount() { 
    
    var kmw = require('./static/js/keyman/keymanweb')
 
    window.addEventListener('load', function () {
            kmw.init({attachType:'auto'});

    kmw.osk.hide()
    kmw.addKeyboards({
    id:'ekwtamil99uni',                  // The keyboard's unique identification code.
    name: 'Tamil99',           // The keyboard's user-readable name.
    language:{
      id:'tam',               // A three-letter code uniquely identifying the language.
                              // Please refer to the ISO-639 standard as necessary.
      name:'Tamil'          // The language's name.
    },
    filename:require('./tamil99.js')}); // A valid path to the compiled *.js file representing the keyboard. 
    });

}
  render () {
    return (
      <div>
	<label> Level </ label>
	    <select value={this.state.level} onChange={this.handleLevelChange}>
		    <option value='1'> level 1</ option>
		    <option value='2'> level 2</ option>
		    <option value='3'> level 3</ option>
	    </ select>
	<br />
	

        <label> Practise Text:  </ label>
        <input type='text' name='practiseText' value={this.state.practiseText} onChange={this.handleInputChangePractiseText} onKeyUp={this.handleInputChangePractiseText}/>
        <br />
        <label> Your Text: </ label> 
        <input type='text' name='userTypedText' value={this.state.userTypedText} onChange={this.handleInputChangeUserTypedText} onKeyUp={this.handleOnKeyDown} />
        <br />
        <div>
          {this.highlightTypedLetters(this.state.practiseText, this.mismatchIndex, this.compareIndex)}
        </ div>
        <div>
          {this.state.practiseText}
        </ div>
        <br />
      <div >
        <KeyBoard  pressedKey={this.state.practiseText[this.state.userTypedText.length]} />
	    </ div>
      </div>
    )
  }
}

export default TypingTutor 
