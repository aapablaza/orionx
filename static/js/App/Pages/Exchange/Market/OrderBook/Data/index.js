import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Spread from './Spread'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import Loading from 'App/Pages/Exchange/Loading'
import Item from './List/Item'
import autobind from 'autobind-decorator'
import range from 'lodash/range'
import query from '../query'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

@withGraphQL(query, {loading: <Loading />})
export default class Data extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    onSelectPrice: PropTypes.func,
    orderBook: PropTypes.object,
    didMount: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number
  }

  state = {}

  componentDidMount() {
    const itemHeight = 18.5
    const items = this.props.orderBook.sell.length
    const spaceHeight = this.props.height - 41 - 18 - 6
    const scrollTop = items * itemHeight - spaceHeight / 2 + 10
    this.refs.container.scrollTop = scrollTop
  }

  getOrder(index) {
    const buyOrders = this.props.orderBook.buy
    const sellOrders = this.props.orderBook.sell
    if (index < sellOrders.length) {
      const i = sellOrders.length - index - 1
      return {
        ...sellOrders[i],
        sell: true
      }
    } else if (index > sellOrders.length) {
      const newIndex = index - sellOrders.length - 1
      return {
        ...buyOrders[newIndex],
        sell: false
      }
    }
  }

  @autobind
  renderOrder(index) {
    const order = this.getOrder(index)
    if (!order) {
      const buy = this.props.orderBook.buy[0] || {}
      const sell = this.props.orderBook.sell[0] || {}
      const spread = sell.limitPrice - buy.limitPrice
      return <Spread key="spread" market={this.props.market} spread={spread} />
    }
    const key = `${order.sell ? 'sell' : 'buy'}${order.limitPrice}`
    return (
      <Item
        key={key}
        order={order}
        market={this.props.market}
        sell={order.sell}
        onClick={() => this.props.onSelectPrice({price: order.limitPrice, sell: !order.sell})}
      />
    )
  }

  renderOrders() {
    const total = this.props.orderBook.sell.length + this.props.orderBook.buy.length + 1
    return range(total).map(index => this.renderOrder(index))
  }

  render() {
    return (
      <div
        className={styles.container}
        ref="container"
        style={{height: this.props.height - 41 - 18 - 6}}>
        <ReactCSSTransitionGroup
          transitionName="orders-list"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.renderOrders()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/OrderBook/Data/index.js