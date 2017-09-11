import React, { Component } from 'react'
import KeyGroup from './KeyGroup.js'

class KeyBoard extends Component {
  isItemPresentInArrayOfArray (arrayOfArray = []) {
    for (let i = 0; i < arrayOfArray.length; i++) {
      for (let j = 0; j < arrayOfArray[i].length; j++) {
        if (this.props.pressedKey === arrayOfArray[i][j]) {
          return true         	
        }
      }
    }
    return false
  }
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
    let layer2 = [
      ['ஸ',  '௹',  '௳'], // Left little finger group
      ['ஷ', '௺', '௴'],
      ['ஜ', '௸', '௵'],
      ['ஹ' , 'ஃ', '௶'],
      ['க்ஷ', '🌕', '௷'],

      ['ஶ்ரீ', '', 'ௐ'], // Right index finger group 1
      ['*', '"', '<'],
      ['[',  '௱',  '>'],
      [']', ';', '?'],
      ['{', '\'']
    ]
    let renderedKeyGroups = null

    if (this.isItemPresentInArrayOfArray(layer1)) {
      renderedKeyGroups = layer1.map((keyGroup, key) => {
        return (
          <td>
            <KeyGroup key={keyGroup} pressedKey={this.props.pressedKey} keysInGroup={keyGroup} />
          </td>
        )
      }
        )
    } else {
      renderedKeyGroups = layer2.map((keyGroup, key) => {
        return (
          <td>
            <KeyGroup key={keyGroup} pressedKey={this.props.pressedKey} keysInGroup={keyGroup} />
          </td>
        )
      }
      )
    }
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
