import React from 'react'
import {Route} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route component={comp(() => import('./Layout'))}>
    <Route
      path="/instant(/:sell)(/:mainCurrencyCode)(/:marketCode)"
      component={comp(() => import('./Main'))}
    />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Instant/index.js