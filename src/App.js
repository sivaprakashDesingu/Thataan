import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css'
import TypingTutor from './TypingTutor'
import Login from './Login'

const AccountMenu = () => (
  <div> 
    <nav>
      <Link to="/Login"> Login </ Link>
    </ nav>
    <div>
      <Route path="/Login" component={Login}/> 
    </div>
  </ div>
  )

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <AccountMenu />
        </ BrowserRouter>
        <TypingTutor />
      </ div>
    )
  }
}

export default App
