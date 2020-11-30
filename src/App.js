import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from './pages/main'
import Product from './pages/product'
import Search from './pages/search';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={MainPage} />
      <Route path="/product/:id" exact component={Product} />
      <Route path="/search" exact component={Search} />

    </BrowserRouter>
  )
}

export default App;