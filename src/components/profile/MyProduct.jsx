import React, { Component } from 'react'
import { Card, Table } from 'react-bootstrap'
import axios from 'axios';
import EditProduct from './editProduct'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export default class MyProduct extends Component {
  constructor(){
    super()
    this.state = {
      getAll: [],
      EditProduct: true,
    }
  }
  getMyProduct = async () => {
    const {store} = JSON.parse(localStorage.getItem('token'))
    const data = {
      store: store
    }
    await api.post('myproducts', data,{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(({data})=> {
      this.setState({
        getAll: data.data.values
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  toggleEditProduct = (id) => {
    this.setState({
      EditProduct: !this.state.EditProduct,
      idProduct: id
    })
  }

  deleteProduct = async(id) => {
    const {token} = JSON.parse(localStorage.getItem('token'))
    await api.delete(`product/delete/${id}`,{
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }).then(()=>{
      this.props.p.history.push('/profile#/myproducts')
    }).catch((e) => {
      console.log(e)
    })
    this.forceUpdate(()=>{
      this.getMyProduct()
    })
  }

  componentDidMount(){
    this.getMyProduct()
  }

  render() {
    const {getAll} = this.state
    // console.log(this.state)
    return (
    <>
      {!this.state.EditProduct && <EditProduct hidden={this.toggleEditProduct} idproduct={this.state.idProduct} propsHistory={this.props.p} left={0}/>}
      <div className="container col-12">
        <Card>
          <Card.Header>
            <h2>My product</h2>
          </Card.Header>
          <Table striped bordered hover className="mt-1 mb-0">
            <thead>
              <tr>
                <th style={{width: '50%%'}}>Product Name</th>
                <th style={{width: '20%'}}>Price</th>
                <th style={{width: '10%'}}>Stock</th>
                <th style={{width: '20%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                getAll && getAll.map(({id_product, product_name, product_price, product_qty}) => {
                  return (
                    <tr key={id_product}>
                      <td style={{display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',overflow: 'hidden', textOverflow: 'ellipsis'}}>{product_name}</td>
                      <td>{product_price}</td>
                      <td>{product_qty}</td>
                      <td>
                        <span style={{color: "#333333", fontSize:"medium", marginLeft: "10px", cursor: "pointer"}} onClick={(e)=>{
                          e.preventDefault()
                          this.toggleEditProduct(id_product)
                        }}>edit</span>
                        <span style={{color: "#DB3022",fontWeight: "bold", fontSize:"medium", marginLeft: "10px", cursor: "pointer"}} onClick={(e)=>{
                          e.preventDefault()
                          this.deleteProduct(id_product)
                        }}>delete</span>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Card>
      </div>
    </>
    )
  }
}
