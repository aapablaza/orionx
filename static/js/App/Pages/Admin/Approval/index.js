import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="approval" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./List'))} />
    <Route path=":userId" component={comp(() => import('./User'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Admin/Approval/index.js