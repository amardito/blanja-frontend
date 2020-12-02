import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <>
        <header className="container d-flex flex-column justify-content-center">
          
          <div className="row justify-content-center">
            <div className="icon-head-auth">
                <img src="/assets/icons/logo.svg" alt="iconBelanja"/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="head-auth">
              <p>Please login with your account</p>
            </div>
          </div>

        </header>

        <div className="container row justify-content-center">
          <div className="select-1 d-flex justify-content-center align-items-center">
            <p>Costummer</p>
          </div>
          <div className="select-2 d-flex justify-content-center align-items-center">
            <p>Seller</p>
          </div>
        </div>
        
        <div className="container d-flex flex-column p-0">
          <div className="form-auth pr-sm-5 pl-sm-5">

            <input className="w-100 mt-4" type="email" name="Email" id="email" placeholder="Email"/>
            <input className="w-100 mb-4 mt-3" type="password" name="Password" id="password" placeholder="Password"/>
            <div className="txtLink-auth d-flex justify-content-end">
              <Link className="custom-auth" to={{
                  pathname: "/auth/reset-password"
              }}>Forgot password?</Link>
            </div>
            <div className="submit pr-md-0 pl-md-0 pr-3 pl-3">
              <input className="w-100 submit-auth p-0" type="submit" value="PRIMARY" onClick={(e) => {
                e.preventDefault()
                this.props.p.history.push({
                  pathname: '/'
                })
              }}/>
            </div>
            <div className="txtLink-auth d-flex justify-content-center">
              <p>
                Don't have a Blanja account?
                <Link to={{
                  pathname: "/auth/register"
                }}> Register</Link>
              </p>
            </div>

          </div>
        </div>
      </>
    )
  }
}
