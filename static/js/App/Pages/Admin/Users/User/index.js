import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path=":userId" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    <Route path="wallets" component={comp(() => import('./Wallets'))} />
    <Route path="bank-accounts" component={comp(() => import('./BankAccounts'))} />
    <Route path="orders" component={comp(() => import('./Orders'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Admin/Users/User/index.js