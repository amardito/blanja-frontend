import React, { Component } from 'react'
import FilterSearch from './filter'
import '../styles/components/navbar.css'

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      isHidden : true
    }
  }
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){

    return(
      <>
        <nav>
          <div className="nav-container">
  
            <div className="logo">
                <img src="/assets/icons/small logo.svg" alt="iconBelanja"/>
            </div>
  
            <div className="search-area">
              <div className="search-bar">
                <img src="/assets/icons/Search.svg" alt="searchIcon" className="search-icon"/>
                <input type="text" name="search" className="search" placeholder="Search"/>
              </div>
              <button className="filter" onClick={this.toggleHidden.bind(this)}>
                <img src="/assets/icons/filter.svg" alt="filterIcon" className="filter-icon"/>
              </button>
            </div>
  
            <div className="nav-btn">
              <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon"/>
              <div className="btn-wrap">
                <input type="button" value="Login" className="btn primary"/>
                <input type="button" value="Signup" className="btn secondary"/>
              </div>
            </div>
  
            <div className="nav-menu">
              <button className="btn primary">Menu</button>
              <div className="menu-list">
                
                <div className="menu">
                  <img src="/assets/icons/shopping-cart.svg" alt="cartIcon" className="cart-icon"/>
                  <p>My Cart</p>
                </div>
                <div className="menu">
                    <input type="button" value="Login" className="btn primary"/>
                    <input type="button" value="Signup" className="btn secondary"/>
                </div>
  
              </div>
            </div>
  
          </div>
        </nav>
        {!this.state.isHidden && <FilterSearch isHidden={this.state.isHidden} />}
      </>
    )
  }
}

export default Navbar