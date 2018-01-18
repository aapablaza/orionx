import React from 'react'
import Translate from 'App/i18n'
import {verifyEmail} from 'meteor-apollo-accounts'
import autobind from 'autobind-decorator'
import {withApollo} from 'react-apollo'
import PropTypes from 'prop-types'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router'

@withApollo
@withMessage
@withRouter
export default class VerifyEmail extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    showMessage: PropTypes.func,
    setLoading: PropTypes.func,
    isLoading: PropTypes.bool,
    token: PropTypes.string,
    onSuccess: PropTypes.func,
    client: PropTypes.object,
    me: PropTypes.object
  }

  state = {}

  componentDidMount() {
    setTimeout(this.verify, 2000)
  }

  @autobind
  async verify() {
    try {
      this.props.setLoading(true)
      await verifyEmail({token: this.props.token}, this.props.client)
      this.props.onSuccess()
      this.props.setLoading(false)
      this.props.client.resetStore()
    } catch (error) {
      this.props.showMessage(error.message)
      this.props.router.push('/accounts')
      this.props.setLoading(false)
    }
  }

  render() {
    if (this.state.error) {
      return <div className="center-align">{this.state.error}</div>
    } else {
      return (
        <div className="center-align">
          <Translate tr="auth.verifyEmail.verifying" />
        </div>
      )
    }
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Auth/VerifyEmail/index.js