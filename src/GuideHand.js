import React, { Component } from 'react'

class GuideHand extends Component {
  render () {
    return (
      <div>
        <h1> {this.props.groupIdOfPressedKey} </ h1>
        <img src={require('./GuideHands.png')} alt='Mountain View' />
      </ div>
    )
  }
}

export default GuideHand
