import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="bank-accounts" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    <Route path="create" component={comp(() => import('./Create'))} />
    <Route path=":accountId" component={comp(() => import('./View'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Settings/BankAccounts/index.js