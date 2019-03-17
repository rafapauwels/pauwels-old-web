import React, { Component } from 'react'
import './index.scss'

export default class ContactForm extends Component {
  
  state = {name: '', email: '', message: '', selected: '', step: 0}
  
  render() {      
    const proxPag = () => { this.setState({ step: 1 }) }
    const handleNameChange = nameEvent => { this.setState({ name: nameEvent.target.value }) }
    const handleOptionChange = changeEvent => { this.setState({ selected: changeEvent.target.value }) }
    const handlePageChange = formSubmitEvent => { formSubmitEvent.preventDefault(); proxPag(); }

    const firstPag = () => (
      <form onSubmit={handlePageChange}>
        <label class="how-call">
          So to begin, how should I call you?
          <input className="name-input" type="text" name="name" value={this.state.name} onChange={handleNameChange} />
        </label>

        <label class="about-what">and about what do you want to talk?</label>
        <label>
          <input type="radio" value="hiring" onChange={handleOptionChange} checked={this.state.selected === "hiring"} />
          Hiring/Freelance work
        </label>
        <label>
          <input type="radio" value="meeting" onChange={handleOptionChange} checked={this.state.selected === "meeting"} />
          Meeting for a coffee
        </label>
        <label>
          <input type="radio" value="other" onChange={handleOptionChange} checked={this.state.selected === "other"} />
          Other
        </label>

        <button type="submit">next</button>
      </form>
    )

    const segPag = () => (
      console.log(this.state)
    )

    return (
        <div className="contact-form">
          {this.state.step === 0 ?
            firstPag() :
            segPag()
          }
          <p>*your email won't be stored or shared in anyway.</p>
        </div>
      )
  }
}
