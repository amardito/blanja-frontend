import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from './pages/main'
import Product from './pages/product'
import Search from './pages/search';

function Router() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={MainPage} />
      <Route path="/product/:id" component={Product} />
      <Route path="/search" component={Search} />

    </BrowserRouter>
  )
}

export default Router;