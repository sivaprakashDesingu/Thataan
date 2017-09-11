import React, { Component } from 'react'
import KeyGroup from './KeyGroup.js'

class KeyBoard extends Component {
  render () {
	  // Left finger groups
    let leftLittleFingerGroup = ['ஆ', 'அ', 'ஔ']
    let leftRingFingerGroup = ['ஈ', 'இ', 'ஓ']
    let leftMiddleFingerGroup = ['ஊ', 'உ', 'ஒ']
    let leftIndexFingerGroup1 = ['ஐ', '்', 'வ']
    let leftIndexFingerGroup2 = ['ஏ', 'எ', 'ங']
//	   Right finger groups
    let rightLittleFingerGroup2 = ['ச', 'ய']
    let rightLittleFingerGroup = ['ண', 'ந', 'ழ']
    let rightRingFingerGroup = ['ட', 'த', '.']
    let rightMiddleFingerGroup = ['ன', 'ம', ',']
    let rightIndexFingerGroup1 = ['ற', 'ப', 'ர']
    let rightIndexFingerGroup2 = ['ள', 'க', 'ல']

    let layer1 = [
      leftLittleFingerGroup,
      leftRingFingerGroup,
      leftMiddleFingerGroup,
      leftIndexFingerGroup1,
      leftIndexFingerGroup2,

      rightIndexFingerGroup2,
      rightIndexFingerGroup1,
      rightMiddleFingerGroup,
      rightRingFingerGroup,
      rightLittleFingerGroup,
      rightLittleFingerGroup2
    ]

    let renderedKeyGroups = layer1.map((keyGroup, key) => {
      return (
        <td>
          <KeyGroup key={keyGroup} pressedKey={this.props.pressedKey} keysInGroup={keyGroup} />
        </td>
      )
    }
                                                       )
    return (
        <table>
	    <tbody>
            {renderedKeyGroups}
	    </ tbody>
        </table>
    )
  }
}

export default KeyBoard
