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

export default class EditName extends Component {
  constructor(){
    super();
    this.state = {
      handleUpdate: {
        "product_name": ''
      },
      idProduct: ''
    }
  }

  updateProduct = async () => {
    await api.put(`product/update/${this.state.idProduct}`,this.state.handleUpdate).then((data) => {
      this.props.hidden()
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount = ()=>{
    this.setState({
      idProduct: this.props.propsHistory.match.params.id
    })
  }

  render() {
    console.log(this.state.handleUpdate);
    console.log(this.state.idProduct);
    const{ hidden } = this.props;
    return (
      <div className="wrap">
        <div className="outer" onClick={hidden}>
        </div>
        <div className="filterMenu">
          <Card>
            <Card.Header className="d-flex flex-row align-items-center" style={{maxHeight: '60px'}}>
              <button type="button" className="close mb-1" aria-label="Close" onClick={hidden}>
                <h2 className="m-0">&times;</h2>
              </button>
              <h4 className="pl-3 m-0">Update Product</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={()=>{
                  this.updateProduct()
                }}>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Change Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Product Name" required={true} onChange={(e)=>{
                    this.setState({
                      handleUpdate: {
                        "product_name": `${e.target.value}`
                      }
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
