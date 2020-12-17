import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/navbar/navbar'
import {Dropdown, Accordion, Card,ListGroup} from 'react-bootstrap'
import SellProduct from '../components/profile/sellProduct'
import MyProducts from "../components/profile/MyProduct";

export class Profile extends Component {
  constructor(){
    super()
    this.state = {
      page: () =>{ return(
        <div className="pt-5 pl-5">
          <h1>Welcome to your profile page</h1>
          <h5>select menu for starting manage your account</h5>
        </div>
      )}
    }
  }
  setPages=()=>{
    if(this.props.location.hash === '#/sellproduct' || 
    this.props.location.hash === '#/sellproduct/'){
      this.setState({
        page: ()=>{
          return(
            <SellProduct prophistory={this.props}/>
          )
        }
      })
    }
    if(this.props.location.hash === '#/myproducts' || 
    this.props.location.hash === '#/myproducts/'){
      this.setState({
        page: ()=>{
          return(
            <MyProducts p={this.props}/>
          )
        }
      })
    }
  }

  componentDidMount(){
    this.setPages()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.location.hash !== this.props.location.hash){
      this.setPages()    }
  }
  render() {
    return (
      <>
        <Navbar prophistory={this.props}/>
        <main>
          <div className="container-fluid d-flex flex-wrap p-0 position-relative justify-content-end">
            <div className="col-4 pl-md-0 pl-sm-0 d-none d-sm-flex flex-column align-items-end" style={{boxShadow: '6px 0px 40px #97979746', minHeight:'100vh', position:'fixed',zIndex:2, left:0}}>
              <div className="col-xxl-8 col-xl-10 col-lg-12 pt-5 pr-0 pl-md-0 pl-sm-0">
                <div className="container justify-content-end pl-3 pl-xl-5 pr-0 pr-xl-3">
                  <div className="d-flex flex-wrap container row justify-content-lg-end justify-content-md-center align-items-center p-0 m-0">
                    <div className="d-flex align-items-center col-xl-4 col-lg-3 p-0 justify-content-center">
                      <img src="/assets/img/christian-buehner-DItYlc26zVI-unsplash 1.png" className="rounded-circle border border-2 w-100 h-100" style={{maxWidth: '75px', maxHeight: '75px', minHeight: '75px'}} alt="profile"/>
                    </div>
                    <div className="col-sm-12 col-lg-9 col-xl-8 pr-0 flex-column d-flex justify-content-center p-0 mt-sm-2 mt-md-2">
                      <h5 className="text-truncate">Porfile Name</h5>
                      <span>Ubah Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 col-xl-10 col-lg-12 pt-5 pr-0 pl-md-0 pl-sm-0">
                <h4 className="pr-0 pr-xl-3 pl-3 pl-xl-5">Menu</h4>
                <div className="d-flex justify-content-end pr-0 pr-xl-3 pl-3 pl-xl-5">
                  <Accordion className="w-100">
                    <Card>                      
                      <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                        <img src="/assets/icons/package 1.svg" alt="icon" className="rounded-circle mr-2" style={{width: '20px', height: '20px', backgroundColor:'#F36F45'}}/>
                        <span className="mr-2">Products</span>
                      </Accordion.Toggle>                      
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className="p-0">
                          <ListGroup>
                            <ListGroup.Item action href="#/myproducts">
                              My Products
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/sellproduct">
                              Sell Product
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="d-flex d-sm-none col-12 align-items-end"  style={{minHeight: '50px'}}>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <img src="/assets/icons/package 1.svg" alt="icon" className="rounded-circle mr-2" style={{width: '20px', height: '20px', backgroundColor:'#F36F45'}}/>
                  <span className="mr-2">Products</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/myproducts">My Product</Dropdown.Item>
                  <Dropdown.Item href="#/sellproduct">Selling Products</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-12 col-sm-8 pl-0 pr-0 pt-5 pb-5" style={{backgroundColor: '#f9f9f9'}}>
              {this.state.page()}
            </div>
          </div>
        </main>
      </>
        
    )
  }
}

export default Profile