import React, { Component } from 'react'
import { 
  Card,
  ListGroup,
 } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/components/filter.css"
import axios from 'axios'


const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
})

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      getCategory : [],
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

  // refreshPage() {
  //   window.location.reload(false);
  // }

  componentDidMount(){
    this.getAllCategory();
  }

  render() {
    const { getCategory } = this.state;
    const{ hidden, urlCategory } = this.props;
    
    return (
      <div className="wrap">
        <div className="outer" onClick={hidden}>
        </div>
        <div className="filterMenu">
          <Card style={{maxWidth: '450px'}}>
            <Card.Header className="d-flex flex-row align-items-center">
              <button type="button" className="close pb-1" aria-label="Close" onClick={hidden}>
                <h1>&times;</h1>
              </button>
              <h2 className="pl-3">Filter</h2>
            </Card.Header>
            <Card.Body>
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
                                  urlCategory(category_name)
                                // if(e){
                                //   this.refreshPage()
                                // }
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