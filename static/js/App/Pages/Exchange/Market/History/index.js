import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Data from './Data'
import RealTime from './RealTime'

export default class History extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    height: PropTypes.number
  }

  renderHeader() {
    return (
      <div className={styles.header}>
        <div>Monto</div>
        <div>Precio ({this.props.market.secondaryCurrency.code})</div>
        <div>Fecha</div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <RealTime marketCode={this.props.market.code} />
        <div className="header">
          <div className="header-title">Historial de transacciones</div>
          {this.renderHeader()}
        </div>
        <div className="">
          <Data
            height={this.props.height}
            market={this.props.market}
            marketCode={this.props.market.code}
          />
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/History/index.js