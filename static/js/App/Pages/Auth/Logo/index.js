import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'

export default class Logo extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Auth/Logo/index.js