import React from 'react'
import styles from './styles.css'
import {logout} from 'meteor-apollo-accounts'
import {withApollo} from 'react-apollo'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import Button from 'orionsoft-parts/lib/components/Button'
import RetryIcon from 'react-icons/lib/md/repeat'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation resendVerificationEmail {
    resendVerificationEmail {
      success
    }
  }
`)
@withApollo
@withMessage
export default class Authorize extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    client: PropTypes.object,
    resendVerificationEmail: PropTypes.func,
    message: PropTypes.string
  }

  state = {}

  @autobind
  async resend() {
    this.setState({loadingResend: true})
    try {
      await this.props.resendVerificationEmail()
      this.props.showMessage('Te reenviamos el email')
    } catch (error) {
      this.props.showMessage(error.message)
    }
    this.setState({loadingResend: false})
  }

  @autobind
  async logout() {
    this.setState({logginOut: true})
    await logout(this.props.client)
  }

  renderEmail() {
    const email = (this.props.message.split('<')[1] || '').split('>')[0]
    return email
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Para poder seguir debes verificar tu email</div>
        <div className={styles.email}>{this.renderEmail()}</div>
        <div className={styles.buttons}>
          <Button onClick={this.resend} loading={this.state.loadingResend}>
            <RetryIcon style={{marginRight: 5}} /> Reenviar email
          </Button>
        </div>
        <div className={styles.cancelButton}>
          <a onClick={this.logout} loading={this.state.logginOut}>
            Cancelar inicio de sesión
          </a>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloError/VerifyEmail/Verify/index.js