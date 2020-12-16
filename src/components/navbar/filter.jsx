import React, { Component } from 'react'
import { 
  Card,
  ListGroup,
 } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/components/filter.css"

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      getCategory : [],
      getSize: [],
      getColor: [],
      filter: {}
    }
  }

  componentDidMount(){
    this.setState({
      getCategory: this.props.dataCategory,
      getColor: this.props.dataColor,
      getSize: this.props.dataSize
    })
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.filter !== this.state.filter) {
      this.props.urlCategory(this.state.filter)
    }
  }

  render() {
    const { getCategory, getSize, getColor } = this.state;
    const{ hidden } = this.props;    
    return (
      <div className="wrap">
        
        <div className="outer" onClick={(e)=>{
          e.preventDefault()
          hidden()
        }}></div>

        <div className="filterMenu">
          <Card>
            <Card.Header className="d-flex flex-row align-items-center">
              <button type="button" className="close pb-1" aria-label="Close" onClick={(e)=>{
                e.preventDefault()
                hidden()
              }}>
                <h1>&times;</h1>
              </button>
              <h2 className="pl-3">Filter</h2>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>color</h3>
                  <div className="d-flex flex-wrap">
                    {getColor && getColor.map(
                      ({ id_color, hex }) => {
                        return(
                          <div className="pr-2 pl-2 col-2 mt-4" key={id_color}>
                            <button type="submit" className="rounded-circle" style={{border: `2px solid ${hex}`, color: `${hex}`, minHeight:'50px', minWidth:'50px'}} 
                            onMouseOver={(e) => {e.target.style.background = hex; e.target.style.color = '#ffff'}} 
                            onMouseLeave={(e)=> {e.target.style.background = '#ffff'; e.target.style.color = hex}}
                            onClick={(e)=>{
                              e.preventDefault()
                              this.setState({
                                filter : {
                                  ...this.state.filter,
                                  color: id_color
                                }
                              })
                            }}></button>
                          </div>
                        )
                      }
                    )}
                  </div>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Size</h3>
                  <div className="d-flex flex-wrap">
                    {getSize && getSize.map(
                      ({ id_size, size }) => {
                        return(
                          <div className="col-sm-4 col-6 pr-2 pl-2" key={id_size}>
                            <div className="btn-group mr-2" role="group">
                                <button type="submit" className="btnn btn-outline-dark mt-4" style={{border: "2px solid #222222"}} onClick={(e)=>{
                                  e.preventDefault()
                                  this.setState({
                                    filter : {
                                      ...this.state.filter,
                                      size: id_size
                                    }
                                  })
                                }}>{ size }</button>
                            </div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Category</h3>
                  <div className="d-flex flex-wrap">
                    {getCategory && getCategory.map(
                      ({ id_category, category_name }) => {
                        return(
                          <div className="col-sm-4 col-6 pr-2 pl-2" key={id_category}>
                            <div className="btn-group mr-2" role="group">
                                <button type="submit" className="btnn btn-outline-danger mt-4" style={{border: "2px solid #DB3022"}} onClick={(e)=>{
                                  e.preventDefault()
                                  this.setState({
                                    filter : {
                                      ...this.state.filter,
                                      category : id_category
                                    }
                                  })
                                }}>{ category_name }</button>
                            </div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Filter