import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="tutorials" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./List'))} />
    <Route path=":key" component={comp(() => import('./View'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Developers/Tutorials/index.js