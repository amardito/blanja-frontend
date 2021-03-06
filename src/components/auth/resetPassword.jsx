import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ResetPassword extends Component {
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
              <p>Reset password</p>
            </div>
          </div>

        </header>
        
        <div className="container d-flex flex-column p-0">
          <div className="form-auth pr-sm-5 pl-sm-5">

            <input className="w-100 mt-4 mb-4" type="email" name="Email" id="email" placeholder="Email"/>
            <div className="submit pr-md-0 pl-md-0 pr-3 pl-3">
              <input className="w-100 submit-auth p-0" type="submit" value="PRIMARY" onClick={(e) => {
                e.preventDefault()
                this.props.p.history.push({
                  pathname: '/auth/confirm-password'
                })
              }}/>
            </div>
            <div className="txtLink-auth d-flex justify-content-center">
              <p>
                Don't have a Blanja account?
                <Link to={{
                  pathname: "/auth/register"
                }}>Register</Link>
              </p>
            </div>

          </div>
        </div>
      </>
    )
  }
}
