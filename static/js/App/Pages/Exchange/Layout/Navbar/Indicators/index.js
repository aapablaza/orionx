import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import formatCurrency from 'App/helpers/formatCurrency'

@withGraphQL(
  gql`
    query marketCurrentStats($marketCode: ID!) {
      market(code: $marketCode) {
        code
        name
        lastTrade {
          price
        }
        mainCurrency {
          code
          units
          format
        }
        secondaryCurrency {
          code
          units
          format
        }
      }
      stats: marketCurrentStats(marketCode: $marketCode, aggregation: d1) {
        close
        volume
        variation
      }
    }
  `,
  {loading: null, options: {pollInterval: 10000}}
)
export default class Indicators extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    stats: PropTypes.object
  }

  render() {
    const market = this.props.market
    const {stats} = this.props
    if (!stats) return <span />
    const price = market.lastTrade && market.lastTrade.price
    return (
      <div className={styles.container}>
        <div className={styles.indicator}>
          <div className={styles.value}>
            {price ? formatCurrency(price, market.secondaryCurrency, {code: true}) : '-'}
          </div>
          <div className={styles.label}>Última transacción</div>
        </div>
        <div className={styles.indicator}>
          <div className={styles.value}>{numeral(stats.variation).format('0.00%')}</div>
          <div className={styles.label}>Variación 24h</div>
        </div>
        <div className={styles.indicator}>
          <div className={styles.value}>{formatCurrency(stats.volume, market.mainCurrency)}</div>
          <div className={styles.label}>Volumen 24h</div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Navbar/Indicators/index.js