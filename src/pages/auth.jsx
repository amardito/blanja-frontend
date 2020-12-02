import React, { Component } from 'react'
import '../styles/pages/auth.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from '../components/auth/login';
import Register from '../components/auth/register';
import ResetPassword from '../components/auth/resetPassword';
import ConfirmPassword from '../components/auth/confirmPassword';

export default class Auth extends Component {
  constructor(){
    super();
    this.state = {
      page: ()=>{
        return(
          <div></div>
        )
      }
    }
  }
  setPages=()=>{
    if(this.props.location.pathname === '/auth' || 
    this.props.location.pathname === '/auth/'){
      this.setState({
        page: ()=>{
          return(
            <Login p={this.props}/>
          )
        }
      })
    }
    if(this.props.location.pathname === '/auth/register' || 
    this.props.location.pathname === '/auth/register/'){
      this.setState({
        page: ()=>{
          return(
            <Register p={this.props}/>
          )
        }
      })
    }
    if(this.props.location.pathname === '/auth/login' || 
    this.props.location.pathname === '/auth/login/'){
      this.setState({
        page: ()=>{
          return(
            <Login p={this.props}/>
          )
        }
      })
    }
    if(this.props.location.pathname === '/auth/reset-password'){
      this.setState({
        page: ()=>{
          return(
            <ResetPassword p={this.props}/>
          )
        }
      })
    }
  }

  componentDidMount = () => {
    this.setPages()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setPages()
      if(this.props.location.pathname === '/auth/confirm-password'){
        this.setState({
          page: ()=>{
            return(
              <ConfirmPassword p={this.props}/>
            )
          }
        })
      }
    }
  }

  render() {
    return (
      <main className="main-auth" style={{fontFamily: 'Metropolis Regular'}}>
        <div className="d-flex flex-column justify-content-center align-items-center">
         {this.state.page()}
        </div>
      </main>
    )
  }
}
