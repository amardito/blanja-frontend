import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import MainPage from './pages/main'
import Product from './pages/product'
import Search from './pages/search';
import Profile from './pages/profile';
import Auth from './pages/auth';
import Mybag from './pages/cart';
import PrivateRouter from './components/PrivateRouter';

import store from "./global/store";

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <PrivateRouter exact path="/profile">
          <Route exact component={Profile} />
        </PrivateRouter>
        <Route path="/auth" component={Auth} />
        <Route exact path="/product/:id"  component={Product} />
        <Route exact path="/search" component={Search} />
        <PrivateRouter exact path="/mybag">
          <Route exact component={Mybag} />
        </PrivateRouter>
      </BrowserRouter>
    </Provider>
  )
}

export default Router;