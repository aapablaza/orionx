import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import TraderNumber from 'App/components/fields/TraderNumber'
import Button from 'orionsoft-parts/lib/components/Button'
import PropTypes from 'prop-types'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import formatCurrency from 'App/helpers/formatCurrency'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withConfirmationDialog from 'App/helpers/withConfirmationDialog'
import autobind from 'autobind-decorator'
import track from 'App/helpers/track'

@withMessage
@withMutation(gql`
  mutation placeStopLimitOrder(
    $marketCode: ID
    $stopPriceUp: BigInt
    $stopPriceDown: BigInt
    $amount: BigInt
    $limitPrice: BigInt
    $sell: Boolean
  ) {
    placeStopLimitOrder(
      marketCode: $marketCode
      stopPriceUp: $stopPriceUp
      stopPriceDown: $stopPriceDown
      amount: $amount
      limitPrice: $limitPrice
      sell: $sell
    ) {
      _id
    }
  }
`)
@withConfirmationDialog
export default class StopLimit extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    market: PropTypes.object,
    sell: PropTypes.bool,
    placeStopLimitOrder: PropTypes.func,
    loggedIn: PropTypes.bool
  }

  state = {}

  @autobind
  async placeOrder() {
    this.setState({loading: true})
    try {
      const market = this.props.market
      const amount = formatCurrency(this.state.amount, market.mainCurrency, {code: true})
      const price = formatCurrency(this.state.limitPrice, market.secondaryCurrency, {code: true})
      const opts = {code: true}
      const formattedStopPriceUp = this.state.stopPriceUp
        ? formatCurrency(this.state.stopPriceUp || 0, market.secondaryCurrency, opts)
        : 'No tiene'
      const formattedStopPriceDown = this.state.stopPriceDown
        ? formatCurrency(this.state.stopPriceDown || 0, market.secondaryCurrency, opts)
        : 'No tiene'
      await this.props.confirm({
        title: 'Confirmar',
        description: `Confirma que quieres crear esta orden de ${
          this.props.sell ? 'venta' : 'compra'
        } de ${amount} con precio de activación.`,
        disableTwoFactor: true,
        values: [
          {label: 'Mercado', value: this.props.market.name},
          {label: 'Tipo', value: this.props.sell ? 'Venta' : 'Compra'},
          {label: 'Monto', value: amount},
          {label: 'Precio por ' + market.mainCurrency.code, value: price},
          {label: 'Precio de activación superior', value: formattedStopPriceUp},
          {label: 'Precio de activación inferior', value: formattedStopPriceDown}
        ]
      })
      await this.props.placeStopLimitOrder(
        {
          marketCode: this.props.market.code,
          amount: this.state.amount,
          limitPrice: this.state.limitPrice,
          sell: this.props.sell,
          stopPriceUp: this.state.stopPriceUp,
          stopPriceDown: this.state.stopPriceDown
        },
        {refetchQueries: ['myOrders']}
      )
      this.setState({amount: 0, limitPrice: 0, stopPriceUp: 0, stopPriceDown: 0})
      this.props.showMessage('Orden creada')
      track('trade', {
        marketCode: this.props.market.code,
        orderType: 'stopLimit',
        sellType: this.props.sell ? 'sell' : 'buy'
      })
    } catch (error) {
      if (error.message !== '[dialog-cancel]') {
        console.log('Error:', error)
        this.props.showMessage(error.message, {level: 'error'})
      }
    }
    this.setState({loading: false})
  }

  renderPriceActivation() {
    const secondaryCurrency = this.props.market.secondaryCurrency
    const opts = {code: true}
    const formattedStopPriceUp = formatCurrency(
      this.state.stopPriceUp || 0,
      secondaryCurrency,
      opts
    )
    const formattedStopPriceDown = formatCurrency(
      this.state.stopPriceDown || 0,
      secondaryCurrency,
      opts
    )
    const up = `es mayor a igual a ${formattedStopPriceUp}`
    const down = `es menor o igual a ${formattedStopPriceDown}`
    if (!this.state.stopPriceUp && !this.state.stopPriceDown) return
    const conditions = []
    if (this.state.stopPriceUp) conditions.push(up)
    if (this.state.stopPriceDown) conditions.push(down)
    return <span>Si el precio de la última transacción {conditions.join(' o ')}</span>
  }

  renderTotalLabel() {
    const secondaryCurrency = this.props.market.secondaryCurrency
    const mainCurrency = this.props.market.mainCurrency
    const amount = this.state.amount
    if (!amount) return <span />
    const formattedAmount = formatCurrency(amount, mainCurrency) + ' ' + mainCurrency.code
    const price = this.state.limitPrice || 0
    const formattedPrice = formatCurrency(price, secondaryCurrency) + ' ' + secondaryCurrency.code
    const verb = this.props.sell ? 'recibirás' : 'gastarás'
    const action = this.props.sell ? 'venta' : 'compra'
    return (
      <div className="totalLabel">
        {this.renderPriceActivation()}, se generará una orden de {action} de {formattedAmount} a{' '}
        {formattedPrice} cada uno y si la orden es ejecutada {verb} un{' '}
        {this.props.sell ? 'mínimo' : 'máximo'} de
      </div>
    )
  }

  renderTotal() {
    const price = this.state.limitPrice || 0
    const amount = this.state.amount || 0
    if (!amount) return <span />
    const currency = this.props.market.secondaryCurrency
    const otherCurrency = this.props.market.mainCurrency
    const mainMultiplier = Math.pow(10, -this.props.market.mainCurrency.units)
    const total = price * amount * mainMultiplier
    const otherVerb = this.props.sell ? 'gastarás' : 'recibirás'
    const formattedAmount = formatCurrency(amount, otherCurrency)
    const andText = `Y ${otherVerb} ${formattedAmount} ${otherCurrency.code}`
    return (
      <div className="total">
        {this.renderTotalLabel()}
        <div className="totalValue">{formatCurrency(total, currency, {code: true})}</div>
        <div className="totalCommission">{this.props.sell ? '' : andText}</div>
      </div>
    )
  }

  renderButton() {
    if (!this.props.loggedIn) return
    return (
      <Button
        loading={this.state.loading}
        onClick={this.placeOrder}
        primary={!this.props.sell}
        danger={this.props.sell}>
        Crear orden
      </Button>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="label">Precio de activación superior</div>
          <Field
            fieldName="stopPriceUp"
            currency={this.props.market.secondaryCurrency}
            type={TraderNumber}
          />
          <div className="label">Precio de activación inferior</div>
          <Field
            fieldName="stopPriceDown"
            currency={this.props.market.secondaryCurrency}
            type={TraderNumber}
          />
          <div className="label">Monto a {this.props.sell ? 'vender' : 'comprar'}</div>
          <Field fieldName="amount" currency={this.props.market.mainCurrency} type={TraderNumber} />
          <div className="label">
            Precio límite por {this.props.market.mainCurrency.code} (opcional)
          </div>
          <Field
            fieldName="limitPrice"
            currency={this.props.market.secondaryCurrency}
            type={TraderNumber}
          />
          {this.renderTotal()}
          {this.renderButton()}
        </Form>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/CreateOrder/Stop/Limit/index.js