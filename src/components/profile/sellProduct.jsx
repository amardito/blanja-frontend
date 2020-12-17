import React, { Component } from 'react'
import { Card, Form} from 'react-bootstrap'
import axios from 'axios';
const FormData = require('form-data')

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export default class sellProduct extends Component {
  constructor(){
    super()
    this.state = {
      product_name: '',
      product_price: '',
      product_qty: '',
      category_id: '',
      size_id: '',
      color_id: '',
      product_desc: '',
      getCategory: [],
      getSize: [],
      getColor: [],
      product_img: [],
      succMsg: ''
    }

  }

  getAllCategory = async () => {
    await api.get('category').then(({data}) => {
      this.setState({
        getCategory: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  getAllSize = async () => {
    await api.get('size').then(({data}) => {
      this.setState({
        getSize: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }
  handlerSize = async (params) => {
    this.setState({
      size_id: this.state.size_id + `${params},`
    })
  }

  getAllColor = async () => {
    await api.get('color').then(({data}) => {
      this.setState({
        getColor: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }
  handlerColor = async (params) => {
    this.setState({
      color_id: this.state.color_id + `${params},`
    })
  }
  
  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleFile (e){
    let product_img = e.target.files
    this.setState({product_img: product_img})
  }

  handlerSubmit = async (event) => {
    event.preventDefault()

    const {token,store} = JSON.parse(localStorage.getItem('token'))

    let bodyFormData = new FormData();
    bodyFormData.append('product_name', this.state.product_name)
    bodyFormData.append('product_by', store)
    bodyFormData.append('product_price', this.state.product_price)
    bodyFormData.append('product_qty',this.state.product_qty)
    bodyFormData.append('category_id', this.state.category_id)
    bodyFormData.append('size_id', this.state.size_id)
    bodyFormData.append('color_id',this.state.color_id)
    bodyFormData.append('product_desc', this.state.product_desc)
    bodyFormData.append('product_sold', 0)
    for (let i = 0; i < this.state.product_img.length; i++) {
      bodyFormData.append("product_img", this.state.product_img[i]);
    }
    // console.log(data);
    await api.post(`product/create`, bodyFormData,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` 
      }
    })
    .then(()=>{
      console.log('succsess create new data');
      this.setState({
        succMsg : 'success input form data'
      })
      this.props.prophistory.history.push({
        hash: '#/myproducts'
      })
    }).catch((e)=>{
      console.log(e);
    })
  }

  componentDidMount(){
    this.getAllCategory();
    this.getAllSize();
    this.getAllColor();
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState !== this.state) {
      if (this.state.size_id === 'cleared...') {
        this.setState({
          staSize: false,
          size_id: ''
        })
      }
      if (this.state.color_id === 'cleared...') {
        this.setState({
          staColor: false,
          color_id: ''
        })
      }
    }
  }

  render() {
    const { getCategory, getColor, getSize } = this.state;
    return (
      <div className="container col-md-10 col-xl-9">
        <Card>
          <Card.Header>
            <h2>Create new product</h2>
          </Card.Header>
          <form className="w-100 mt-3 pb-4 pl-3 pr-3" id="postProduct" onSubmit={this.handlerSubmit}>
            <Form.Group controlId="productName">
                <Form.Label>Name product</Form.Label>
                <Form.Control  type="text" name="product_name" placeholder="Name product" onChange={this.handlerChange} required/>
            </Form.Group>
            <Form.Group controlId="categoryProduct">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" name="category_id" defaultValue={0} onChange={this.handlerChange} required>
                <option value={0} disabled={true} hidden={true}>Select Category</option>
                  {getCategory && getCategory.map(
                    ({ id_category, category_name }) => {
                      return(<option key={id_category} value={id_category}>{category_name}</option>)
                    }
                  )}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="sizeProduct">
              <Form.Label>Size Product</Form.Label>
              <Form.Control as="select" multiple required>
                {getSize && getSize.map(
                  ({ id_size, size }) => {
                    return(<option key={id_size} value={id_size} disabled={this.state.staSize} onClick={(e)=>{
                      e.preventDefault();
                      this.handlerSize(e.target.value)
                      e.target.disabled = true;
                    }}>{size}</option>)
                  }
                )}
              </Form.Control>
              <span>Your Product Size : {this.state.size_id}</span>
              <span style={{color: 'red', marginLeft: '5px', cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault();
                this.setState({
                  size_id : 'cleared...',
                  staSize : true
                })

              }}> Clear </span>
            </Form.Group>
            <Form.Group controlId="colorProduct">
                <Form.Label>Color</Form.Label>
                <Form.Control as="select" multiple required>
                {getColor && getColor.map(
                  ({ id_color, color }) => {
                    return(<option key={id_color} value={id_color} disabled={this.state.staColor} onClick={(e)=>{
                      e.preventDefault();
                      this.handlerColor(e.target.value)
                      e.target.disabled = true;
                    }}>{color}</option>)
                  }
                )}
              </Form.Control>
              <span>Your Product Color : {this.state.color_id}</span>
              <span style={{color: 'red', marginLeft: '5px', cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault();
                this.setState({
                  color_id : 'cleared...',
                  staColor : true
                })

              }}> Clear </span>
            </Form.Group>
            <Form.Group controlId="productPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" name="product_price" placeholder="Product Price"  onChange={this.handlerChange}  required/>
            </Form.Group>
            <Form.Group controlId="productDesc">
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" name="product_desc" placeholder="Product Description"  onChange={this.handlerChange}  required/>
            </Form.Group>
            <Form.Group controlId="productQty">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control type="number" name="product_qty" placeholder="Product Quantity"  onChange={this.handlerChange} required/>
            </Form.Group>
            <Form>
              <Form.File 
                id="product_img"
                name="product_img"
                label="Upload your product image max 5"
                lang="en"
                custom
                multiple
                accept="image/*"
                required
                onChange={(e)=> this.handleFile(e)}
              />
            </Form>
            <button className="btnn primary mt-4" type="submit">
              Submit
            </button>
          </form>
          <span style={{marginLeft: '15px', marginBottom: '10px'}}>{this.state.succMsg}</span>
        </Card>
      </div>
    )
  }
}
