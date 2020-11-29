import React, { Component } from 'react'
import Navbar from '../components/navbar'
import New from '../components/main/mainNew'
import Popular from '../components/main/mainPopular'
import '../styles/pages/main.css';
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
})

class MainPage extends Component {
  
  state = {
    getDataNew : [],
    getCategory : []
  }

  getAllLatest = async () => {
    await api.get('products?sortby=latest&sort=DESC').then(({data}) => {
      this.setState({
        getDataNew: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  getAllCategory = async () => {
    await api.get('category').then(({data}) => {
      this.setState({
        getCategory: data.data
      })
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount(){
    this.getAllLatest();
    this.getAllCategory()
  }

  componentDidUpdate(){

  }

  render() {
    const { getDataNew, getCategory } = this.state;
    return (
      <>
        <Navbar></Navbar>
        <main>
        <div className="main-container">

          <div className="tags">
            <div className="list">

              <div className="item-tags">
                <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="tags"/>
                <p className="item-text">Black edition</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="tags"/>
                <p className="item-text">Trends in 2020</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="tags"/>
                <p className="item-text">Black edition</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="tags"/>
                <p className="item-text">Trends in 2020</p>
              </div>

            </div>
          </div>
          
          <div className="category">
            <div className="head">
              <p>Category</p>
              <span>What are you currently looking for</span>
            </div>
            <div className="list">

              <div className="item">
                <div className="item-category" style={{backgroundColor: "#CC0B04",}}>
                  <img src="/assets/img/hiclipart 15 t-shirt.png" alt="category"/>
                  <p className="item-text">T-Shirt</p>
                </div>
              </div>

              <div className="item">
                <div className="item-category" style={{backgroundColor: "#1C3391",}}>
                  <img src="/assets/img/hiclipart 21 shorts.png" alt="category"/>
                  <p className="item-text">Short</p>
                </div>
              </div>

              <div className="item">
                <div className="item-category" style={{backgroundColor: "#F67B02",}}>
                  <img src="/assets/img/hiclipart 22 jacket.png" alt="category"/>
                  <p className="item-text">Jacket</p>
                </div>
              </div>

              <div className="item">
                <div className="item-category" style={{backgroundColor: "#E31F51",}}>
                  <img src="/assets/img/hiclipart 26 pants.png" alt="category"/>
                  <p className="item-text">Pants</p>
                </div>
              </div>

              <div className="item">
                <div className="item-category" style={{backgroundColor: "#57CD9E",}}>
                  <img src="/assets/img/hiclipart 34 shoes.png" alt="category"/>
                  <p className="item-text">Shoes</p>
                </div>
              </div>

            </div>
          </div>
          
          <div className="new">
            <div className="head">
              <p>New</p>
              <span>You've never seen it before!</span>
            </div>
            <div className="flex-list">
              {getDataNew && getDataNew.map(
                ({ id_product, product_name, product_price, product_by}) => {
                  return(
                    <New key={id_product} title={product_name} price={product_price} ownerShop={product_by}/>
                  )
                }
              )}

            </div>
          </div>
          
          <div className="popular">
            <div className="head">
              <p>Popular</p>
              <span>Find clothes that are trending recently</span>
            </div>
            <div className="flex-list">

              <Popular></Popular>
              
            </div>
          </div>

        </div>
        </main>
      </>
    )
  }
}

export default MainPage;