import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="withdrawals" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Currencies'))} />
    <Route path=":code" component={comp(() => import('./List'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Admin/Withdrawals/index.js