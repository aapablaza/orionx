import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import Auth from './Auth'
import Settings from './Settings'
import Accounts from './Accounts'
import Exchange from './Exchange'
import Instant from './Instant'
import Admin from './Admin'
import Home from './Home'
import Canny from './Canny'
import Developers from './Developers'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route>
    {Auth}
    {Admin}
    {Developers}
    <Route component={comp(() => import('./Layout'))}>
      <Route path="/dashboard" component={comp(() => import('./Dashboard'))} />
      {Settings}
      {Accounts}
      {Instant}
      {Canny}
    </Route>
    {Exchange}
    {Home}
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/index.js