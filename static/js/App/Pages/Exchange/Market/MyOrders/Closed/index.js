import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import moment from 'moment'
import Loading from 'App/Pages/Exchange/Loading'
import formatCurrency from 'App/helpers/formatCurrency'
import Details from '../Open/Details'
import AmountOpacity from 'App/components/AmountOpacity'
import {List} from 'react-virtualized'
import autobind from 'autobind-decorator'
import StopIcon from 'react-icons/lib/md/alarm'

const filledMinWidth = 580
const dateMinWidth = 420

@withGraphQL(
  gql`
    query myClosedOrders($marketCode: ID!, $page: Int) {
      orders(marketCode: $marketCode, onlyClosed: true, limit: 50, page: $page) {
        totalCount
        hasNextPage
        page
        items {
          _id
          sell
          type
          amount
          amountToHold
          secondaryAmount
          filled
          closedAt
          secondaryFilled
          limitPrice
          createdAt
          activatedAt
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
  {loading: <Loading />}
)
export default class Closed extends React.Component {
  static propTypes = {
    orders: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    renderHeader: PropTypes.func,
    fetchMore: PropTypes.func
  }

  state = {page: 1}

  componentDidMount() {
    this.props.renderHeader(this.renderHeader())
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.width !== prevProps.width) {
      this.props.renderHeader(this.renderHeader())
    }
  }

  async fetchMore() {
    if (this.state.loading) return
    this.setState({loading: true})
    await this.props.fetchMore({
      variables: {
        page: this.state.page + 1
      },
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) return previousResult
        return {
          orders: {
            __typename: fetchMoreResult.orders.__typename,
            totalCount: fetchMoreResult.orders.totalCount,
            hasNextPage: fetchMoreResult.orders.totalCount,
            page: fetchMoreResult.orders.page,
            items: [...previousResult.orders.items, ...fetchMoreResult.orders.items]
          }
        }
      }
    })
    this.setState({loading: false})
  }

  getOrder(index) {
    const order = this.props.orders.items[index]
    if (order) return order
    this.fetchMore()
  }

  renderHeader() {
    return (
      <div className={styles.thead}>
        <div className={styles.sell}>Tipo</div>
        <div className={styles.price}>Precio</div>
        {this.props.width < filledMinWidth ? null : <div className={styles.filled}>Completado</div>}
        {this.props.width < dateMinWidth ? null : <div className={styles.date}>Apertura</div>}
        <div className={styles.closedAt}>Cierre</div>
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
    return <div className={styles.date}>{moment(order.activatedAt).fromNow(true)}</div>
  }

  @autobind
  renderOrder({key, index, style}) {
    const order = this.getOrder(index)
    if (!order) {
      return (
        <div key={key} className={styles.loading} style={style}>
          Cargando...
        </div>
      )
    }
    return (
      <div key={key} className={styles.tr} style={style}>
        <div className={styles.sell}>{this.getType(order)}</div>
        <div className={styles.price}>{this.renderPrice(order)}</div>

        {this.renderFilled(order)}
        {this.renderDate(order)}
        <div className={styles.closedAt}>
          {order.closedAt
            ? moment.duration(order.activatedAt - order.closedAt).humanize() + ' después'
            : 'cancelada'}
        </div>
        <div className={styles.actions}>
          <Details order={order} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <List
        width={this.props.width - 2}
        height={this.props.height - 41 - 18 - 4}
        rowCount={this.props.orders.totalCount}
        rowHeight={20}
        rowRenderer={this.renderOrder}
      />
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/MyOrders/Closed/index.js