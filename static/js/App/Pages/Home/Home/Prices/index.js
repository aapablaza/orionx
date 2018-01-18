import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Market from '../../Prices/Market'

@withGraphQL(gql`
  query getMarkets {
    markets(secondaryCurrencyCode: "CLP") {
      code
      secondaryCurrency {
        code
      }
    }
  }
`)
export default class Prices extends React.Component {
  static propTypes = {
    markets: PropTypes.array
  }

  renderMarkets() {
    if (!this.props.markets) return
    return this.props.markets
      .filter(market => {
        return market.secondaryCurrency.code === 'CLP'
      })
      .slice(0, 4)
      .map(market => {
        return (
          <div key={market.code} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Market marketCode={market.code} />
          </div>
        )
      })
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <div className="row">{this.renderMarkets()}</div>
          </div>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/Prices/index.js