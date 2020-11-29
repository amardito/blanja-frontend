import React, { Component } from 'react'
import MainPage from './pages/main'
import Navbar from './components/navbar'

class App extends Component {

  render() {
    return (
      <>
        <Navbar></Navbar>
        <MainPage></MainPage>
      </>
    )
  }
}

export default App;