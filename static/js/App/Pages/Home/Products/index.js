import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={comp(() => import('./Layout'))}>
    <Route path="/products/exchange" component={comp(() => import('./Exchange'))} />
    <Route path="/products/wallet" component={comp(() => import('./Wallet'))} />
    <Route path="/products/buy" component={comp(() => import('./Instant'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Products/index.js