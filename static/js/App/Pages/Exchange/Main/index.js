import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import Market from './Market'
import Loading from 'App/Pages/Exchange/Loading'

@withGraphQL(
  gql`
    query getMarkets {
      markets {
        code
      }
    }
  `,
  {
    loading: <Loading />
  }
)
@withRouter
export default class Main extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    markets: PropTypes.array
  }

  componentDidMount() {
    const lastVisited = localStorage.getItem('lastMarketCode')
    if (lastVisited) {
      this.props.router.replace(`/exchange/${lastVisited}`)
      return
    }
    const market = this.props.markets[0]
    if (!market) return
    this.props.router.replace(`/exchange/${market.code}`)
  }

  renderMarkets() {
    return this.props.markets.map(market => {
      return (
        <div
          key={market.code}
          className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          onClick={() => this.props.router.push(`/exchange/${market.code}`)}>
          <Market market={market} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="row center-xs">{this.renderMarkets()}</div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Main/index.js