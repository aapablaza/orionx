import React from 'react'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

@withGraphQL(
  gql`
    query getMe {
      me {
        _id
      }
    }
  `,
  {loading: null}
)
export default class Buttons extends React.Component {
  static propTypes = {
    me: PropTypes.object,
    loading: PropTypes.bool
  }

  renderLoggedIn() {
    return (
      <div className={styles.container}>
        <Button to="/dashboard" big>
          Ir a la plataforma
        </Button>
      </div>
    )
  }

  render() {
    if (this.props.loading) return <div className={styles.container} />
    if (this.props.me) return this.renderLoggedIn()
    return (
      <div className={styles.container}>
        <Button to="/register" big style={{marginRight: 10}}>
          Empezar
        </Button>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/Top/Buttons/index.js