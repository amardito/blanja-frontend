import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from './pages/main'
import Product from './pages/product'
import Search from './pages/search';
import Profile from './pages/profile';
import Auth from './pages/auth';
import Mybag from './pages/cart';

function Router() {
  return (
    <BrowserRouter>

      <Route exact path="/" component={MainPage} />
      <Route path="/auth" component={Auth} />
      <Route exact path="/product/:id"  component={Product} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/mybag" component={Mybag} />

    </BrowserRouter>
  )
}

export default Router;