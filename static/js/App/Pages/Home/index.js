import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import Home from './Home'
import Layout from './Layout'
import Currencies from './Currencies'
import Products from './Products'
import NotFound from './NotFound'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={Layout}>
    <Route path="/" component={Home} />
    <Route path="/prices" component={comp(() => import('./Prices'))} />
    <Route path="/about-us" component={comp(() => import('./AboutUs'))} />
    <Route path="/global" component={comp(() => import('./Global'))} />
    <Route path="/terms-and-conditions" component={comp(() => import('./Terms'))} />
    <Route path="/privacy-policy" component={comp(() => import('./Privacy'))} />
    <Route path="/security" component={comp(() => import('./Security'))} />
    <Route path="/rates" component={comp(() => import('./Rates'))} />
    {Currencies}
    {Products}
    <Route path="*" component={NotFound} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Home/index.js