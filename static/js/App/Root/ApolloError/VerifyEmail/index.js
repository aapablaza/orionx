import React from 'react'
import Layout from 'App/Pages/Auth/Layout'
import Verify from './Verify'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'
import Complete from 'App/Pages/Auth/VerifyEmail'

@withRouter
export default class VerifyEmailError extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    message: PropTypes.string
  }

  render() {
    const hasToken = !!this.props.router.params.token
    return <Layout>{hasToken ? <Complete /> : <Verify message={this.props.message} />}</Layout>
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloError/VerifyEmail/index.js