import React, { Component } from 'react'

export default class Category extends Component {
  state = {
    background: [
      {backgroundColor: '#CC0B04'},
      {backgroundColor: '#1C3391'},
      {backgroundColor: '#F67B02'},
      {backgroundColor: '#E31F51'},
      {backgroundColor: '#57CD9E'}
    ],
    
  }
  render() {
    const  { title, categoryImg, backgroundIndex } = this.props
    return (
      <div className="item">
        <div className="item-category" style={this.state.background[backgroundIndex]}>
          <img src={categoryImg} alt="category"/>
          <p className="item-text">{title}</p>
        </div>
      </div>
    )
  }
}
