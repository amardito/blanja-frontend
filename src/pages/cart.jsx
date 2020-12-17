import React, { Component } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/pages/detail.css";
import Navbar  from '../components/navbar/navbar'
import ItemCart from '../components/cart/itemsCart'

export default class Mybag extends Component {
  constructor(){
    super();
    this.state = {
      getData: []
    }
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleBuy = () => {
   
  };

  fetchLocalStorage=()=>{
    const dataItem = JSON.parse(localStorage.getItem('belanjaUser'))

    if(dataItem !== null){
      let result = dataItem.reduce((res, obj) => {
        if (!(obj.product_name in res))
            res.__array.push(res[obj.product_name] = obj);
        else {
            res[obj.product_name].item_qty += obj.item_qty;
        }
        return res;
        }, 
        {__array:[]});
      this.setState({
        getData : result.__array
      })
    }
  }

  clearLocalStorage=()=>{
    localStorage.removeItem('belanjaUser')
    this.setState({
      getData: []
    })
  }

  componentDidMount=()=>{
    this.fetchLocalStorage()
  }

  componentDidUpdate=(prevProps , prevState)=>{
    if(prevState.getData !== this.state.getData){
      this.props.history.push({
        pathname: '/mybag'
      })
    }
  }

  render() {
    const {getData} = this.state
    return (
      <>
      <Navbar prophistory={this.props} />
      <Container className="main">
        <div className="container" style={{ marginTop: "120px", marginBottom: "120px" }}>
          <h2>
            <b>My Bag</b>
          </h2>
          <div className="row mt-4">
            <div className="col-lg-8 pl-0 pr-lg-3 pr-0 mb-3">
              <div className="card w-100">
                <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="col-1 d-flex justify-content-center align-items-center">
                    <div className="form-check mx-auto checked-box m-0 p-0">
                      <input type="checkbox" className="mt-1 p-0" id="inlineCheckbox1" style={{width: '20px', height: '20px'}}/>
                    </div>
                  </div>
                  <div className="col-8 d-flex flex-column flex-lg-row justify-content-lg-start justify-content-md-start align-items-lg-center align-items-md-start pl-1">
                    <p className="card-title pr-2 m-0 h5">
                      Select all items
                    </p>
                    <p className="card-text m-0">
                      (? items selected)
                    </p>
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="text-danger text-lg-right m-0">
                      <p className="h5 m-0" style={{cursor: 'pointer'}} onClick={(e)=>{
                        e.preventDefault()
                        this.clearLocalStorage()
                      }}>Delete</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {
                getData && getData.map(
                  ({ id_product, product_name, product_price, product_by, max_qty, item_qty, product_img}) => {
                    return(
                      <ItemCart key={id_product} productImg={`${process.env.REACT_APP_IMGURL}${product_img[0]}`} productName={product_name} productBy={product_by} productPrice={product_price} productQty={max_qty} itemQty={item_qty} />
                    )
                  }
                )
              }
            
            </div>

            <div className="col-lg-4 pl-0 pr-0 detail-price mb-5">
              <div className="card text-center w-100  mb-5">
                <div className="card-body mb-md-0 mb-5">
                  <h5 className="text-left font-weight-bold">Total Summary</h5>
                  <div className="price">
                    <p className="font-weight-bold d-inline">Total Price</p>
                    <p className="text-dark d-inline font-weight-normal">
                      IDR 0
                    </p>
                  </div>
                  <div className="btnnn d-flex d-xs-none">
                    <button
                      to="/checkout"
                      onClick={this.handleBuy}
                      className="btnBtm btn-buy mt-2"
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className="btnnn d-flex d-lg-none justify-content-center">
                    <button
                      to="/checkout"
                      onClick={this.handleBuy}
                      className="btnBtm btn-buy w-75 mt-2"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </>
    );
  }
}