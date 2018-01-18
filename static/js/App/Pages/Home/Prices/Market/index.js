import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import formatCurrency from 'App/helpers/formatCurrency'
import CoinCircle from 'App/components/CoinCircle'
import numeral from 'numeral'
import PriceChart from './PriceChart'

@withGraphQL(
  gql`
    query getMarketStatsHome($marketCode: ID!) {
      market(code: $marketCode) {
        code
        lastTrade {
          price
        }
        mainCurrency {
          code
          name
        }
        secondaryCurrency {
          code
          units
          format
          symbol
        }
      }
      stats: marketCurrentStats(marketCode: $marketCode, aggregation: mm1) {
        variation
        open
        close
        average
      }
      marketStats(marketCode: $marketCode, aggregation: h6, limit: 30) {
        average
        fromDate
      }
      orderBook: marketOrderBook(marketCode: $marketCode, limit: 1) {
        buy {
          limitPrice
        }
        sell {
          limitPrice
        }
        spread
      }
    }
  `,
  {options: {pollInterval: 60000}}
)
export default class Market extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    stats: PropTypes.object,
    orderBook: PropTypes.object
  }

  renderOrderBook() {
    const {orderBook, market} = this.props
    const buyPrice = orderBook.buy[0] ? orderBook.buy[0].limitPrice : 0
    const sellPrice = orderBook.sell[0] ? orderBook.sell[0].limitPrice : 0
    return (
      <div className={styles.orderBook}>
        <div>
          <div className={styles.orderBookPrice}>
            {formatCurrency(buyPrice, market.secondaryCurrency, {symbol: true})}
          </div>
          <div className={styles.label}>Venta</div>
        </div>
        <div>
          <div className={styles.orderBookPrice}>
            {formatCurrency(sellPrice, market.secondaryCurrency, {symbol: true})}
          </div>
          <div className={styles.label}>Compra</div>
        </div>
      </div>
    )
  }

  renderStats() {
    const {stats, market} = this.props
    const diff = stats.close - stats.open
    const isPositive = diff >= 0
    const symbol = isPositive ? '+' : '-'
    return (
      <div className={styles.orderBook}>
        <div>
          <div className={styles.orderBookPrice}>
            {symbol}
            {formatCurrency(Math.abs(diff), market.secondaryCurrency, {symbol: true})}
          </div>
          <div className={styles.label}>Desde el último mes</div>
        </div>
        <div>
          <div className={styles.orderBookPrice}>
            {symbol}
            {numeral(Math.abs(stats.variation)).format('0.0%')}
          </div>
          <div className={styles.label}>Desde el último mes (%)</div>
        </div>
      </div>
    )
  }

  render() {
    const {market} = this.props
    const lastTradePrice = market.lastTrade ? market.lastTrade.price : 0
    return (
      <div className={styles.container}>
        <div className={styles.circle}>
          <CoinCircle currencyCode={market.mainCurrency.code} />
        </div>
        <div className={styles.name}>{market.mainCurrency.name}</div>
        <div className={styles.price}>
          {formatCurrency(lastTradePrice, market.secondaryCurrency, {symbol: true})}
        </div>
        <div className={styles.label}>Última transacción</div>
        {this.renderOrderBook()}
        {this.renderStats()}
        <PriceChart {...this.props} />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Prices/Market/index.js