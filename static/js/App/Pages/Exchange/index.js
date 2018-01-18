import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Layout from './Layout'
import Main from './Main'
import Market from './Market'

export default (
  <Route path="/exchange" component={Layout}>
    <IndexRoute component={Main} />
    <Route path=":code" component={Market} />
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/index.js