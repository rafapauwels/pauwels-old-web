import React, { Component } from 'react'
import './index.scss'

export default class ContactForm extends Component {
  
  state = {name: '', email: '', subject: '', message: ''}
  
  render() {      
    const handleNameChange = e => { this.setState({ name: e.target.value }) }
    const handleEmailChange = e => { this.setState({ email: e.target.value }) }
    const handleSubjectChange = e => { this.setState({ subject: e.target.value }) }
    const handleMessageChange = e => { this.setState({ message: e.target.value }) }

    const sendEmail = e => {
      e.preventDefault()

      // Change button send to sending and make unclicable
    
      // Make post, if success change 'send' to 'sent' and unclicable unless any stated is altered
      // if fail show red fail and shows the user the user a 'mailto:' button
      fetch('myHerokuApi/api/contact/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
        })
      }).then(response => console.log(response))
    }

    return (
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <label className="name-label"> Name
              <input className="name-input" type="text" name="name" value={this.state.name} onChange={handleNameChange} required/>
            </label>

            <label className="email-label"> Email
              <input className="email-input" type="email" name="email" value={this.state.email} onChange={handleEmailChange} required/>
            </label>

            <label className="subject-label"> Subject
              <input className="subject-input" type="text" name="subject" value={this.state.subject} onChange={handleSubjectChange} required/>
            </label>

            <label className="message-label"> Message
              <textarea className="message-input" type="text" name="message" value={this.state.message} onChange={handleMessageChange} required/>
            </label>
            <button type="submit">send</button>
          </form>
          <footer>*your email won't be stored or shared in anyway.</footer>
        </div>
      )
  }
}
