import React, { Component } from 'react'
import '../styles/pages/main.css';
import Navbar from '../components/navbar/navbar'
import SearchItems from '../components/search/searchItems';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class Search extends Component {
  constructor(){
    super();
    this.state = {
      getData: [],
      pageInfo: [],
    }
  }

  getAll = async () => {
    const search = this.props.location.search;
    await api.get(`search${search}`).then(({data}) => {
      this.setState({
        getData: data.data.values,
        pageInfo: data.data.pageInfo
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount(){
    this.getAll()
    // console.log(`search${this.props.location.search}`);
  }

  componentDidUpdate(prevProps,prevState){
    if(prevProps.location.search !== this.props.location.search){
      this.getAll()
    }
  }

  render() {
    const search = this.props.location.search;
    const name = new URLSearchParams(search).get("name");
    const { getData, pageInfo } = this.state;
    let load,searchData, prev, next
    if (pageInfo.prevPage === null) {
      prev = true
    }
    if (pageInfo.nextPage === null) {
      next = true
    }
    load = () => {
      let items = [0,1,2,3,4]
      return(
        items.map((data) => {return(
          <div className="items" key={data}>
            <div className="item-card" style={{height: "250px"}}>
            </div>
          </div>
        )})
      )  
    }
    if (getData[0] !== undefined) {
      searchData = () => {
        return(
          getData && getData.map(
            ({ id_product, product_name, product_price, product_by, product_sold, product_img}) => {
              return(
                <Link key={id_product} className="items" to={{
                    pathname:`/product/${id_product}`,
                    state: {id_product}
                  }}>
                  <SearchItems title={product_name} price={product_price} ownerShop={product_by} sold={product_sold} img={`${process.env.REACT_APP_IMGURL}${product_img.split(',')[0]}`}/>
                </Link>
              )
            }
          )
        )
      }
    }else {searchData = load}
    return (
      <>
        <Navbar prophistory={this.props} />
        <main>
        <div className="main-container">
          
          <div className="search">
            <div className="head">
              <p>Searching for " {name} "</p>
            </div>
            <div className="flex-list">
              { searchData() }
            </div>
            <button style={{marginLeft: '20px'}} disabled={prev} onClick={(e) => {
              e.preventDefault()
              this.props.history.push(pageInfo.prevPage.split('/')[3])}}>Previous Page</button>
            <span style={{marginLeft: '15px', marginRight:'15px'}}>{pageInfo.page}</span>
            <button disabled={next} onClick={(e) => {
              e.preventDefault()
              this.props.history.push(pageInfo.nextPage.split('/')[3])}}>Next Page</button>
          </div>

        </div>
        </main>
      </>
    )
  }
}

export default Search