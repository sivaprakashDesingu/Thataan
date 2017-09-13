import React, { Component } from 'react'

class GuideHand extends Component {
  render () {
    let guideMarkerCss = {
      background: '#f00',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      position: 'relative',
      left: '30px',
      top: '50px'
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
