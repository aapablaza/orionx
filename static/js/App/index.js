import React from 'react'
import Root from 'App/Root'
import Pages from './Pages'
import {Router, Route, browserHistory} from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} key={Math.random()} history={browserHistory}>
        <Route component={Root}>{Pages}</Route>
      </Router>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/index.js