import React, { Component } from 'react'

class Key extends Component {
  constructor () {
    super()
    this.state = {isPressed: false}
    this.keyCss = {
      width: '30px',
      height: '30px',
      background: `${(this.state.isPressed ? 'blue' : 'grey')}`,

      textAlign: 'center'
    }
  }

  render () {
    return (
      <div id='key' style={this.keyCss}> a </ div>
    )
  }
}

export default Key
