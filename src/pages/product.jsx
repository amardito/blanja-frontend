import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import "../styles/pages/detail.css";
import Navbar from '../components/navbar/navbar';
import axios from 'axios';
import EditProduct from '../components/product/editProduct'
import {Link} from 'react-router-dom'

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

class Product extends Component {
  constructor(){
    super();
    this.state = {
      getData: {},
      EditProduct: true,
      maxQty: 0,
      qty: 1,
      isDecDisable: true,
      isIncDisable: false
    }
    this.handleBag = this.handleBag.bind(this);
  }

  handleBag = () => {

    const dataItem = {
      product_name: this.state.getData.product_name,
      item_qty: this.state.qty,
      product_price: this.state.getData.product_price,
    }
    // console.log(this.props)
    localStorage.setItem(this.state.getData.id_product, JSON.stringify(dataItem));
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

  toggleEditProduct = () => {
    this.setState({
      EditProduct: !this.state.EditProduct
    })
  }

  getProduct = async () => {
    await api.get(this.props.location.pathname).then(({data}) => {
      this.setState({
        getData: data,
        maxQty: data.product_qty - 1
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteProduct = async() => {
    await api.delete(`product/delete/${this.state.getData.id_product}`)
    this.props.history.push('/')
  }

  componentDidMount = () => {
    this.getProduct();
  }

  render() {
    const {getData} = this.state;
    console.log(this.state);
    return (
      <>
      <Navbar prophistory={this.props} />
      {!this.state.EditProduct && <EditProduct hidden={this.toggleEditProduct} propsHistory={this.props}/>}
      
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
              src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
              alt="img"
              className="rounded img-fluid"
            />
            <div className="mt-3 more-images">
              <ul className="horizontal-list">
                <li>
                  
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  
                </li>
                <li>
                  
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  
                </li>
                <li>
                  
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  
                </li>
                <li>
                  
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  
                </li>
                <li>
                  
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row" style={{display: "flex", flexDirection: "row", padding: "0px 15px"}}>

              <h3>{getData.product_name}</h3>
              <span style={{color: "#333333", fontSize:"small", marginLeft: "10px", cursor: "pointer"}} onClick={(e)=>{
                e.preventDefault()
                this.toggleEditProduct()
              }}>edit</span>

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
              <b>IDR {getData.product_price}</b>
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
              <button className="btnGrup btn-chart mt-2" onClick={(e)=>{
                e.preventDefault()
                this.deleteProduct()
              }}>
                Delete
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
        <h2>Product Review</h2>

        <Container style={{ marginBottom: "70px" }}>
          <div className="row">
            <div className="col-md-3 align-item-center justify-content-center">
              <h1 className="display-1 d-inline">
                <b>5.0</b>
              </h1>
              <p className="d-inline-block ml-1 mt-3 text-dark">
                <b>/ {getData.product_sold} </b>
              </p>
              <div className="rating mt-n2 ml-1 d-flex">
                
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="middle">
                  <img src="/assets/icons/Rating 5 stars.svg" alt="rating"/>
                  <div className="bar-container">
                    <div className="bar-5"></div>
                  </div>
                </div>
                <div className="side right">
                  <div style={{display: "flex", alignItems: "flex-end", height: "100%", justifyContent: "flex-end"}}> {getData.product_sold} </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        
        {/* Menu Bottom */}
        <div className="btn d-flex d-lg-none">
          <button className="btnBtm btn-chart mt-2" onClick={(e)=>{
            e.preventDefault()
          this.deleteProduct()
            }}>
            Delete
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