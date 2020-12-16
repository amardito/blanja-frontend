import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class Consumer extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      email : '',
      password : '',
      errMsg: ''
    }
  }
  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }
  handlerSubmit = async (event) => {
    event.preventDefault()
    const data = JSON.stringify({
      username: this.state.username,
      email : this.state.email,
      password : this.state.password,
      level : 1,
    })
    // console.log(data);
    await api.post(`auth/register`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(()=>{
      console.log('succsess create new data');
      this.props.pro.history.push('/auth/login')
    }).catch((e)=>{
      if (e.response.status === 409) {
        this.setState({
          errMsg : 'Email already registred'
        })
      }
    })
  }
  render(){
    return(
      <>
        <form id="consumerAccount" onSubmit={this.handlerSubmit}>
          <input className="w-100 mt-4" type="text" name="username" id="name" placeholder="Name" required onChange={this.handlerChange}/>
          <input className="w-100 mt-3" type="email" name="email" id="email" placeholder="Email" required onChange={this.handlerChange}/>
          <input className="w-100 mb-4 mt-3" type="password" name="password" id="password" placeholder="Password" required onChange={this.handlerChange}/>
          <div className="submit pr-md-0 pl-md-0 pr-3 pl-3">
            <input className="w-100 submit-auth p-0" type="submit" value="Register"/>
          </div>
        </form>
        <span style={{color: 'red', marginBottom: '15px', textAlign: 'center'}}>{this.state.errMsg}</span>
      </>
    )
  }
}

class Seller extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      email : '',
      password : '',
      phone: '',
      store: '',
      errMsg: ''
    }
  }
  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }
  handlerSubmit = async (event) => {
    event.preventDefault()
    const data = JSON.stringify({
      username: this.state.username,
      email : this.state.email,
      password : this.state.password,
      phone: this.state.phone,
      store: this.state.store,
      level : 2,
    })
    // console.log(data);
    await api.post(`auth/register`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(()=>{
      console.log('succsess create new data');
      this.props.pro.history.push('/auth/login')
    }).catch((e)=>{
      if (e.response.data.message === "failed create new account") {
        this.setState({
          errMsg : 'Email already registred upgrade on your profile setting'
        })
      }
      if (e.response.data.message === "bad request") {
        this.setState({
          errMsg : 'Store Name already used'
        })
      }
    })
  }
  render(){
    return(
      <>
        <form id="consumerAccount" onSubmit={this.handlerSubmit}>
          <input className="w-100 mt-4" type="text" name="username" id="name" placeholder="Name" required onChange={this.handlerChange}/>
          <input className="w-100 mt-3" type="email" name="email" id="email" placeholder="Email" required onChange={this.handlerChange}/>
          <input className="w-100 mt-3" type="phone" name="phone" id="phone" placeholder="Phone number" required onChange={this.handlerChange}/>
          <input className="w-100 mt-3" type="text" name="store" id="store" placeholder="Store name" required onChange={this.handlerChange}/>
          <input className="w-100 mb-4 mt-3" type="password" name="password" id="password" placeholder="Password" required onChange={this.handlerChange}/>
          <div className="submit pr-md-0 pl-md-0 pr-3 pl-3">
            <input className="w-100 submit-auth p-0" type="submit" value="Register"/>
          </div>
        </form>
        <span style={{color: 'red', marginBottom: '15px', textAlign: 'center'}}>{this.state.errMsg}</span>
      </>
    )
  }
}
export default class Register extends Component {
  constructor(props){
    super(props)
    const {p} = props
    this.state = {
      btn1 : 'select-1',
      btn2 : 'select-2',
      page : <Consumer pro={p}/>
    }
  }
  render() {
    const {p} = this.props;
    return (
      <>
        <header className="container d-flex flex-column justify-content-center align-items-center">
        
          <div className="row justify-content-center">
            <div className="icon-head-auth">
                <img src="/assets/icons/logo.svg" alt="iconBelanja"/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="head-auth">
              <p>Please sign up with your account</p>
            </div>
          </div>

        </header>

        <div className="col-7 pl-0 pr-0 row justify-content-center border rounded">
          <div className={`${this.state.btn1} col-6 d-flex justify-content-center align-items-center`} onClick={(e)=>{
            e.preventDefault()
            this.setState({
              btn1 : 'select-1',
              btn2 : 'select-2',
              page : <Consumer pro={p}/> 
            })
          }}>
            <p>Costummer</p>
          </div>
          <div className={`${this.state.btn2} col-6 d-flex justify-content-center align-items-center`} onClick={(e)=>{
            e.preventDefault()
            this.setState({
              btn1 : 'select-2',
              btn2 : 'select-1',
              page : <Seller pro={p}/> 
            })
          }}>
            <p>Seller</p>
          </div>
        </div>
        
        <div className="container p-0">
          <div className="form-auth d-flex d-flex flex-column justify-content-center pr-sm-5 pl-sm-5">

            {this.state.page}

            <div className="txtLink-auth d-flex justify-content-center">
              <p>
                Already have a Blanja account?
                <Link to={{
                  pathname: "/auth/login"
                }}>Login</Link>
              </p>
            </div>

          </div>
        </div>
      </>
    )
  }
}
