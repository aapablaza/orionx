import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Logo from './Logo'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Markets from './Markets'
import Indicators from './Indicators'

@withGraphQL(
  gql`
    query getMarket($code: ID) {
      market(code: $code) {
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
    }
  `,
  {loading: null}
)
export default class Navbar extends React.Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    market: PropTypes.object
  }

  renderIndicators() {
    if (!this.props.market) return
    if (this.props.width < 800) return
    return <Indicators market={this.props.market} marketCode={this.props.market.code} />
  }

  renderMarkets() {
    if (!this.props.market) return
    return <Markets market={this.props.market} />
  }

  render() {
    return (
      <div style={{height: this.props.height}}>
        <div className={styles.container} style={{height: this.props.height}}>
          <div className={styles.logo}>
            <Logo />
          </div>
          {this.renderMarkets()}
          {this.renderIndicators()}
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Navbar/index.js