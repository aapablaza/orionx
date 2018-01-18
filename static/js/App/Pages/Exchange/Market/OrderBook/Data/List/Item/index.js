import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import sleep from 'orionsoft-parts/lib/helpers/sleep'
import AmountOpacity from 'App/components/AmountOpacity'

export default class Item extends React.Component {
  static propTypes = {
    order: PropTypes.object,
    sell: PropTypes.bool,
    market: PropTypes.object,
    onClick: PropTypes.func,
    style: PropTypes.object
  }

  state = {
    className: ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.order.limitPrice !== this.props.order.limitPrice) return true
    if (nextProps.order.amount !== this.props.order.amount) return true
    if (nextState.className !== this.state.className) return true
    return false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.order.amount !== this.props.order.amount) {
      this.highlight()
    }
  }

  async highlight() {
    const className = this.props.sell ? styles.highlightSell : styles.highlightBuy
    this.setState({className})
    await sleep(1000)
    this.setState({className: null})
  }

  render() {
    const {sell, order, market} = this.props
    const className = sell ? styles.containerSell : styles.containerBuy
    return (
      <div
        style={this.props.style}
        className={className + ' ' + this.state.className}
        onClick={this.props.onClick}>
        <div className={styles.amount + ' amount'}>
          <AmountOpacity value={order.amount} currency={market.mainCurrency} />
        </div>
        <div className={styles.price}>
          <AmountOpacity value={order.limitPrice} currency={market.secondaryCurrency} long />
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/OrderBook/Data/List/Item/index.js