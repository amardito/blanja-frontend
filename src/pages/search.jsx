import React, { Component } from 'react'
import '../styles/pages/main.css';
import Navbar from '../components/navbar'
import SearchItems from '../components/searchItems';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

class Search extends Component {
  constructor(){
    super();
    this.state = {
      getData: [],
    }
  }
  getAll = async () => {
    const search = this.props.location.search;
    await api.get(`search${search}`).then(({data}) => {
      this.setState({
        getData: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }
  componentDidMount(){
    this.getAll()
    console.log(`search${this.props.location.search}`);
  }

  render() {
    console.log('test render ' + this.state.getData);
    const search = this.props.location.search;
    const name = new URLSearchParams(search).get("name");
    const cat = new URLSearchParams(search).get("category");
    const { getData } = this.state;
    return (
      <>
        <Navbar prophistory={this.props} />
        <main>
        <div className="main-container">
          
          <div className="search">
            <div className="head">
              <p>Searching for " {name} "</p>
              <span>filter - {cat} </span>
            </div>
            <div className="flex-list">
              { 
                getData && getData.map(
                  ({ id_product, product_name, product_price, product_by, product_sold}) => {
                    return(
                      <Link key={id_product} className="items" to={{
                          pathname:`/product/${id_product}`,
                          state: {id_product}
                        }}>
                        <SearchItems title={product_name} price={product_price} ownerShop={product_by} sold={product_sold}/>
                      </Link>
                    )
                  }
                )
              }
            </div>
          </div>

        </div>
        </main>
      </>
    )
  }
}

export default Search