import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Data from './Data'
import autobind from 'autobind-decorator'
import RealTime from './RealTime'

export default class OrderBook extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    onSelectPrice: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
  }

  @autobind
  didMount(element) {
    if (!element) return
    if (!this.refs.box) return
    this.refs.box.scrollTop = element.clientHeight * 0.5 - this.refs.box.clientHeight * 0.5
  }

  renderHeader() {
    return (
      <div className={styles.header}>
        <div>Monto</div>
        <div>Precio ({this.props.market.secondaryCurrency.code})</div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="header">
          <div className="header-title">Libro de órdenes</div>
          {this.renderHeader()}
        </div>
        <div className="box" ref="box">
          <RealTime marketCode={this.props.market.code} />
          <Data
            width={this.props.width}
            height={this.props.height}
            didMount={this.didMount}
            onSelectPrice={this.props.onSelectPrice}
            market={this.props.market}
            marketCode={this.props.market.code}
          />
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/OrderBook/index.js