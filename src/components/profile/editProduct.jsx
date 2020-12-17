import React, { Component } from 'react'
import { 
  Card,
  Form
 } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/components/filter.css";
import axios from 'axios';
const FormData = require('form-data')

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export default class EditProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      product_name: '',
      product_price: '',
      product_desc: '',
      product_qty: '',
      idProduct: props.idproduct,
      getData: []
    }
  }

  getProduct = async () => {
    await api.get(`/product/${this.state.idProduct}`).then(({data}) => {
      let color = []
      data.data.color && data.data.color.map(({color_id}) => {
        return color.push(color_id)
      })
      let size = []
      data.data.size && data.data.size.map(({size_id}) => {
        return size.push(size_id)
      })
      this.setState({
        getData: data.data.product,
        product_name: data.data.product.product_name,
        product_price: data.data.product.product_price,
        product_desc: data.data.product.product_desc,
        color_id: color.join(','),
        size_id: size.join(','),
        product_qty: data.data.product.product_qty,
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  handleFile (e){
    let product_img = e.target.files
    this.setState({product_img: product_img})
    // console.log(product_img);
  }

  updateProduct = async () => {
    
    const {token,store} = JSON.parse(localStorage.getItem('token'))

    let bodyFormData = new FormData();
    bodyFormData.append('product_name', this.state.product_name)
    bodyFormData.append('product_by', store)
    bodyFormData.append('product_price', this.state.product_price)
    bodyFormData.append('product_qty',this.state.product_qty)
    bodyFormData.append('category_id', this.state.getData.category_id)
    bodyFormData.append('size_id', this.state.getData.size_id)
    bodyFormData.append('color_id',this.state.getData.color_id)
    bodyFormData.append('product_desc', this.state.product_desc)
    bodyFormData.append('product_sold', 0)
    if (this.state.product_img !== undefined) {
      for (let i = 0; i < this.state.product_img.length; i++) {
        bodyFormData.append("product_img", this.state.product_img[i]);
      }
    }
    
    await api.put(`product/update/${this.state.idProduct}`,bodyFormData,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` 
      }
    }).then(() => {
      this.props.hidden()
      this.props.propsHistory.history.push('/profile#/myproducts')
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount = ()=>{
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

        <div className="filterMenu" style={{left:this.props.left}}>
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
                <Form.Group controlId="ProductDesc">
                  <Form.Label>Change Product Description</Form.Label>
                  <Form.Control type="text" placeholder={this.state.getData.product_desc} onChange={(e)=>{
                    this.setState({
                      product_desc: `${e.target.value}`
                    })
                  }}/>
                </Form.Group>
                <Form.Group controlId="ProductQty">
                  <Form.Label>Change Product Stock</Form.Label>
                  <Form.Control type="number" placeholder={this.state.getData.product_qty} onChange={(e)=>{
                    this.setState({
                      product_qty: `${e.target.value}`
                    })
                  }}/>
                </Form.Group>
                <Form.Group controlId="ProductImg">
                  <Form.Label>Change Product Image</Form.Label><br/>
                  {this.state.getData.product_img && this.state.getData.product_img.map((value,i) => {
                    return(
                      <img key={i} src={`${process.env.REACT_APP_IMGURL}${value}`} alt="product" className="rounded mt-1 mb-2 mr-1" style={{maxWidth: '50px'}}/>
                    )
                  })}
                  <Form.File 
                    id="product_img"
                    name="product_img"
                    label="Upload your product image max 5"
                    lang="en"
                    custom
                    multiple
                    accept="image/*"
                    onChange={(e)=> this.handleFile(e)}
                  />
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
