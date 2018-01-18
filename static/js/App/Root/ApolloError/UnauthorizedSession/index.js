import React from 'react'
import Layout from 'App/Pages/Auth/Layout'
import Authorize from './Authorize'

export default class UnauthorizedSession extends React.Component {
  static propTypes = {}

  render() {
    return (
      <Layout>
        <Authorize />
      </Layout>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloError/UnauthorizedSession/index.js