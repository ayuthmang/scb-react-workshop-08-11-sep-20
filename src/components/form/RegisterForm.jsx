import React, { Component } from 'react'

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
  }

  handleFirstNameChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ firstName: e.target.value, firstNameError: '' })
    } else {
      this.setState({ firstName: e.target.value, firstNameError: 'Required' })
    }
  }

  handleLastNameChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ lastName: e.target.value, lastNameError: '' })
    } else {
      this.setState({ lastName: e.target.value, lastNameError: 'Required' })
    }
  }

  handleEmailChange = (e) => {
    const input = e.target.value
    this.setState({ email: e.target.value })

    // validations
    // check if exists
    if (input.length > 0) {
      this.setState({ emailError: '' })
    } else {
      this.setState({ emailError: 'Required' })
      return
    }

    // validate email
    if (validateEmail(input)) {
      this.setState({ emailError: '' })
    } else {
      this.setState({ emailError: 'Invalid email' })
      return
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="firstName">Firstname</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Firstname"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          {this.state.firstNameError && <div>{this.state.firstNameError}</div>}
          <br />
          <label htmlFor="lastName">Lastname</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Lastname"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
          {this.state.lastNameError && <div>{this.state.lastNameError}</div>}
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          {this.state.emailError && <div>{this.state.emailError}</div>}
          <br />

          <button type="submit">submit</button>
          <button type="reset">reset</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
