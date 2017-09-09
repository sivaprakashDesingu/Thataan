import React, { Component } from 'react'
import KeyGroup from './KeyGroup.js'

class KeyBoard extends Component {
  render () {
	  // Left finger groups
    let leftLittleFingerGroup = ['q', 'a', 'z']
    let leftRingFingerGroup = ['w', 's', 'x']
    let leftMiddleFingerGroup = ['e', 'd', 'c']
    let leftIndexFingerGroup = ['r', 'f', 'v', 't', 'g', 'b']

//	   Right finger groups
    let rightLittleFingerGroup = ['p', ';', '/']
    let rightRingFingerGroup = ['o', 'l', '.']
    let rightMiddleFingerGroup = ['i', 'k', ',']
    let rightIndexFingerGroup = ['u', 'j', 'm', 'y', 'h', 'n']

    return (
        <table>
	    <tbody>
	    // left
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
	    // Right
	    
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightLittleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightRingFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightMiddleFingerGroup} />
          </td>
          <td>
            <KeyGroup pressedKey={this.props.pressedKey} keysInGroup={rightIndexFingerGroup} />
          </td>
	    </ tbody>
        </table>
    )
  }
}

export default KeyBoard
