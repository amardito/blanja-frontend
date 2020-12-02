import React, { Component } from 'react'

export default class ConfirmPassword extends Component {
  render() {
    return (
      <>
        <header className="container d-flex flex-column justify-content-center">
        
          <div className="row justify-content-center">
            <div className="icon-head-auth">
                <img src="/assets/icons/logo.svg" alt="iconBelanja"/>
            </div>
          </div>

          <div className="container flex-column justify-content-center">
            <div className="head-auth">
              <p>Reset Password</p>
            </div>
            <div className="sub-head-auth">
              <p>You need to change your password to activate your account</p>
            </div>
          </div>

        </header>
        
        <div className="container d-flex flex-column p-0">
          <div className="form-auth pr-sm-5 pl-sm-5">

            <input className="w-100 mb-3" type="password" name="Password" id="password" placeholder="Password"/>
            <input className="w-100 mb-4" type="password" name="cPassword" id="cpassword" placeholder="Confirmation New Password"/>
            <div className="submit pr-md-0 pl-md-0 pr-3 pl-3">
              <input className="w-100 submit-auth p-0" type="submit" value="PRIMARY" onClick={(e) => {
                e.preventDefault()
                this.props.p.history.push({
                  pathname: '/auth/login'
                })
              }}/>
            </div>

          </div>
        </div>
      </>
    )
  }
}
