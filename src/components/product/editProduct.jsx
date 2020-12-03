import React, { Component } from 'react'
import { 
  Card,
  Form
 } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/components/filter.css";
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

export default class EditProduct extends Component {
  constructor(){
    super();
    this.state = {
      product_name: '',
      product_price: '',
      idProduct: '',
      getData: []
    }
  }

  getProduct = async () => {
    await api.get(`/product/${this.props.propsHistory.match.params.id}`).then(({data}) => {
      this.setState({
        getData: data,
        product_name: data.product_name,
        product_price: data.product_price
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  updateProduct = async () => {
    const data = JSON.stringify({
      product_name: this.state.product_name,
      product_price: this.state.product_price
    })
    await api.put(`product/update/${this.state.idProduct}`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.props.hidden()
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount = ()=>{
    this.setState({
      idProduct: this.props.propsHistory.match.params.id,
    })
    this.getProduct();
  }

  render() {
    // console.log(this.state);
    const{ hidden } = this.props;
    return (
      <div className="wrap">
        <div className="outer" onClick={(e)=>{
          e.preventDefault()
          hidden()
        }}></div>

        <div className="filterMenu">
          <Card>
            <Card.Header className="d-flex flex-row align-items-center" style={{maxHeight: '60px'}}>
              <button type="button" className="close mb-1" aria-label="Close" onClick={(e)=>{
                e.preventDefault()
                hidden()
              }}>
                <h2 className="m-0">&times;</h2>
              </button>
              <h4 className="pl-3 m-0">Update Product</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={()=>{
                  this.updateProduct()
                }}>

                <Form.Group controlId="ProductName">
                  <Form.Label>Change Product Name</Form.Label>
                  <Form.Control type="text" placeholder={this.state.getData.product_name} onChange={(e)=>{
                    this.setState({
                      product_name: `${e.target.value}`
                    })
                  }}/>
                </Form.Group>
                <Form.Group controlId="ProductPrice">
                  <Form.Label>Change Product Price</Form.Label>
                  <Form.Control type="number" placeholder={this.state.getData.product_price} onChange={(e)=>{
                    this.setState({
                        product_price: `${e.target.value}`
                    })
                  }}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="sure, want update" required={true} />
                </Form.Group>

                <button className="btnn primary" type="submit" >
                  Submit
                </button>

              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
