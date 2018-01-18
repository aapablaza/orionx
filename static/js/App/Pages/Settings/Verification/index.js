import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="verification">
    <IndexRoute component={comp(() => import('./Main'))} />
    <Route path="basic" component={comp(() => import('./Basic'))} />
    <Route path="legal" component={comp(() => import('./Legal'))} />
    <Route path="secure" component={comp(() => import('./Secure'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Settings/Verification/index.js