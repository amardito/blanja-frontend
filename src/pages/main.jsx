import React, { Component } from 'react';
import Category from "../components/main/mainCategory";
import New from '../components/main/mainNew';
import Popular from '../components/main/mainPopular';
import Navbar from '../components/navbar/navbar';
import '../styles/pages/main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/`
});

class MainPage extends Component {
  constructor(){
    super();
    this.state = {
      getDataPopular: [],
      getDataNew : [],
      getCategory : [],
    }
  }

  getAllPopular = async () => {
    await api.get('products?sortby=popular&sort=DESC').then(({data}) => {
      this.setState({
        getDataPopular: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  getAllLatest = async () => {
    await api.get('products?sortby=latest&sort=DESC').then(({data}) => {
      this.setState({
        getDataNew: data.data
      })
    }).catch((err) => {
      console.log(err);
    });
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

  componentDidMount(){
    this.getAllPopular();
    this.getAllLatest();
    this.getAllCategory();
  }

  render() {
    console.log('test duplicate');
    const { getDataNew, getCategory, getDataPopular } = this.state;
    let popularItem,newItem,load
    load = () => {
      let items = [0,1,2,3,4]
      return(
        items.map((data) => {return(
          <div className="items" key={data}>
            <div className="item-card" style={{height: "250px"}}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F3aaadc45f4da67e52850a02aedf68040%2Ftenor.gif%3Fitemid%3D13427670&f=1&nofb=1" alt="loading" className="imgItem"/>
            </div>
          </div>
        )})
      )  
    }
    if (getDataNew.length) {
      newItem = () => {
        return(
          getDataNew && getDataNew.map(
            ({ id_product, product_name, product_price, product_by, product_sold}) => {
              return(
                <Link key={id_product} className="items" to={{
                    pathname:`/product/${id_product}`,
                    state: {id_product}
                  }}>
                  <New title={product_name} price={product_price} ownerShop={product_by} sold={product_sold}/>
                </Link>
              )
            }
          )
        )
      }
    }else {newItem = load}
    if (getDataPopular.length) {
      popularItem = () => {
        return(
          getDataPopular && getDataPopular.map(
            ({ id_product, product_name, product_price, product_by, product_sold}) => {
              return(
                <Link key={id_product} className="items" to={{
                    pathname: `/product/${id_product}`,
                    state: {id_product}
                  }}>
                  <Popular title={product_name} price={product_price} ownerShop={product_by} sold={product_sold} />
                </Link>
              )
            }
          )
        )
      }
    }else {popularItem = load}
    // console.log(this.props)
    return (
      <>
        <Navbar prophistory={this.props} />
        <main>
        <div className="main-container">

          <div className="tags">
            <div className="list">

              <div className="item-tags">
                <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="tags"/>
                <p className="item-text">Black edition</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="tags"/>
                <p className="item-text">Trends in 2020</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="tags"/>
                <p className="item-text">Black edition</p>
              </div>
              <div className="item-tags">
                <img src="/assets/img/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="tags"/>
                <p className="item-text">Trends in 2020</p>
              </div>

            </div>
          </div>
          
          <div className="category">
            <div className="head">
              <p>Category</p>
              <span>What are you currently looking for</span>
            </div>
            <div className="list">

             {getCategory && getCategory.map(
               ({ id_category, category_name, category_img}, index) => {
                return(
                  <Link key={id_category} to={`/search?category=${category_name}`}>
                   <Category key={id_category} title={category_name} categoryImg={category_img} backgroundIndex={index} />
                  </Link>
                 )
               }
             )}

            </div>
          </div>
          
          <div className="new">
            <div className="head">
              <p>New</p>
              <span>You've never seen it before!</span>
            </div>
            <div className="flex-list">

              {newItem()}

            </div>
          </div>
          
          <div className="popular">
            <div className="head">
              <p>Popular</p>
              <span>Find clothes that are trending recently</span>
            </div>
            <div className="flex-list">

              {popularItem()}
              
            </div>
          </div>

        </div>
        </main>
      </>
    )
  }
}

export default MainPage;