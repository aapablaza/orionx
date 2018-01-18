import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import moment from 'moment'
import Loading from 'App/Pages/Exchange/Loading'
import formatCurrency from 'App/helpers/formatCurrency'
import Cancel from './Cancel'
import Details from './Details'
import AmountOpacity from 'App/components/AmountOpacity'
import {List} from 'react-virtualized'
import autobind from 'autobind-decorator'
import StopIcon from 'react-icons/lib/md/alarm'

const filledMinWidth = 580
const dateMinWidth = 420

@withGraphQL(
  gql`
    query myOrders($marketCode: ID!) {
      orders(marketCode: $marketCode, onlyOpen: true, limit: 0) {
        totalCount
        items {
          _id
          sell
          type
          amount
          amountToHold
          secondaryAmount
          filled
          secondaryFilled
          limitPrice
          createdAt
          isStop
          status
          stopPriceUp
          stopPriceDown
          market {
            name
            code
            mainCurrency {
              code
              format
              longFormat
              units
            }
            secondaryCurrency {
              code
              format
              longFormat
              units
            }
          }
        }
      }
    }
  `,
  {loading: <Loading />, options: {pollInterval: 5000}}
)
export default class Open extends React.Component {
  static propTypes = {
    orders: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    renderHeader: PropTypes.func
  }

  componentDidMount() {
    this.props.renderHeader(this.renderHeader())
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.width !== prevProps.width) {
      this.props.renderHeader(this.renderHeader())
    }
  }

  renderHeader() {
    return (
      <div className={styles.thead}>
        <div className={styles.sell}>Tipo</div>
        <div className={styles.price}>Precio</div>
        <div className={styles.amount}>Cantidad</div>
        {this.props.width < filledMinWidth ? null : <div className={styles.filled}>Completado</div>}
        {this.props.width < dateMinWidth ? null : <div className={styles.date}>Fecha</div>}
        <div className={styles.actions} />
      </div>
    )
  }

  renderPrice(order) {
    const {market} = order
    const {secondaryCurrency} = market
    if (order.type === 'market') {
      return 'Mercado'
    }
    return (
      <span>{formatCurrency(order.limitPrice, secondaryCurrency, {code: true, long: true})}</span>
    )
  }

  getType(order) {
    const action = order.sell ? 'Venta' : 'Compra'
    const stop = order.isStop ? <StopIcon /> : null
    return (
      <span className={styles.typeInner}>
        <span className={styles.action}>{action}</span> {stop}
      </span>
    )
  }

  renderFilled(order) {
    if (this.props.width < filledMinWidth) return
    if (order.status === 'stop') return <div className={styles.filled}>-</div>
    const {market} = order
    const {mainCurrency, secondaryCurrency} = market
    const text = order.secondaryAmount ? (
      <AmountOpacity value={order.secondaryFilled || 0} currency={secondaryCurrency} code />
    ) : (
      <AmountOpacity value={order.filled || 0} currency={mainCurrency} code />
    )

    return <div className={styles.filled}>{text}</div>
  }

  renderDate(order) {
    if (this.props.width < dateMinWidth) return
    return <div className={styles.date}>{moment(order.createdAt).fromNow(true)}</div>
  }

  @autobind
  renderOrder({key, index, style}) {
    const order = this.props.orders.items[index]
    const {market} = order
    const {mainCurrency, secondaryCurrency} = market
    return (
      <div key={key} className={styles.tr} style={style}>
        <div className={styles.sell}>{this.getType(order)}</div>
        <div className={styles.price}>{this.renderPrice(order)}</div>
        <div className={styles.amount}>
          {order.secondaryAmount ? (
            <AmountOpacity value={order.secondaryAmount} currency={secondaryCurrency} code />
          ) : (
            <AmountOpacity value={order.amount || 0} currency={mainCurrency} code />
          )}
        </div>
        {this.renderFilled(order)}
        {this.renderDate(order)}
        <div className={styles.actions}>
          <Details order={order} />
          <Cancel order={order} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <List
        width={this.props.width - 2}
        height={this.props.height - 41 - 18 - 4}
        rowCount={this.props.orders.items.length}
        rowHeight={20}
        rowRenderer={this.renderOrder}
      />
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/MyOrders/Open/index.js