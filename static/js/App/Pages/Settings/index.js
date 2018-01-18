import React from 'react'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import {Route, IndexRoute} from 'react-router'
import BankAccounts from './BankAccounts'
import Verification from './Verification'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="/settings" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Profile'))} />
    <Route path="security" component={comp(() => import('./Security'))} />
    {BankAccounts}
    {Verification}
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Settings/index.js