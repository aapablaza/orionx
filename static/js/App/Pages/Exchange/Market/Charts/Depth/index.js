import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import PlusIcon from 'react-icons/lib/md/add-circle-outline'
import MinusIcon from 'react-icons/lib/md/remove-circle-outline'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Loading from 'App/Pages/Exchange/Loading'
import Chart from './Chart'
import round from 'lodash/round'
import formatCurrency from 'App/helpers/formatCurrency'

const zoomLevels = 8

@withGraphQL(
  gql`
    query getMarketMid($marketCode: ID!) {
      orderBook: marketOrderBook(marketCode: $marketCode) {
        mid
      }
    }
  `,
  {loading: <Loading />, options: {pollInterval: 10000}}
)
export default class Depth extends React.Component {
  static propTypes = {
    orderBook: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    market: PropTypes.object
  }

  state = {zoom: 6}

  renderChart() {
    const max = 50
    const limit = round(max - (this.state.zoom - 1) * (max / zoomLevels))
    return (
      <Chart
        width={this.props.width}
        height={this.props.height}
        marketCode={this.props.market.code}
        limit={limit}
        market={this.props.market}
      />
    )
  }

  renderMid() {
    const onClick = diff => event => {
      const newZoom = this.state.zoom + diff
      if (newZoom > zoomLevels || newZoom < 1) return
      this.setState({zoom: newZoom})
    }
    return (
      <div className={styles.mid}>
        <div
          onClick={onClick(-1)}
          className={this.state.zoom === 1 ? styles.minusDisabled : styles.minus}>
          <MinusIcon size={20} />
        </div>
        <div className={styles.data}>
          <div className={styles.value}>
            {formatCurrency(this.props.orderBook.mid, this.props.market.secondaryCurrency)}
          </div>
          <div className={styles.label}>Precio medio</div>
        </div>
        <div
          onClick={onClick(1)}
          className={this.state.zoom === zoomLevels ? styles.plusDisabled : styles.plus}>
          <PlusIcon size={20} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container} ref="container" style={{height: this.props.height}}>
        {this.renderChart()}
        {this.renderMid()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/Depth/index.js