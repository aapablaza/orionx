import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import styles from './styles.css'
import DocumentTitle from 'react-document-title'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import formatCurrency from 'App/helpers/formatCurrency'

@withGraphQL(
  gql`
    query getMarketIdleData($code: ID) {
      market(code: $code) {
        code
        lastTrade {
          price
        }
        secondaryCurrency {
          code
          units
          format
          longFormat
        }
      }
    }
  `,
  {loading: null, options: {pollInterval: 5000}}
)
export default class IdleMonitor extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    market: PropTypes.object
  }

  state = {}

  componentDidMount() {
    this.interval = setInterval(this.checkDocumentHidden, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  @autobind
  checkDocumentHidden() {
    this.setState({hidden: document.hidden})
  }

  getTitle() {
    if (!this.props.market) return `En espera · Orionx`
    const lastTrade = this.props.market.lastTrade
    if (!lastTrade) return `${this.props.market.code} · Orionx`
    const {secondaryCurrency} = this.props.market
    const price = formatCurrency(lastTrade.price, secondaryCurrency, {long: true})
    return `$${price} · ${this.props.market.code} · Orionx`
  }

  renderIdle() {
    return (
      <div className={styles.container} style={{height: this.props.height}}>
        <DocumentTitle title={this.getTitle()} />
        <div className={styles.text}>Pantalla en espera</div>
      </div>
    )
  }

  render() {
    if (this.state.hidden) return this.renderIdle()
    return this.props.children
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Idle/index.js