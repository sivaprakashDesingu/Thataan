import React, { Component } from 'react'
import KeyGroup from './KeyGroup.js'

class KeyBoard extends Component {
  render () {
	  // Left finger groups
    let leftLittleFingerGroup = ['ஆ', 'அ', 'ஔ']
    let leftRingFingerGroup = ['ஈ', 'இ', 'ஓ']
    let leftMiddleFingerGroup = ['ஊ', 'உ', 'ஒ']
    let leftIndexFingerGroup = ['ஐ', '்', 'வ']
    let leftIndexFingerGroup2 = ['ஏ', 'எ', 'ங']
//	   Right finger groups
    let rightLittleFingerGroup2 = ['ச','ய']
    let rightLittleFingerGroup = ['ண', 'ந', 'ழ']
    let rightRingFingerGroup = ['ட', 'த', '.']
    let rightMiddleFingerGroup = ['ன', 'ம', ',']
    let rightIndexFingerGroup = ['ற', 'ப', 'ர']
    let rightIndexFingerGroup2 = ['ள', 'க', 'ல']

    return (
        <table>
	    <tbody>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={leftLittleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={leftRingFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={leftMiddleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={leftIndexFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={leftIndexFingerGroup2} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightIndexFingerGroup2} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightIndexFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightMiddleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightRingFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightLittleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightLittleFingerGroup2} />
          </td>
	    </ tbody>
        </table>
    )
  }
}

export default KeyBoard
