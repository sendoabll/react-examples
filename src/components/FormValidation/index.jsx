import React, { Component } from 'react'

import MlInput from 'MyLib/Input'
import MlIcon from 'MyLib/Icon'

const getInitialState = () => {
  return {
    isValid: false,
    username: '',
    birthdate: '',
    email: '',
    password: '',
    formErrors: {
      username: '',
      birthdate: '',
      email: '',
      password: ''
    }
  }
}

class FormValidation extends Component {
  constructor () {
    super()
    this.state = getInitialState()

    this.handleReset = this.handleReset.bind(this)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.handleBirthdateInput = this.handleBirthdateInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleReset () {
    this.setState(getInitialState())
  }

  handleUsernameInput (value) {
    this.setState({ username: value })

    if (value.length < 3) {
      this.setStateFormError({ username: 'Please, enter a valid username' })
    } else {
      this.setStateFormError({ username: '' })
    }
  }

  handleBirthdateInput (value) {
    this.setState({ birthdate: value })

    if (value.length < 3) {
      this.setStateFormError({ birthdate: 'Please, enter a valid birthdate' })
    } else {
      this.setStateFormError({ birthdate: '' })
    }
  }

  handleEmailInput (value) {
    this.setState({ email: value })

    if (value.length < 3) {
      this.setStateFormError({ email: 'Please, enter a valid email' })
    } else {
      this.setStateFormError({ email: '' })
    }
  }

  handlePasswordInput (value) {
    this.setState({ password: value })

    if (value.length < 3) {
      this.setStateFormError({ password: 'Please, enter a valid password' })
    } else {
      this.setStateFormError({ password: '' })
    }
  }

  handleValidation (value) {
    const formIsValid = Object.keys(this.state.formErrors).every((key, othr) => {
      return this.state.formErrors[key] === ''
    })
    console.log('formIsValid', formIsValid)
    if (formIsValid) {
      this.setState({ 'isValid': true })
    } else {
      this.setState({ 'isValid': false })
    }
  }

  setStateFormError (error = {}) {
    this.setState({
      formErrors: {
        ...this.state.formErrors,
        ...error
      }
    })
  }

  renderValidForm () {
    if(!!this.state.isValid) {
      return (
        <div className="w-full flex-1 border border-grey ml-4 flex flex-col items-start justify-start">
          <table className="w-full text-left">
          <thead>
              <tr>
                  <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Key</th>
                  <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Value</th>
              </tr>
          </thead>
          <tbody>
              <tr className="hover:bg-blue-lightest">
                  <td className="py-4 px-6 border-b border-grey-light">Username</td>
                  <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.username}</td>
              </tr>
              <tr className="hover:bg-blue-lightest">
                  <td className="py-4 px-6 border-b border-grey-light">Birthdate</td>
                  <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.username}</td>
              </tr>
              <tr className="hover:bg-blue-lightest">
                  <td className="py-4 px-6 border-b border-grey-light">Email</td>
                  <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.email}</td>
              </tr>
              <tr className="hover:bg-blue-lightest">
                  <td className="py-4 px-6 border-b border-grey-light">Password</td>
                  <td className="py-4 px-6 border-b border-grey-light text-center">{this.state.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }

    return null
  }

  render () {
    return (
      <div className="FormValidation flex-1 w-full h-full flex flex-col">
        <div className="my-8">
          <div className="flex">
            <h1 className="flex-1 text-grey-darkest">
              Form validation
            </h1>
            <button
              className="flex-no-shrink p-2 px-4 border-2 rounded text-black border-black hover:text-white hover:bg-black"
              onClick={this.handleReset}>
              <MlIcon
                icon="eraser"
                size="sm" />
              <span className="ml-4">Clean form</span>
            </button>
          </div>
          <p className="text-grey-darkest my-4">
            This example is a simple quote generator. In this case, I am using <span className="markup-code">axios</span> for making a request to a github gist from camperbot.
          </p>
        </div>

        <div className="flex-1 flex items-between justify-start">
          <div className="flex-1 mr-4 flex flex-col items-start justify-start">
            <MlInput
              placeholder="Name"
              iconName="user"
              value={this.state.username}
              error={this.state.formErrors.username}
              onChange={this.handleUsernameInput} />

            <MlInput
              placeholder="Birthdate (dd/mm/yyyy)"
              iconName="birthday-cake"
              value={this.state.birthdate}
              error={this.state.formErrors.birthdate}
              onChange={this.handleBirthdateInput} />

            <MlInput
              placeholder="Email"
              iconName="at"
              value={this.state.email}
              error={this.state.formErrors.email}
              onChange={this.handleEmailInput} />

            <MlInput
              placeholder="Password"
              iconName="key"
              value={this.state.password}
              error={this.state.formErrors.password}
              onChange={this.handlePasswordInput} />

              <button
                className="self-center mt-8 flex-no-shrink p-2 px-4 border-2 rounded text-green border-green hover:text-white hover:bg-green"
                onClick={this.handleValidation}>
                <MlIcon
                  icon="eraser"
                  size="sm" />
                <span className="ml-4">Validate</span>
              </button>
          </div>
          <div className="flex-1 ml-4 flex flex-col items-start justify-start">
          { this.renderValidForm() }
          </div>
        </div>
      </div>
    )
  }
}

export default FormValidation