import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css'
import TypingTutor from './TypingTutor'
import Login from './Login'

const MainTab = () => (
  <div> 
    <nav>
      <Link to="/login"> Login </ Link>
      <Link to="/practise"> Practise </ Link>
    </ nav>
    <div>
      <Route path="/login" component={Login}/> 
      <Route path="/practise" component={TypingTutor}/> 
    </div>
  </ div>
  )


class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <MainTab/>
        </ BrowserRouter>
      </ div>
    )
  }
}

export default App
