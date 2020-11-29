import React, { Component } from 'react'

export default class Popular extends Component {
  render() {
    return (
      <div className="items">
        <div className="item-card">
          <img src="/assets/img/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png" alt="Men formal suit"/>
          <div className="item-desc">
            <p className="item-title">Men's formal suit - Black & White</p>
            <p className="item-price">$ 40.0</p>
            <span>Zalora Cloth</span>
            <div className="item-rate">
              <img src="/assets/icons/Rating 5 stars.svg" alt="rating"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
