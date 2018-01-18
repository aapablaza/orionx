import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import TraderNumber from 'App/components/fields/TraderNumber'
import PropTypes from 'prop-types'
import Button from 'orionsoft-parts/lib/components/Button'
import formatCurrency from 'App/helpers/formatCurrency'
import withConfirmationDialog from 'App/helpers/withConfirmationDialog'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import track from 'App/helpers/track'

@withMutation(gql`
  mutation placeStopMarketOrder(
    $marketCode: ID
    $stopPriceUp: BigInt
    $stopPriceDown: BigInt
    $amount: BigInt
    $sell: Boolean
  ) {
    placeStopMarketOrder(
      marketCode: $marketCode
      stopPriceUp: $stopPriceUp
      stopPriceDown: $stopPriceDown
      amount: $amount
      sell: $sell
    ) {
      _id
    }
  }
`)
@withConfirmationDialog
@withMessage
export default class StopMarket extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    sell: PropTypes.bool,
    market: PropTypes.object,
    placeStopMarketOrder: PropTypes.func,
    loggedIn: PropTypes.bool
  }

  state = {}

  @autobind
  async place() {
    this.setState({loading: true})
    try {
      const amount = (this.props.sell ? this.state.amountSell : this.state.amountBuy) || 0
      const market = this.props.market
      const currency = this.props.sell ? market.mainCurrency : market.secondaryCurrency
      const amountFormatted = formatCurrency(amount, currency, {code: true})
      const opts = {code: true}
      const formattedStopPriceUp = this.state.stopPriceUp
        ? formatCurrency(this.state.stopPriceUp || 0, market.secondaryCurrency, opts)
        : 'No tiene'
      const formattedStopPriceDown = this.state.stopPriceDown
        ? formatCurrency(this.state.stopPriceDown || 0, market.secondaryCurrency, opts)
        : 'No tiene'
      const currencyCode = market.mainCurrency.code
      const description = `Confirma que quieres ${
        this.props.sell ? 'vender' : `comprar ${currencyCode} con`
      } ${amountFormatted} a precio de mercado con precio de activación.`
      await this.props.confirm({
        title: 'Confirmar',
        description,
        disableTwoFactor: true,
        values: [
          {label: 'Mercado', value: this.props.market.name},
          {label: 'Tipo', value: this.props.sell ? 'Venta' : 'Compra'},
          {label: 'Monto', value: amountFormatted},
          {label: 'Precio por ' + market.mainCurrency.code, value: 'Mercado'},
          {label: 'Precio de activación superior', value: formattedStopPriceUp},
          {label: 'Precio de activación inferior', value: formattedStopPriceDown}
        ]
      })
      await this.props.placeStopMarketOrder(
        {
          marketCode: this.props.market.code,
          amount,
          sell: this.props.sell,
          stopPriceUp: this.state.stopPriceUp,
          stopPriceDown: this.state.stopPriceDown
        },
        {refetchQueries: ['myOrders']}
      )
      this.setState({amountSell: 0, amountBuy: 0, stopPriceUp: 0, stopPriceDown: 0})
      this.props.showMessage('Orden creada')
      track('trade', {
        marketCode: this.props.market.code,
        orderType: 'stopMarket',
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

  renderTotal() {
    if (!this.state.stopPriceUp && !this.state.stopPriceDown) return
    const amount = (this.props.sell ? this.state.amountSell : this.state.amountBuy) || 0
    const mainCurrency = this.props.market.mainCurrency
    const formattedAmount = formatCurrency(amount, mainCurrency)
    return (
      <div className="total">
        <div className="totalLabel">
          {this.renderPriceActivation()}, se abrirá una orden de{' '}
          {this.props.sell ? 'venta' : 'compra'} de {this.props.sell ? formattedAmount : ''}{' '}
          {mainCurrency.code} a precio de mercado
        </div>
      </div>
    )
  }

  renderButton() {
    if (!this.props.loggedIn) return
    return (
      <Button
        loading={this.state.loading}
        onClick={this.place}
        primary={!this.props.sell}
        danger={this.props.sell}>
        Crear orden
      </Button>
    )
  }
  render() {
    const workingCurrency = this.props.sell
      ? this.props.market.mainCurrency
      : this.props.market.secondaryCurrency
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
          <div className="label">Monto</div>
          <Field
            fieldName={this.props.sell ? 'amountSell' : 'amountBuy'}
            currency={workingCurrency}
            type={TraderNumber}
          />
        </Form>
        {this.renderTotal()}
        {this.renderButton()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/CreateOrder/Stop/Market/index.js