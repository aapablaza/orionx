import React from 'react'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import {XYPlot, XAxis, YAxis, AreaSeries, LineSeries, GradientDefs, Crosshair} from 'react-vis'
import Loading from 'App/Pages/Exchange/Loading'
import formatCurrency from 'App/helpers/formatCurrency'
import autobind from 'autobind-decorator'
import styles from './styles.css'

const interval = 10000

@withGraphQL(
  gql`
    query getDepthData($marketCode: ID!, $limit: Int) {
      orderBook: marketOrderBook(marketCode: $marketCode, limit: $limit) {
        mid
        buy {
          limitPrice
          accumulated
          accumulatedPrice
        }
        sell {
          limitPrice
          accumulated
          accumulatedPrice
        }
      }
    }
  `,
  {loading: <Loading />, options: {fetchPolicy: 'network-only', pollInterval: interval}}
)
export default class Chart extends React.Component {
  static propTypes = {
    orderBook: PropTypes.object,
    aggregation: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    market: PropTypes.object
  }

  state = {}

  getData(section) {
    return this.props.orderBook[section].map(point => ({
      x: point.limitPrice,
      y: point.accumulated,
      y0: 0
    }))
  }

  @autobind
  formatX(item) {
    return formatCurrency(item, this.props.market.secondaryCurrency)
  }

  @autobind
  formatY(item) {
    return formatCurrency(item, this.props.market.mainCurrency)
  }

  getTickPadding() {
    const buy = this.props.orderBook['buy']
    const last = buy[buy.length - 1].accumulated
    const formatted = this.formatY(last)
    return formatted.length * 8 * -1
  }

  @autobind
  onMouseLeave() {
    this.setState({selected: null})
  }

  @autobind
  onMouseOver(item) {
    this.setState({
      selected: item.point
    })
  }

  getRefDataSection(section) {
    return this.props.orderBook[section].map(point => ({
      x: point.limitPrice,
      y: 0,
      point: {
        ...point,
        section
      }
    }))
  }

  getRefData() {
    const buy = this.getRefDataSection('buy')
    const sell = this.getRefDataSection('sell')
    return [...buy, ...sell]
  }

  renderCrosshair() {
    const point = this.state.selected
    if (!point) return
    const mainCurrency = this.props.market.mainCurrency
    const secondaryCurrency = this.props.market.secondaryCurrency
    const total = point.accumulatedPrice
    const opts = {code: true}
    const word = point.section === 'buy' ? 'vendido' : 'comprado'
    return (
      <Crosshair values={[{x: point.limitPrice}]}>
        <div className={styles.crosshair}>
          <div className={styles.limitPrice}>
            {formatCurrency(point.limitPrice, secondaryCurrency, opts)}
          </div>
          <div className={styles.flex}>
            <div className={styles.flexItem}>
              <div className={styles.title}>Puede ser {word}:</div>
              <div className={styles.value}>
                {formatCurrency(point.accumulated, mainCurrency, opts)}
              </div>
            </div>
            <div className={styles.flexItem}>
              <div className={styles.title}>Por un total de:</div>
              <div className={styles.value}>{formatCurrency(total, secondaryCurrency, opts)}</div>
            </div>
          </div>
        </div>
      </Crosshair>
    )
  }

  renderChart() {
    const sell = this.getData('sell')
    const buy = this.getData('buy')
    if (!sell.length) return <span />
    if (!buy.length) return <span />
    const axisStyle = {
      line: {stroke: 'rgba(255, 255, 255, 0.4)'},
      text: {fill: '#fff', fontWeight: 600}
    }
    return (
      <XYPlot
        animation
        margin={{left: 0, right: 0, top: 20, bottom: 30}}
        height={this.props.height}
        width={this.props.width}
        onMouseLeave={this.onMouseLeave}>
        <GradientDefs>
          <linearGradient id="sellGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f44336" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#f44336" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        <GradientDefs>
          <linearGradient id="buyGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#008c76" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#008c76" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        <LineSeries color="transparent" onNearestX={this.onMouseOver} data={this.getRefData()} />
        <AreaSeries color="url(#sellGradient)" data={sell} />
        <AreaSeries color="url(#buyGradient)" data={buy} />
        <XAxis tickTotal={4} tickFormat={this.formatX} style={axisStyle} tickSizeInner={0} />
        <YAxis
          tickFormat={this.formatY}
          tickPadding={this.getTickPadding()}
          hideLine
          style={axisStyle}
          tickSizeOuter={0}
        />
        <YAxis
          tickFormat={this.formatY}
          tickPadding={this.getTickPadding()}
          hideLine
          style={axisStyle}
          tickSizeOuter={0}
          orientation="right"
        />
        {this.renderCrosshair()}
      </XYPlot>
    )
  }

  render() {
    return this.renderChart()
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/Depth/Chart/index.js