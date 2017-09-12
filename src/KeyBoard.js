import React, { Component } from 'react'
import KeyGroup from './KeyGroup.js'
import GuideHand from './GuideHand'

class KeyBoard extends Component {
  constructor (props) {
    super(props)
    this.state = {currentLayer: 'layer1'}
    this.layer1 = [
         ['ஆ', 'அ', 'ஔ'], // leftLittleFingerGroup,
         ['ஈ', 'இ', 'ஓ'],  // leftRingFingerGroup,
         ['ஊ', 'உ', 'ஒ'], // leftMiddleFingerGroup,
         ['ஐ', '்', 'வ'],  // leftIndexFingerGroup1,
         ['ஏ', 'எ', 'ங'], // leftIndexFingerGroup2,
     // Right finger groups
         ['ள', 'க', 'ல'],    // rightIndexFingerGroup2,
         ['ற', 'ப', 'ர'], // rightIndexFingerGroup1,
         ['ன', 'ம', ','],   // rightMiddleFingerGroup,
         ['ட', 'த', '.'], // rightRingFingerGroup,
         ['ண', 'ந', 'ழ'], // rightLittleFingerGroup,
         ['ச', 'ய'] // rightLittleFingerGroup2
    ]
    this.layer1Names = [
      'left little finger',
      'left ring finger',
      'left middle finger',
      'left index finger',
      'left index finger']
    this.layer2 = [
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
    this.layer2Names = [
      'right index finger',
      'right index finger',
      'right middle finger',
      'right ring finger',
      'right little finger',
      'right little finger'
    ]
  }
  isItemPresentInArrayOfArray (arrayOfArray = [], elementToFind) { // Return outer array index if element found else returns null
    for (let i = 0; i < arrayOfArray.length; i++) {
      for (let j = 0; j < arrayOfArray[i].length; j++) {
        if (elementToFind === arrayOfArray[i][j]) {
          return i
        }
      }
    }
    return null
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pressedKey !== this.props.pressedKey) {
      if (this.isItemPresentInArrayOfArray(this.layer1, nextProps.pressedKey) !== null) {
        this.setState({currentLayer: 'layer1'})
      } else {
        this.setState({currentLayer: 'layer2'})
      }
    }
  }
  componentWillMount () {
  
  }
  render () {
	  // Left finger groups
   
    let renderedKeyGroups = null

    if (this.state.currentLayer === 'layer1') {
      renderedKeyGroups = this.layer1.map((keyGroup, index) => {
        return (
          <td>
            <KeyGroup key={index} pressedKey={this.props.pressedKey} keysInGroup={keyGroup} keyGroupName={this.layer1Names[index]} />
          </td>
        )
      }
        )
    } else {
      renderedKeyGroups = this.layer2.map((keyGroup, key) => {
        return (
          <td>
            <KeyGroup key={keyGroup} pressedKey={this.props.pressedKey} keysInGroup={keyGroup} />
          </td>
        )
      }
      )
    }
    return (
      <div>
        <div>
          <table>
            <tbody>
              {renderedKeyGroups}
            </ tbody>
          </table>
        </ div>
        <div>
          <GuideHand groupIdOfPressedKey={this.layer1Names.concat(this.layer2Names)[this.isItemPresentInArrayOfArray(this.layer1, this.props.pressedKey)]} />
        </ div>
      </ div>
    )
  }
}

export default KeyBoard
