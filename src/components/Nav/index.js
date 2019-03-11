import React from 'react'
import './index.scss'

let Nav = () => (
  <nav>
    <ul>
      <div className="brand">
        <li><a href="/">Rafael Pauwels</a></li>
      </div>
      <div className="navigation">
        <li><a href="/blog">blog</a></li>
        <li><a href="https://github.com/rafapauwels" target="_blank">work</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
      </div>
    </ul>
  </nav>
)

export default Nav