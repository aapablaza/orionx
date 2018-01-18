import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={comp(() => import('./Layout'))}>
    <Route path="/bitcoin" component={comp(() => import('./Bitcoin'))} />
    <Route path="/ethereum" component={comp(() => import('./Ethereum'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Currencies/index.js