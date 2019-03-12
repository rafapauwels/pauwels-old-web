import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

let Home = () => (
  <section>
    <p className="action-call">Hi.</p>
    <p>I'm a software developer passionate about crafting beautiful, responsive and accessible websites, supported by blazzing fast and scalable backends.</p>
    <div className="button-group">
      <a className="work-button" href="https://github.com/rafapauwels" target="_blank" rel="noopener noreferrer">work</a>
      <Link className="blog-button" to="/blog">blog</Link>
    </div>
  </section>
) 

export default Home