import React, { Component } from 'react'

export default class SearchItems extends Component {
  render() {
    const { title, price, ownerShop, sold, img} = this.props
    return (
      <div className="item-card">
        <img className="imgItem" src={img} alt="Men formal suit"/>
        <div className="item-desc">
          <p className="item-title">{title}</p>
          <p className="item-price">IDR {parseInt( price ).toLocaleString()}</p>
          <p className="item-shop">{ownerShop}</p>
          <div className="item-rate">
            <img src="/assets/icons/Rating 5 stars.svg" alt="rating"/>
            <span>({sold})</span>
          </div>
        </div>
      </div>
    )
  }
}
