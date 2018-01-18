import React from 'react'
import PropTypes from 'prop-types'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import {withRouter} from 'react-router'
import autobind from 'autobind-decorator'
import track from '../index'

let lastRoute = ''

@withGraphQL(
  gql`
    query getMe {
      me {
        _id
        intercomHash
        email
        name
        createdAt
        profile {
          firstName
          lastName
          phone
          phoneVerified
        }
      }
    }
  `,
  {loading: null}
)
@withRouter
export default class Provider extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    children: PropTypes.object,
    me: PropTypes.object,
    loading: PropTypes.bool
  }

  componentDidMount() {
    this.updateUser({})
    this.initFbq()
    this.interval = setInterval(this.checkRoute, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateUser(prevProps)
    if (!prevProps.me && this.props.me) {
      this.initFbq()
    }
  }

  @autobind
  checkRoute() {
    const path = this.props.router.location.pathname
    if (lastRoute !== path) {
      lastRoute = path
      this.routeDidChange(path)
    }
  }

  routeDidChange(path) {
    track('view')
  }

  initFbq() {
    if (this.props.me) {
      window.fbq('init', '1725479570836131', {
        em: this.props.me.email,
        fn: this.props.me.profile.firstName,
        ln: this.props.me.profile.lastName,
        ph: this.props.me.profile.phone
      })
    } else {
      window.fbq('init', '1725479570836131')
    }
  }

  stop() {
    window.Intercom('shutdown')
    this.isOn = false
  }

  start() {
    if (this.props.me) {
      window.Intercom('boot', {
        app_id: 'ruqmy2sz',
        email: this.props.me.email,
        created_at: this.props.me.createdAt * 0.001,
        name: this.props.me.name,
        first_name: this.props.me.profile.firstName,
        last_name: this.props.me.profile.lastName,
        user_id: this.props.me._id,
        phone: this.props.me.profile.phone,
        user_hash: this.props.me.intercomHash
      })
    } else {
      window.Intercom('boot', {app_id: 'ruqmy2sz'})
    }
    this.isOn = true
  }

  updateUser(prevProps) {
    if (this.props.loading) return

    if (this.props.router.location.pathname.startsWith('/exchange')) {
      if (this.isOn) {
        this.stop()
      }
      return
    }

    if (prevProps.me) {
      if (!this.props.me) {
        // user logged out
        this.stop()
        this.start()
      }
    }

    if (!this.isOn) {
      this.start()
    }
  }

  render() {
    return this.props.children
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/track/Provider/index.js