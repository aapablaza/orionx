import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={comp(() => import('./Layout'))}>
    <Route path="/feedback">
      <IndexRoute component={comp(() => import('./Main'))} />
      <Route path="*" component={comp(() => import('./Main'))} />
    </Route>
    <Route path="/bug-report">
      <IndexRoute component={comp(() => import('./Main'))} />
      <Route path="*" component={comp(() => import('./Main'))} />
    </Route>
    <Route path="/new-cryptocurrencies">
      <IndexRoute component={comp(() => import('./Main'))} />
      <Route path="*" component={comp(() => import('./Main'))} />
    </Route>
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Canny/index.js