import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="/accounts" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    <Route path="/accounts/:code" component={comp(() => import('./Wallet'))} />
    <Route path="/accounts/:code/transactions" component={comp(() => import('./Transactions'))} />
    <Route path="/accounts/:code/send" component={comp(() => import('./Send'))} />
    <Route path="/accounts/:code/recieve" component={comp(() => import('./Recieve'))} />
    <Route path="/accounts/:code/addresses" component={comp(() => import('./Addresses'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Accounts/index.js