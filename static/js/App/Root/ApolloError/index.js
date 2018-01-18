import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import UnauthorizedSession from './UnauthorizedSession'
import InvalidToken from './InvalidToken'
import VerifyEmail from './VerifyEmail'

export default class ApolloError extends React.Component {
  static propTypes = {
    error: PropTypes.object
  }

  renderErrors() {
    return this.props.error.graphQLErrors.map((error, index) => {
      return (
        <div key={index} className={styles.message}>
          {error.message} ({error.path.join('.')})
        </div>
      )
    })
  }

  render() {
    if (this.props.error.message.includes('[unauthorizedSession]')) return <UnauthorizedSession />
    if (this.props.error.message.includes('[invalidToken]')) return <InvalidToken />
    if (this.props.error.message.includes('[verifyEmail]')) {
      return <VerifyEmail message={this.props.error.message} />
    }
    return (
      <div className={styles.container}>
        <div className={styles.title}>Ocurrió un error</div>
        {this.renderErrors()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloError/index.js