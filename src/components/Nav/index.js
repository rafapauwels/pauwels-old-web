import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

let Nav = () => (
  <nav>
    <ul>
      <div className="brand">
        <li><Link to="/">Rafael Pauwels</Link></li>
      </div>
      <div className="navigation">
        <li><Link to="/blog">blog</Link></li>
        <li><a href="https://github.com/rafapauwels" target="_blank" rel="noopener noreferrer">work</a></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </div>
    </ul>
  </nav>
)

export default Nav