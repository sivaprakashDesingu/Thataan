import React, { Component } from 'react' 
import Key from './Key'

class KeyGroup extends Component {
  constructor () {
    super()
    this.state = {doesContainsPressedKey: false}
  }
  render () {
    let keys = ['q', 'a', 'z']

    let renderedKeys = keys.map((keyName) => { return (<Key keyName={keyName} />) })
    return (
      <div id='keyGroup'>
        {renderedKeys}
      </ div>)
  }
}

export default KeyGroup
