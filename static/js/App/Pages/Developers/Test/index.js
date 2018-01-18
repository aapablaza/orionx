import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="test" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    <Route path=":apiKeyId" component={comp(() => import('./Tester'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Developers/Test/index.js