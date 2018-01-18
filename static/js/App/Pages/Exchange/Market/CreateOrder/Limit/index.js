import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import TraderNumber from 'App/components/fields/TraderNumber'
import formatCurrency from 'App/helpers/formatCurrency'
import Button from 'orionsoft-parts/lib/components/Button'
import PropTypes from 'prop-types'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'
import withConfirmationDialog from 'App/helpers/withConfirmationDialog'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import track from 'App/helpers/track'

@withMutation(gql`
  mutation placeLimitOrder($marketCode: ID, $amount: BigInt, $limitPrice: BigInt, $sell: Boolean) {
    placeLimitOrder(
      marketCode: $marketCode
      amount: $amount
      limitPrice: $limitPrice
      sell: $sell
    ) {
      _id
    }
  }
`)
@withConfirmationDialog
@withMessage
export default class CreateOrder extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    market: PropTypes.object,
    sell: PropTypes.bool,
    placeLimitOrder: PropTypes.func,
    setRef: PropTypes.func,
    loggedIn: PropTypes.bool
  }

  state = {}

  componentDidMount() {
    this.props.setRef(this)
  }

  @autobind
  async place() {
    this.setState({loading: true})
    try {
      const market = this.props.market
      const amount = formatCurrency(this.state.amount, market.mainCurrency, {code: true})
      const price = formatCurrency(this.state.limitPrice, market.secondaryCurrency, {code: true})
      await this.props.confirm({
        disableTwoFactor: true,
        title: 'Confirmar',
        description: `Confirma que quieres crear esta orden de ${
          this.props.sell ? 'venta' : 'compra'
        } de ${amount}.`,
        values: [
          {label: 'Mercado', value: this.props.market.name},
          {label: 'Tipo', value: this.props.sell ? 'Venta' : 'Compra'},
          {label: 'Monto', value: amount},
          {label: 'Precio por ' + market.mainCurrency.code, value: price}
        ]
      })
      await this.props.placeLimitOrder(
        {
          marketCode: this.props.market.code,
          amount: this.state.amount,
          limitPrice: this.state.limitPrice,
          sell: this.props.sell
        },
        {refetchQueries: ['myOrders']}
      )
      this.setState({amount: 0, limitPrice: 0})
      this.props.showMessage('Orden creada')
      track('trade', {
        marketCode: this.props.market.code,
        orderType: 'limit',
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
    const {market} = this.props
    const price = this.state.limitPrice || 0
    const amount = this.state.amount || 0
    const currency = market.secondaryCurrency
    const otherCurrency = market.mainCurrency
    const mainMultiplier = Math.pow(10, -market.mainCurrency.units)
    const total = price * amount * mainMultiplier
    const verb = this.props.sell ? 'recibirás' : 'gastarás'
    const otherVerb = this.props.sell ? 'gastarás' : 'recibirás'
    const formattedAmount = formatCurrency(amount, otherCurrency)
    const andText = `Y ${otherVerb} ${formattedAmount} ${otherCurrency.code}`
    return (
      <div className="total">
        <div className="totalLabel">
          Si la orden es ejecutada {verb} {this.props.sell ? 'mínimo' : 'máximo'}
        </div>
        <div className="totalValue">
          {formatCurrency(total, currency)} {currency.code}
        </div>
        <div className="totalCommission">{this.props.sell ? '' : andText}</div>
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
    return (
      <div className={styles.container}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="label">Monto a {this.props.sell ? 'vender' : 'comprar'}</div>
          <Field fieldName="amount" currency={this.props.market.mainCurrency} type={TraderNumber} />
          <div className="label">Precio límite por {this.props.market.mainCurrency.code}</div>
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
// ./src/App/Pages/Exchange/Market/CreateOrder/Limit/index.js