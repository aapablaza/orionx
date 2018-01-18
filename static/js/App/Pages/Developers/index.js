import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import Keys from './Keys'
import Test from './Test'
import Tutorials from './Tutorials'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="developers" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    {Keys}
    {Test}
    {Tutorials}
    <Route path="docs" component={comp(() => import('./Docs'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Developers/index.js