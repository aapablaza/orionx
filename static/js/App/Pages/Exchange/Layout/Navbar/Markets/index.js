import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import DownIcon from 'react-icons/lib/md/keyboard-arrow-down'
import {Link} from 'react-router'
import autobind from 'autobind-decorator'
import sleep from 'orionsoft-parts/lib/helpers/sleep'
import formatCurrency from 'App/helpers/formatCurrency'
import numeral from 'numeral'

@withGraphQL(
  gql`
    query getMarkets {
      clpMarkets: markets(secondaryCurrencyCode: "CLP") {
        ...exchangeNavbarMarkets
      }
      btcMarkets: markets(secondaryCurrencyCode: "BTC") {
        ...exchangeNavbarMarkets
      }
    }

    fragment exchangeNavbarMarkets on Market {
      code
      name
      lastTrade {
        price
      }
      currentStats(aggregation: d1) {
        close
        open
        volume
        variation
      }
      secondaryCurrency {
        symbol
        format
        units
      }
    }
  `,
  {loading: null, options: {pollInterval: 10000}}
)
export default class Markets extends React.Component {
  static propTypes = {
    markets: PropTypes.array,
    market: PropTypes.object
  }

  state = {}

  componentDidMount() {
    window.addEventListener('mouseup', this.closeMenu, false)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.closeMenu)
  }

  @autobind
  async closeMenu() {
    if (!this.state.open) return true
    await sleep(100)
    this.setState({open: false})
  }

  renderMarkets(code) {
    if (!this.props[code]) return
    return this.props[code].map(market => {
      const stats = market.currentStats || {}
      const price = market.lastTrade && market.lastTrade.price
      const variation = stats.variation || 0
      return (
        <Link to={`/exchange/${market.code}`} key={market.code} className={styles.market}>
          <div className={styles.marketName}>{market.name}</div>
          <div className={styles.price}>
            {price
              ? market.secondaryCurrency.symbol + formatCurrency(price, market.secondaryCurrency)
              : '-'}
          </div>
          <div className={styles.variation}>{numeral(variation).format('0.00%')}</div>
        </Link>
      )
    })
  }

  renderMenu() {
    if (!this.state.open) return
    return (
      <div className={styles.menu}>
        <div className={styles.marketSecondaryGroupTitle}>Pesos chilenos</div>
        {this.renderMarkets('clpMarkets')}
        <div className={styles.marketSecondaryGroupTitle}>Bitcoin</div>
        {this.renderMarkets('btcMarkets')}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container} onClick={() => this.setState({open: !this.state.open})}>
        <div>
          <div className={this.state.open ? styles.nameOpen : styles.name}>
            {this.props.market.name}
          </div>
          <div className={styles.select}>Seleccionar mercado</div>
        </div>
        <div className={styles.iconContainer}>
          <DownIcon size={24} />
        </div>
        {this.renderMenu()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Navbar/Markets/index.js