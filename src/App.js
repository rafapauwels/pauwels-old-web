import React, { Component } from 'react'
import './App.scss'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Home /> */}
        <About />
      </div>
    )
  }
}

export default App
