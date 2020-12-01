import React, { Component } from 'react'
import FilterSearch from './filter'
import '../../styles/components/navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      isHidden : true,
      navMenu : ()=>{
        return(
        <div className="btn-wrap">
          <input type="button" value="Login" className="btnn primary" onClick={this.toggleLogin}/>
          <input type="button" value="Signup" className="btnn secondary"/>
        </div>
        )
      },
      handleSearch: '',
      handleCategory: '',
    }
  }

  toggleLogin = () => {
    this.setState({
      navMenu: () => {
        return(
          <div className="btn-wrap" style={{width: "auto"}}>
            <img src="/assets/img/christian-buehner-DItYlc26zVI-unsplash 1.png" alt="profile"/>
          </div>
        )
      }
    })
  }

  refreshPage() {
    window.location.reload(false);
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggleCategory = (params) => {
    const search = this.props.prophistory.location.search;
    const name = new URLSearchParams(search).get("name")
    console.log(search)
    if(name === null){
      this.props.prophistory.history.push({ 
        pathname: '/search',
        search: `?category=${params}`
       });
    }else{
      this.props.prophistory.history.push({ 
        pathname: '/search',
        search: `?name=${name}&category=${params}`
       });
    }
  }
  
  render(){
    // const {prophistory} = this.props
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
                     this.refreshPage()         
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
              <button className="filter" onClick={this.toggleHidden}>
                <img src="/assets/icons/filter.svg" alt="filterIcon" className="filter-icon"/>
              </button>
            </div>
  
            <div className="nav-btn">
              <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon"/>
              <this.state.navMenu/>
            </div>
  
            <div className="nav-menu">
              <button className="btnn primary">Menu</button>
              <div className="menu-list">
                
                <div className="menu">
                  <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon"/>
                  <p>My Cart</p>
                </div>
                <div className="menu">
                    <input type="button" value="Login" className="btnn primary"/>
                    <input type="button" value="Signup" className="btnn secondary"/>
                </div>
  
              </div>
            </div>
  
          </div>
        </nav>
        
        {!this.state.isHidden && <FilterSearch hidden={this.toggleHidden} urlCategory={this.toggleCategory}/>}

      </>
    )
  }
}

export default Navbar