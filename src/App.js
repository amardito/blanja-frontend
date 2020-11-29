import React, { Component } from 'react'
import MainPage from './pages/main'
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:1010/api/v1/products`
})

class App extends Component {

  render() {
    return (
      <>
        <MainPage></MainPage>
      </>
    )
  }
}

export default App;