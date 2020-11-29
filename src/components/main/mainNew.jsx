import React, { Component } from 'react'

export default class New extends Component {
  render() {
    const { title, price, ownerShop } = this.props
    return (
      <div className="items">
        <div className="item-card">
          <img src="/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png" alt="Men formal suit"/>
          <div className="item-desc">
            <p className="item-title">{title}</p>
            <p className="item-price">IDR {price}</p>
            <span>{ownerShop}</span>
            <div className="item-rate">
              <img src="/assets/icons/Rating 5 stars.svg" alt="rating"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
