import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

export default class Market extends React.Component {
  static propTypes = {
    market: PropTypes.object
  }

  render() {
    const {market} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>{market.code}</div>
        <div className={styles.chart}>chart here</div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Main/Market/index.js