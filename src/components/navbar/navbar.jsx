import React, { Component } from 'react'
import FilterSearch from './filter'
import '../../styles/components/navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
})

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      isHidden : true,
      navMenu : ()=>{
        return(
        <div className="btn-wrap">
          <input type="button" value="Login" className="btnn primary" onClick={ (e)=>{
            e.preventDefault()
            this.toggleLogin()
          }}/>
          <input type="button" value="Signup" className="btnn secondary" onClick={(e)=>{
            e.preventDefault();
            this.props.prophistory.history.push({ 
              pathname: '/auth',
            })
          }}/>
        </div>
        )
      },
      handleSearch: '',
      getCategory: [],
      getSize: [],
      getColor: [],
      urlColor : '',
      urlSize : '',
      urlCategory: '',
      urlParam: ''
    }
  }

  toggleLogin = () => {
    this.setState({
      navMenu: () => {
        return(
          <Link to={{
              pathname: `/profile`
            }} className="btn-wrap" style={{width: "auto"}}>
            <img src="/assets/img/christian-buehner-DItYlc26zVI-unsplash 1.png" alt="profile"/>
          </Link>
        )
      }
    })
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getAllCategory = async () => {
    await api.get('category').then(({data}) => {
      this.setState({
        getCategory: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  getAllSize = async () => {
    await api.get('size').then(({data}) => {
      this.setState({
        getSize: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  getAllColor = async () => {
    await api.get('color').then(({data}) => {
      this.setState({
        getColor: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  toggleFilter = (params) => {
    if (params.color !== undefined) {
      this.setState({
        urlColor: `color=${params.color}&`,
        urlParam: `color=${params.color}`
      })
    }
    if (params.size !== undefined) {
      this.setState({
        urlSize: `size=${params.size}&`,
        urlParam: `size=${params.size}`
      })
    }
    if (params.category !== undefined) {
      this.setState({
        urlCategory: `category=${params.category}`,
        urlParam: `category=${params.category}`
      })
    }
  }

  searchAction = () => {
    this.setState({
      urlParam: `${this.state.urlColor}${this.state.urlSize}${this.state.urlCategory}`
    })
    const search = this.props.prophistory.location.search;
    const name = new URLSearchParams(search).get("name")
    // console.log(search)
    if(name === null){
      this.props.prophistory.history.push({ 
        pathname: '/search',
        search: `?${this.state.urlParam}`
       });
      //  window.location.href=`/search?category=${params}`
    }else{
      this.props.prophistory.history.push({ 
        pathname: '/search',
        search: `?name=${name}&${this.state.urlParam}`
       });
      //  window.location.href=`/search?name=${name}&category=${params}`
    }
  }

  componentDidMount(){
    this.getAllCategory();
    this.getAllColor();
    this.getAllSize();
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.urlParam !== this.state.urlParam) {
      this.searchAction()
    }
  }
  
  render(){
    return(
      <>
        <nav>
          <div className="nav-container">
  
            <div className="logo">
              <Link to={{
                pathname: `/`
              }}>
                <img src="/assets/icons/small logo.svg" alt="iconBelanja"/>
              </Link>
            </div>
  
            <div className="search-area">
              <div className="search-bar">
                <img src="/assets/icons/Search.svg" alt="searchIcon" className="search-icon"/>
                <input type="text" name="search" className="search" placeholder="Search" onKeyPress={(e) => {
                  
                  if(e.key === 'Enter'){
                    // console.log('input');
                    this.props.prophistory.history.push({ 
                      pathname: '/search',
                      search: `?name=${this.state.handleSearch}`
                     });
                    // window.location.href=`/search?name=${this.state.handleSearch}`
                  }
                }} onChange={(e)=> {
                  // console.log(this.props);
                  if(e.target.falue !== ''){
                    this.setState({
                      handleSearch: e.target.value
                    })
                  }
                }}/>
              </div>
              <button className="filter" onClick={(e)=>{
                e.preventDefault()
                this.toggleHidden()
              }}>
                <img src="/assets/icons/filter.svg" alt="filterIcon" className="filter-icon"/>
              </button>
            </div>
  
            <div className="nav-btn">
              <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon" onClick={(e)=>{
                e.preventDefault()
                this.props.prophistory.history.push({ 
                  pathname: '/mybag'
                })
              }} style={{marginRight: '10px'}}/>
              <this.state.navMenu/>
            </div>
  
            <div className="nav-menu">
              <button className="btnn primary">Menu</button>
              <div className="menu-list">
                
                <div className="menu" onClick={(e)=>{
                  e.preventDefault()
                  this.props.prophistory.history.push({ 
                    pathname: '/mybag'
                  })
                }}>
                  <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon"/>
                  <p>My Cart</p>
                </div>
                <div className="menu">
                  <this.state.navMenu/>
                </div>
  
              </div>
            </div>
  
          </div>
        </nav>
        
        {!this.state.isHidden && <FilterSearch hidden={this.toggleHidden} dataCategory={this.state.getCategory} dataSize={this.state.getSize} dataColor={this.state.getColor} urlCategory={this.toggleFilter}/>}

      </>
    )
  }
}

export default Navbar