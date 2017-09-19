import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css'
import TypingTutor from './TypingTutor'
import Login from './Login'

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Login />
        </ BrowserRouter>
        <TypingTutor />
      </ div>
    )
  }
}

export default App
