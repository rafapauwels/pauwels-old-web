import React from 'react'
import './index.scss'

import ContactForm from '../ContactForm'

let Contact = () => (
  <div className="contact-page">
    <section className="im-here">
      <h1>I'm currently in Brazil</h1>
      <h2>But don't be shy about the timezone,<br/>I'm always up.</h2>
    </section>
    <section className="talk-to-me">
      <div className="whole-form">
        <h1>Let's talk</h1>
        <h2>Share your thoughts with me</h2>
        <ContactForm />
      </div>
    </section>
  </div>
)

export default Contact