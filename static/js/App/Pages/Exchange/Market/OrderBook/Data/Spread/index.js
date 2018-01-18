import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import formatCurrency from 'App/helpers/formatCurrency'

export default class Spread extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    spread: PropTypes.number,
    style: PropTypes.object
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className={styles.container}>
          <div className={styles.label}>
            Diferencia ({this.props.market.secondaryCurrency.code})
          </div>
          <div className={styles.value}>
            {this.props.spread && this.props.spread > 0
              ? formatCurrency(this.props.spread, this.props.market.secondaryCurrency)
              : '0'}
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/OrderBook/Data/Spread/index.js