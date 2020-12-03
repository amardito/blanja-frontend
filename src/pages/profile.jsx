import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Navbar from '../components/navbar/navbar'
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

export class Profile extends Component {
  constructor(){
    super()
    this.state = {
      product_name: '',
      product_by: 'my-store',
      product_price: '',
      product_qty: '',
      category_id: '',
      product_desc: '',
      getCategory: []
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
  
  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }
  handlerSubmit = async (event) => {
    event.preventDefault()
    const data = JSON.stringify({
      product_name: this.state.product_name,
      product_by: this.state.product_by,
      product_price: this.state.product_price,
      product_qty: this.state.product_qty,
      category_id: this.state.category_id,
      product_desc: this.state.product_desc,
      product_sold: 0
    })
    // console.log(data);
    await api.post(`product/create`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(()=>{
      console.log('succsess create new data');
    }).catch((e)=>{
      console.log(e);
    })
    this.props.history.push('/')
  }

  componentDidMount(){
    this.getAllCategory();
  }

  render() {
    const { getCategory } = this.state;
    return (
      <>
        <Navbar prophistory={this.props}/>
        <main>
          <div className="main-container">

            <div className="container">
                <h2 className="mb-3">Create new product</h2>
                <form className="col-lg-6" onSubmit={this.handlerSubmit}>
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
                <button className="btnn primary" type="submit" >
                  Submit
                </button>
                </form>
            </div>
          </div>
        </main>
      </>
        
    )
  }
}

export default Profile