import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={comp(() => import('./Layout'))}>
    <Route path="/login" component={comp(() => import('./Login'))} />
    <Route path="/register" component={comp(() => import('./Register'))} />
    <Route path="/verify-email/:token" component={comp(() => import('./VerifyEmail'))} />
    <Route path="/forgot" component={comp(() => import('./Forgot'))} />
    <Route path="/reset/:token" component={comp(() => import('./Reset'))} />
    <Route path="/enroll/:token" component={comp(() => import('./Enroll'))} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Auth/index.js