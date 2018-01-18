import React from 'react'
import PropTypes from 'prop-types'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import formatCurrency from 'App/helpers/formatCurrency'

@withGraphQL(
  gql`
    query getEstimate($marketCode: ID!, $amount: Float!, $sell: Boolean!) {
      estimate: marketEstimateAmountToRecieve(marketCode: $marketCode, amount: $amount, sell: $sell)
    }
  `,
  {loading: null}
)
export default class MarketEstimate extends React.Component {
  static propTypes = {
    estimate: PropTypes.number,
    market: PropTypes.object,
    sell: PropTypes.bool
  }

  render() {
    if (!this.props.estimate) return 0
    const {market, sell} = this.props
    const currency = sell ? market.secondaryCurrency : market.mainCurrency
    return formatCurrency(this.props.estimate, currency, {code: true})
  }
}



// WEBPACK FOOTER //
// ./src/App/components/MarketEstimate/index.js