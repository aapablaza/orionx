import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Provider from 'orionsoft-parts/lib/components/Provider/MeProvider/Provider'
import Loading from 'orionsoft-parts/lib/components/Provider/MeProvider/Loading'
import {withRouter} from 'react-router'
import includes from 'lodash/includes'

@graphql(
  gql`
    query getMe {
      me {
        _id
        roles
        emails {
          address
          verified
        }
      }
    }
  `,
  {options: {pollInterval: 10000}}
)
@withRouter
export default class AuthProvider extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    data: PropTypes.object,
    children: PropTypes.node
  }

  hasUnauthorizedSessionError() {
    if (!this.props.data.error) return false
    return this.props.data.error.message.includes('[unauthorizedSession]')
  }

  hasVerifyEmailError() {
    if (!this.props.data.error) return false
    return this.props.data.error.message.includes('[unauthorizedSession]')
  }

  checkRoute() {
    const path = this.props.router.location.pathname
    if (path === '/login' && this.props.data.me) {
      this.props.router.replace('/accounts')
    }
  }

  render() {
    const loadingCodes = [1]
    if (includes(loadingCodes, this.props.data.networkStatus)) return <Loading />
    this.checkRoute()
    return <Provider me={this.props.data.me}>{this.props.children}</Provider>
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/UserProvider/index.js