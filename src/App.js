import React, { Component } from 'react'
import './App.scss'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
