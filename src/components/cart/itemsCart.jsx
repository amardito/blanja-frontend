import React, { Component } from 'react'

export default class ItemCart extends Component {
  constructor(){
    super();
    this.state = {
      qty: 1,
      isDecDisable: true,
      isIncDisable: false
    }
  }

  handleQtyInc=()=>{
    if(this.state.qty === this.props.productQty){
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

  componentDidMount=()=>{
    this.setState({
      qty: this.props.itemQty
    })
  }
  
  render() {
    return (
      <div className="card w-100 mt-3">
        <div className="card-body">
          <div className="d-flex flex-md-row flex-md-wrap flex-column">
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <div className="form-check mx-auto checked-box p-0 d-none d-md-block">
                <input type="checkbox" id="inlineCheckbox1" style={{width: '20px', height: '20px'}}/>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center pr-md-2 p-0">
              <img src={this.props.productImg}
                className="card-img w-100 m-0 "
                alt="..."/>
            </div>
            <div className="col-md-9 col-lg-4 d-flex flex-row justify-content-start align-items-center p-0 mt-md-0 mt-4">
              
              <div className="col-md-0 col-1 d-flex justify-content-start d-md-none p-0">
                <div className="form-check mx-auto checked-box p-0 d-sm-block d-md-none">
                  <input type="checkbox" id="inlineCheckbox1" style={{width: '20px', height: '20px'}}/>
                </div>
              </div>
              <div className="col-md-12 col-10 d-flex flex-column justify-content-start align-items-start p-0"> 
                <div className="d-inline col-12">
                  <div className="row flex-column">
                    <span className="d-inline-block text-lg-truncate text-md-wrap h5 m-0"> {this.props.productName} </span>
                    <p className="mt-2">{this.props.productBy}</p>
                  </div>
                </div>  
              </div>
            
            </div>
            <div className="col-md-4 col-lg-2 d-flex justify-content-center align-items-center p-0 mt-lg-0 mt-4">
              <ul className="horizontal-list d-flex justify-content-lg-end flex-row p-0 m-0">
                <li>
                    <button className="color-selected rounded-circle" disabled={this.state.isDecDisable} id="#decQty" onClick={(e)=>{
                      e.preventDefault()
                      this.handleQtydec()
                    }}>
                      -
                    </button>
                  </li>
                  <li className="ml-2 mr-2">
                    <span className="h5">{this.state.qty}</span>
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
            <div className="col-md-8 col-lg-3 d-flex justify-content-start align-items-center pl-lg-3 p-0 mt-lg-0 mt-4">
              <p className="cost h5">IDR {parseInt( this.props.productPrice ).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
