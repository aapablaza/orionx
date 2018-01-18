import React from 'react'
import styles from './styles.css'
import {Link, withRouter} from 'react-router'
import BackIcon from 'react-icons/lib/md/keyboard-arrow-left'
import PropTypes from 'prop-types'

@withRouter
export default class Logo extends React.Component {
  static propTypes = {
    router: PropTypes.object
  }

  render() {
    // const path = this.props.router.location.pathname
    return (
      <div className={styles.container}>
        <Link to="/dashboard">
          <div>
            <BackIcon />
          </div>
          <div>
            <img src="/logo.svg" alt="Logo" />
          </div>
        </Link>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Navbar/Logo/index.js