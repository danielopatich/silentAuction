import React from 'react'

class Register extends React.Component {
  render () {
    return(
      <div className="homePage">
        <div className="register">
          <h3>Register</h3>
          <span>E-Mail:</span>
            <input className="username" placeholder="E-Mail..."></input>
          <span>Confirm E-Mail:</span>
            <input className="username" placeholder="E-Mail..."></input>
          <span>Password:</span>
            <input type="password" className="username" placeholder="Password..."></input>
          <span>Confirm Password</span>
            <input type="password" className="username" placeholder="Password..."></input>
          <button value="Submit">Submit</button>
        </div>
      </div>
    )
  }
}

export default Register;