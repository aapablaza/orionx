import React from 'react'
import {resetStore} from 'meteor-apollo-accounts/client/store'

export default class InvalidToken extends React.Component {
  static propTypes = {}

  componentDidMount() {
    resetStore()
  }

  render() {
    return <span />
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloError/InvalidToken/index.js