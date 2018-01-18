import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import Loading from '../Loading'
import withSize from 'orionsoft-parts/lib/decorators/withSize'
import Tiny from './Layouts/Tiny'
import Full from './Layouts/Full'
import Mid from './Layouts/Mid'
import Small from './Layouts/Small'

@withSize
@withGraphQL(
  gql`
    query getMarket($code: ID!) {
      market(code: $code) {
        code
        name
        commission
        mainCurrency {
          ...getMarketCurrency
        }
        secondaryCurrency {
          ...getMarketCurrency
        }
      }
      me {
        _id
        marketFees(marketCode: $code) {
          maker
          taker
        }
      }
    }

    fragment getMarketCurrency on Currency {
      code
      name
      format
      longFormat
      units
      symbol
      round
      wallet {
        _id
        balance
        availableBalance
      }
    }
  `,
  {
    loading: <Loading />,
    options: {pollInterval: 5000}
  }
)
export default class Market extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    me: PropTypes.object,
    wallet: PropTypes.object
  }

  @autobind
  selectPrice({price, sell}) {
    this.refs.createOrder.selectPrice({price, sell})
  }

  getLayout() {
    const width = window.innerWidth
    if (width > 1300) return 'full'
    if (width > 1000) return 'mid'
    if (width > 750) return 'small'
    return 'tiny'
  }

  renderLayout() {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight - 60
    }
    const layout = this.getLayout()
    if (layout === 'full') return <Full {...this.props} {...size} />
    if (layout === 'mid') return <Mid {...this.props} {...size} />
    if (layout === 'small') return <Small {...this.props} {...size} />
    if (layout === 'tiny') return <Tiny {...this.props} {...size} />
  }

  render() {
    localStorage.setItem('lastMarketCode', this.props.market.code)
    return <div className={styles.container}>{this.renderLayout()}</div>
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Market.js