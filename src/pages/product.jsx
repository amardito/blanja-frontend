import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import "../styles/pages/detail.css";
import Navbar from '../components/navbar/navbar';
import axios from 'axios';
import EditName from '../components/product/editName'

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

class Product extends Component {
  constructor(){
    super();
    this.state = {
      getData: {},
      editName: true,
    }
  }

  toggleEditName = () => {
    this.setState({
      editName: !this.state.editName
    })
  }

  getProduct = async () => {
    await api.get(this.props.location.pathname).then(({data}) => {
      this.setState({
        getData: data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteProduct = async() => {
    await api.delete(`product/delete/${this.state.getData.id_product}`)
  }

  componentDidMount = () => {
    this.getProduct();
  }

  render() {
    const {getData} = this.state;
    return (
      <>
      <Navbar prophistory={this.props} />
      {!this.state.editName && <EditName hidden={this.toggleEditName} propsHistory={this.props}/>}
      
      <main>
      <Container className="main">
        <p className="font-p-title">
          Home {'>'} category {'>'} <b>{getData.category_name}</b>
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
              <span style={{color: "#333333", fontSize:"small", marginLeft: "10px", cursor: "pointer"}} onClick={this.toggleEditName}>edit</span>

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
                    {getData.product_qty}
                  </li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <button className="btnGrup btn-chart mt-2" onClick={(e)=>{this.deleteProduct()
                if(e){
                  window.location.href='/'
                }
              }}>
                Delete
              </button>
              <button className="btnGrup btn-add-bag mt-2">
                Add bag
              </button>
              <button className="btnGrup btn-buy mt-2">
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
          <button className="btnBtm btn-chart mt-2" onClick={(e)=>{this.deleteProduct()
            if(e){
              window.location.href='/'
            }
          }}>
            Delete
          </button>
          <button className="btnBtm btn-add-bag mt-2">
            Add bag
          </button>
          <button className="btnBtm btn-buy mt-2">
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