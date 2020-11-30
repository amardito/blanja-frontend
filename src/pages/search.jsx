import React, { Component } from 'react'
import '../styles/pages/main.css';
import Navbar from '../components/navbar'

class Search extends Component {
  render() {
    const search = this.props.location.search;
    const name = new URLSearchParams(search).get("name");
    return (
      <>
        <Navbar></Navbar>
        <main>
        <div className="main-container">
          
          <div className="search">
            <div className="head">
              <p>Searching for " {name} "</p>
              <span>filter - </span>
            </div>
            <div className="flex-list">
              
            </div>
          </div>

        </div>
        </main>
      </>
    )
  }
}

export default Search