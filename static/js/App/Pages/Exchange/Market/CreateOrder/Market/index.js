import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import TraderNumber from 'App/components/fields/TraderNumber'
import PropTypes from 'prop-types'
import Button from 'orionsoft-parts/lib/components/Button'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'
import MarketEstimate from 'App/components/MarketEstimate'
import formatCurrency from 'App/helpers/formatCurrency'
import withConfirmationDialog from 'App/helpers/withConfirmationDialog'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import track from 'App/helpers/track'

@withMutation(gql`
  mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {
    placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {
      _id
    }
  }
`)
@withConfirmationDialog
@withMessage
export default class Market extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    sell: PropTypes.bool,
    market: PropTypes.object,
    placeMarketOrder: PropTypes.func,
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
      const description = `Confirma que quieres ${
        this.props.sell ? 'vender' : `comprar ${market.mainCurrency.code} con`
      } ${amountFormatted} a precio de mercado.`
      await this.props.confirm({
        title: 'Confirmar',
        description,
        disableTwoFactor: true,
        values: [
          {label: 'Mercado', value: this.props.market.name},
          {label: 'Tipo', value: this.props.sell ? 'Venta' : 'Compra'},
          {label: 'Monto', value: amountFormatted},
          {label: 'Precio por ' + market.mainCurrency.code, value: 'Mercado'}
        ]
      })
      await this.props.placeMarketOrder(
        {
          marketCode: this.props.market.code,
          amount,
          sell: this.props.sell
        },
        {refetchQueries: ['myOrders']}
      )
      this.setState({amountSell: 0, amountBuy: 0})
      this.props.showMessage('Orden creada')
      track('trade', {
        marketCode: this.props.market.code,
        orderType: 'market',
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

  renderTotal() {
    const amount = (this.props.sell ? this.state.amountSell : this.state.amountBuy) || 0
    return (
      <div className="total">
        <div className="totalLabel">Si la orden es ejecutada recibirás aproximadamente</div>
        <div className="totalValue">
          <MarketEstimate
            marketCode={this.props.market.code}
            market={this.props.market}
            amount={amount}
            sell={this.props.sell}
          />
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
        Crear orden de {this.props.sell ? 'venta' : 'compra'}
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
// ./src/App/Pages/Exchange/Market/CreateOrder/Market/index.js