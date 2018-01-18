import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import AuthCode from 'App/components/fields/AuthCode'
import {logout} from 'meteor-apollo-accounts'
import {withApollo} from 'react-apollo'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import Button from 'orionsoft-parts/lib/components/Button'
import LockIcon from 'react-icons/lib/md/lock'
import RetryIcon from 'react-icons/lib/md/repeat'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router'

@withMutation(gql`
  mutation authorizeSession($code: String) {
    authorizeSession(code: $code) {
      success
    }
  }
`)
@withMutation(gql`
  mutation resendAuthorizeSessionEmail {
    resendAuthorizeSessionEmail {
      success
    }
  }
`)
@withApollo
@withMessage
@withRouter
export default class Authorize extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    showMessage: PropTypes.func,
    client: PropTypes.object,
    authorizeSession: PropTypes.func,
    resendAuthorizeSessionEmail: PropTypes.func
  }

  state = {}

  @autobind
  async authorize() {
    this.setState({loading: true})
    try {
      await this.props.authorizeSession(
        {
          code: this.state.code
        },
        {
          refetchQueries: ['getMe']
        }
      )
      this.props.router.replace('/accounts')
    } catch (error) {
      this.setState({loading: false})
      this.props.showMessage(error.message)
    }
  }

  @autobind
  async resend() {
    this.setState({loadingResend: true})
    try {
      await this.props.resendAuthorizeSessionEmail()
      this.props.showMessage('Te reenviamos el mensaje')
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

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          Por favor escribe el código que enviamos a tu correo para autorizar este dispositivo
        </div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName="code" type={AuthCode} placeholder="Escribe el código..." />
        </Form>
        <div className={styles.buttons}>
          <Button onClick={this.resend} loading={this.state.loadingResend}>
            <RetryIcon style={{marginRight: 5}} /> Reenviar
          </Button>
          <Button primary onClick={this.authorize} loading={this.state.loading}>
            <LockIcon style={{marginRight: 5}} /> Confirmar
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
// ./src/App/Root/ApolloError/UnauthorizedSession/Authorize/index.js