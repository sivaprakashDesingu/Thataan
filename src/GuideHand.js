import React, { Component } from 'react'

class GuideHand extends Component {
  getMarkerPosition (groupIdOfPressedKey) {
    let x = '0px' // left
    let y = '0px' // top
    switch (groupIdOfPressedKey) {
      case 1: // left little finger
        x = '10px'
        y = '150px'
        break
      case 2: // left ring finger
        x = '60px'
        y = '70px'
        break
      case 3: // left middle finger
        x = '140px'
        y = '30px'
        break
      case 4: // left index finger
        x = '230px'
        y = '30px'
        break
      case 5:
        x = '230px'
        y = '30px'
        break
      case 6:
        x = '290px'
        y = '30px'
        break
      case 7:
        x = '290px'
        y = '30px'
        break
      case 8:
        x = '350px'
        y = '30px'
        break
      case 9:
        x = '435px'
        y = '30px'
        break
      case 10:
        x = '435px'
        y = '30px'
    }
    return [x, y]
  }

  render () {
    let markerPosition = this.getMarkerPosition(this.props.groupIdOfPressedKey)
    let guideMarkerCss = {
      background: '#f00',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      position: 'relative',
      left: markerPosition[0],
      top: markerPosition[1]
    }
    return (
      <div>
        <h1> {this.props.groupIdOfPressedKey} </ h1>
        <div id='guideMarker' style={guideMarkerCss} />
        <img src={require('./GuideHands.png')} alt='Mountain View' />
      </ div>
    )
  }
}

export default GuideHand
