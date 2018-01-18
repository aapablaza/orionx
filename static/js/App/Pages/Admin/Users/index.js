import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import User from './User'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="users" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./List'))} />
    {User}
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Admin/Users/index.js