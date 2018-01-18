import React from 'react'
import styles from './styles.css'
import Loading from 'App/Pages/Exchange/Loading'

export default class ApolloNetworkError extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/ApolloNetworkError/index.js