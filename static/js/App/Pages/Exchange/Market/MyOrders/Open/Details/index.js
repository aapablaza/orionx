import React from 'react'
import styles from './styles.css'
import DetailsIcon from 'react-icons/lib/md/receipt'
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import withSheet from 'App/helpers/withSheet'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import moment from 'moment'
import formatCurrency from 'App/helpers/formatCurrency'

@withSheet
export default class Details extends React.Component {
  static propTypes = {
    showSheet: PropTypes.func,
    order: PropTypes.object
  }

  getStopDetails() {
    const {order} = this.props
    const {market} = order
    const {secondaryCurrency} = market
    if (!order.isStop) return []
    const up = order.stopPriceUp
      ? formatCurrency(order.stopPriceUp, secondaryCurrency, {code: true})
      : 'No tiene'
    const down = order.stopPriceDown
      ? formatCurrency(order.stopPriceDown, secondaryCurrency, {code: true})
      : 'No tiene'
    return [
      {label: 'Precio de activación superior', value: up},
      {label: 'Precio de activación inferior', value: down}
    ]
  }

  getStatus() {
    const {order} = this.props
    if (order.status === 'open') return 'Abierta'
    if (order.status === 'closed') return 'Cerrada'
    if (order.status === 'stop') return 'Esperando activación'
    return order.status
  }

  getAmount() {
    const {order} = this.props
    const {market} = order
    const {secondaryCurrency, mainCurrency} = market
    const opts = {code: true}
    return order.secondaryAmount
      ? formatCurrency(order.secondaryAmount, secondaryCurrency, opts)
      : formatCurrency(order.amount || 0, mainCurrency, opts)
  }

  getPrice() {
    const {order} = this.props
    const {market} = order
    const {secondaryCurrency} = market
    if (order.type === 'market') {
      return 'Mercado'
    }
    return formatCurrency(order.limitPrice, secondaryCurrency, {code: true})
  }

  getType() {
    const {order} = this.props
    const text = order.sell ? 'Venta' : 'Compra'
    if (!order.isStop) return text
    return `${text} (stop)`
  }

  getFilled() {
    const {order} = this.props
    const {market} = order
    const {mainCurrency, secondaryCurrency} = market
    const opts = {code: true}
    return order.secondaryAmount
      ? formatCurrency(order.secondaryFilled || 0, secondaryCurrency, opts)
      : formatCurrency(order.filled || 0, mainCurrency, opts)
  }

  getAmountToHold() {
    const {order} = this.props
    const {market, amountToHold} = order
    const {mainCurrency, secondaryCurrency} = market
    const opts = {code: true}
    const currency = order.sell ? mainCurrency : secondaryCurrency
    return formatCurrency(amountToHold || 0, currency, opts)
  }

  @autobind
  async open() {
    const {order} = this.props
    const {market} = order
    await this.props.showSheet({
      title: 'Detalles',
      values: [
        {label: 'Mercado', value: market.name},
        {label: 'Tipo', value: this.getType()},
        {label: 'Estado', value: this.getStatus()},
        ...this.getStopDetails(),
        {label: 'Precio límite', value: this.getPrice()},
        {label: 'Cantidad', value: this.getAmount()},
        {label: 'Completado', value: this.getFilled()},
        {label: 'Monto retenido', value: this.getAmountToHold()},
        {label: 'Fecha de creación', value: moment(order.createdAt).format('LL HH:mm:ss.SSS')},
        {
          label: 'Fecha de cierre',
          value: order.closedAt ? moment(order.closedAt).format('LL HH:mm:ss.SSS') : 'Pendiente'
        }
      ]
    })
  }

  render() {
    return (
      <div className={styles.container} onClick={this.open}>
        <Tooltip content="Ver detalles">
          <DetailsIcon size={12} style={{color: '#fff'}} />
        </Tooltip>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/MyOrders/Open/Details/index.js