import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import "../styles/pages/detail.css";
import Navbar from '../components/navbar/navbar';

import SearchItems from '../components/search/searchItems';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class Product extends Component {
  constructor(){
    super();
    this.state = {
      primaryImg: 'http://cdn.lowgif.com/small/dc86e54ceca03be4-loading-spinner-animated-gif-83320-mediabin.gif',
      otherImg: [],
      getData: {},
      maxQty: 0,
      qty: 1,
      isDecDisable: true,
      isIncDisable: false,
      refData: []
    }
    this.handleBag = this.handleBag.bind(this);
  }

  getAll = async () => {
    const search = `?category=${this.state.getData.category_id}`
    await api.get(`search${search}`).then(({data}) => {
      this.setState({
        refData: data.data.values
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  handleBag = () => {
    const prevData = JSON.parse(localStorage.getItem('belanjaUser'))
    const dataItem = {
      product_img: this.state.getData.product_img,
      product_name: this.state.getData.product_name,
      product_by: this.state.getData.product_by,
      item_qty: this.state.qty,
      product_price: this.state.getData.product_price,
      max_qty : this.state.maxQty,
      id_product : this.state.getData.id_product
    }
    let newData = []
    if(prevData === [] || prevData === null){
      newData[0] = dataItem
    }else{
      newData[0] = dataItem
      newData = prevData.concat(newData)
    }    
    localStorage.setItem('belanjaUser', JSON.stringify(newData));
  };

  handleQtyInc=()=>{
    if(this.state.qty === this.state.maxQty){
      this.setState({
        isIncDisable: true,
        qty: this.state.qty + 1        
      })
    }else{
      this.setState({
        qty: this.state.qty + 1,
        isDecDisable: false
      })
    }    
  }

  handleQtydec=()=>{
    if(this.state.qty === 2){
      this.setState({
        isDecDisable: true,
        qty: this.state.qty - 1
      })
    }else{
      this.setState({
        qty: this.state.qty - 1,
        isIncDisable: false
      })
    }
  }

  getProduct = async () => {
    await api.get(this.props.location.pathname).then(({data}) => {
      let otherImg = [];

      if (data.data.product.product_img[0] !== undefined) {
        for (let i = 1; i < data.data.product.product_img.length; i+=1) {
          otherImg.push(`${process.env.REACT_APP_IMGURL}${data.data.product.product_img[i]}`);         
        }
      }else{
        otherImg = '';
      }
      this.setState({
        getData: data.data.product,
        primaryImg : `${process.env.REACT_APP_IMGURL}${data.data.product.product_img[0]}`,
        otherImg : otherImg,
        maxQty: data.data.product.product_qty - 1
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  

  componentDidMount = () => {
    this.getProduct();
  }
  
  componentDidUpdate = (prevProps,prevState) => {
    if(prevState.getData !== this.state.getData){
      this.getAll();
    }
    if(prevProps.location.state !== this.props.location.state){
      this.getProduct()
    }
  }

  render() {
    const {getData} = this.state;
    const {refData} = this.state;
    const price = parseInt( getData.product_price ).toLocaleString()
    return (
      <>
      <Navbar prophistory={this.props} />
      
      <main>
      <Container className="main">
        <p className="font-p-title">
        <Link to={{
          pathname: `/`
        }}>Home</Link> {'>'} category {'>'} <b>{getData.category_name}</b>
        </p>
        <div className="row">
          <div className="col-sm-4">
            <img
              src={this.state.primaryImg}
              alt="img"
              className="rounded img-fluid"
            />
            <div className="mt-3 more-images">
              <ul className="horizontal-list">
               {this.state.otherImg !== '' ? this.state.otherImg.map((data,i) => {
                  return(
                    <li key={i}>                  
                      <img
                        src={data}
                        alt="img"
                        className="rounded small-images"
                      />            
                    </li>
                  )
                }) : <div></div>
              }
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row" style={{display: "flex", flexDirection: "row", padding: "0px 15px"}}>

              <h3>{getData.product_name}</h3>

            </div>
            <p className="font-p-title">
              <b>{getData.product_by}</b>
            </p>
            <div className="rating mt-n2">
              <img src="/assets/icons/Rating 5 stars.svg" alt="rating"/>
              <span style={{marginLeft: "-15px"}}>({getData.product_sold})</span>
            </div>
            <p className="font-p-title mt-3">
              <b>Price</b>
            </p>
            <h2 className="mt-n3">
              <b>IDR {price}</b>
            </h2>
            <p className="font-p-title ml-1 mt-3 text-dark">
              <b> Color </b>
            </p>
            <ul className="horizontal-list">
              <li>
                {'comingsoon'}
              </li>
            </ul>
            <div className="row justify-content-start">
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Size</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                  <li>
                    {'comingsoon'}
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Jumlah</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                <li>
                    <button className="color-selected rounded-circle" disabled={this.state.isDecDisable} id="#decQty" onClick={(e)=>{
                      e.preventDefault()
                      this.handleQtydec()
                    }}>
                      -
                    </button>
                  </li>
                  <li style={{ margin: "0.2rem 1rem" }}>
                    <span>{this.state.qty}</span>
                  </li>
                  <li>
                    <button className="color-selected rounded-circle" disabled={this.state.isIncDisable} id="#incQty" onClick={(e)=>{
                      e.preventDefault()
                      this.handleQtyInc()
                    }}>
                      +
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <button className="btnGrup btn-chart mt-2" >
                Chat
              </button>
              <button className="btnGrup btn-add-bag mt-2" onClick={(e)=>{
                e.preventDefault()
                this.handleBag()
              }}>
                Add bag
              </button>
              <button className="btnGrup btn-buy mt-2" onClick={(e)=>{
                e.preventDefault()
                this.handleBag()
              }}>
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <h3 className="mt-3">Informasi Produk</h3>
        <div>
          <p className="mt-3 text-dark">
            <b>Condition</b>
          </p>
          <p className="mt-n3 text-danger">
            <b>New</b>
          </p>
          <p className="mt-4 text-dark">
            <b>Description</b>
          </p>
          <p> {getData.product_desc} </p>
        </div>

        <div className="search">
            <div className="head">
              <p>Product Like this</p>
              <span>Here result for product like this</span>
            </div>
            <div className="flex-list">
              { 
                refData && refData.map(
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
              }
            </div>
          </div>

        
        
        {/* Menu Bottom */}
        <div className="btnnn d-flex d-lg-none justify-content-center">
          <button className="btnBtm btn-chart mt-2">
            Chat
          </button>
          <button className="btnBtm btn-add-bag mt-2" onClick={(e)=>{
            e.preventDefault()
            this.handleBag()
          }}>
            Add bag
          </button>
          <button className="btnBtm btn-buy mt-2"
          onClick={(e)=>{
            e.preventDefault()
            this.handleBag()
          }}>
            Buy Now
          </button>
        </div>
      </Container>
      </main>
      </>
    );
  }
}

export default Product