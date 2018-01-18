import React from 'react'
import styles from './styles.css'
import CancelIcon from 'react-icons/lib/md/clear'
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import withConfirmationDialog from 'App/helpers/withConfirmationDialog'
import autobind from 'autobind-decorator'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import formatCurrency from 'App/helpers/formatCurrency'

@withMutation(gql`
  mutation cancelOrder($orderId: ID) {
    cancelOrder(orderId: $orderId) {
      _id
    }
  }
`)
@withMessage
@withConfirmationDialog
export default class Cancel extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    cancelOrder: PropTypes.func,
    order: PropTypes.object
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

  @autobind
  async cancel() {
    this.setState({loading: true, errorMessages: null})
    try {
      const {order} = this.props
      if (order.type === 'market' && !order.isStop) {
        throw new Error(
          'No se puede cancelar una orden de mercado... de hecho, ya se debería haber ejecutado. Contactanos para solucionar esto'
        )
      }
      const market = order.market
      await this.props.confirm({
        title: 'Cancelar orden',
        description: `Confirma que quieres cancelar esta orden de ${
          this.props.sell ? 'venta' : 'compra'
        } de ${this.getAmount()}.`,
        disableTwoFactor: true,
        values: [
          {label: 'Mercado', value: market.name},
          {label: 'Tipo', value: this.getType()},
          {label: 'Precio límite', value: this.getPrice()},
          {label: 'Cantidad', value: this.getAmount()}
        ]
      })
      await this.props.cancelOrder(
        {
          orderId: this.props.order._id
        },
        {refetchQueries: ['myOrders']}
      )
      this.props.showMessage('La orden fue cancelada')
    } catch (error) {
      if (error.message !== '[dialog-cancel]') {
        console.log('Error:', error)
        this.props.showMessage(error.message, {level: 'error'})
      }
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container} onClick={this.cancel}>
        <Tooltip content="Cancelar orden" position="left">
          <CancelIcon size={12} style={{color: '#fff'}} />
        </Tooltip>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/MyOrders/Open/Cancel/index.js