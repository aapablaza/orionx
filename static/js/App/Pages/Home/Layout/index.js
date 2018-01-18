import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Nav from './Nav'
import Footer from './Footer'

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className={styles.container}>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Layout/index.js