import React from 'react'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import {XYPlot, XAxis, YAxis} from 'react-vis'
import CandleStick from './CandleStick'
import Loading from 'App/Pages/Exchange/Loading'
import minBy from 'lodash/minBy'
import maxBy from 'lodash/maxBy'
import autobind from 'autobind-decorator'
import styles from './styles.css'
import moment from 'moment'
import formatCurrency from 'App/helpers/formatCurrency'
import range from 'lodash/range'

const interval = 10000

@withGraphQL(
  gql`
    query getMarketStats($marketCode: ID!, $aggregation: MarketStatsAggregation!) {
      marketStats(marketCode: $marketCode, aggregation: $aggregation) {
        _id
        open
        close
        high
        low
        volume
        count
        fromDate
        toDate
      }
    }
  `,
  {
    loading: <Loading />,
    options: {
      pollInterval: interval
    }
  }
)
export default class Chart extends React.Component {
  static propTypes = {
    marketStats: PropTypes.array,
    height: PropTypes.number,
    width: PropTypes.number,
    market: PropTypes.object,
    aggregation: PropTypes.string,
    options: PropTypes.node
  }

  state = {point: {fromDate: null}}

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.width !== nextProps.width) return true
    if (this.props.height !== nextProps.height) return true

    const currentPoint = this.state.point
    const nextPoint = nextState.point
    if (!!currentPoint !== !!nextPoint) return true
    if (currentPoint.fromDate !== nextPoint.fromDate) return true

    const currentLast = this.props.marketStats[this.props.marketStats.length - 1]
    const nextLast = nextProps.marketStats[nextProps.marketStats.length - 1]
    if (!currentLast) return false
    if (!nextLast) return false
    if (currentLast.fromDate !== nextLast.fromDate) return true
    if (currentLast.count !== nextLast.count) return true

    return false
  }

  getData() {
    return this.props.marketStats.map((point, index) => {
      if (point.count === 0) {
        return {
          _id: point._id,
          x: index,
          fromDate: point.fromDate,
          toDate: point.toDate,
          volume: 0,
          y: 0
        }
      }
      const goesUp = point.open <= point.close
      const x = index
      return {
        _id: point._id,
        x,
        fromDate: point.fromDate,
        toDate: point.toDate,
        volume: point.volume,
        y: (point.open + point.close) / 2,
        open: point.open,
        close: point.close,
        high: point.high,
        low: point.low,
        color: goesUp ? '#008c76' : '#f44336',
        opacity: this.state.point && point.fromDate === this.state.point.fromDate ? 1 : 0.6
      }
    })
  }

  getDomain() {
    const lowest = minBy(this.props.marketStats, 'low') || {low: 0}
    const highest = maxBy(this.props.marketStats, 'high') || {high: 0}
    const low = lowest.low
    const high = highest.high
    const diff = high - low
    return [low - diff * 0.2, high + diff * 0.1]
  }

  getHighestVolume() {
    const highest = maxBy(this.props.marketStats, 'volume')
    return highest ? highest.volume : 0
  }

  @autobind
  onMouseOver(point) {
    this.setState({point})
  }

  @autobind
  onMouseLeave() {
    this.setState({point: {fromDate: null}})
  }

  @autobind
  formatX(value) {
    const {fromDate} = this.props.marketStats[value]
    const format = {
      m1: 'HH:mm',
      m5: 'HH:mm',
      m15: 'HH:mm',
      m30: 'HH:mm',
      h1: 'LT',
      h4: 'DD/MM',
      h6: 'DD/MM',
      d1: 'DD/MM'
    }
    return moment(fromDate).format(format[this.props.aggregation])
  }

  @autobind
  formatY(item) {
    return formatCurrency(item, this.props.market.secondaryCurrency)
  }

  @autobind
  getTickValues() {
    const total = this.props.marketStats.length
    const ticks = total / 6
    const step = Math.round(total / ticks)
    const first = Math.floor(total / 10)
    const values = range(first, total, step)
    return values
  }

  getRightPadding(highest) {
    const formatted = this.formatY(highest)
    return formatted.length * 8
  }

  renderStats() {
    const {point} = this.state
    if (!point.fromDate) return
    const {secondaryCurrency, mainCurrency} = this.props.market
    if (!point.volume) {
      return (
        <div className={styles.point}>
          <div>{moment(point.fromDate).format('HH:mm DD-MM-YYYY')}</div>
          <div>Volume: {formatCurrency(0, mainCurrency)}</div>
        </div>
      )
    }
    return (
      <div className={styles.point}>
        <div>{moment(point.fromDate).format('HH:mm DD-MM-YYYY')}</div>
        <div>Open: {formatCurrency(point.open || 0, secondaryCurrency)}</div>
        <div>Close: {formatCurrency(point.close || 0, secondaryCurrency)}</div>
        <div>High: {formatCurrency(point.high || 0, secondaryCurrency)}</div>
        <div>Low: {formatCurrency(point.low || 0, secondaryCurrency)}</div>
        <div>Volume: {formatCurrency(point.volume || 0, mainCurrency)}</div>
      </div>
    )
  }

  render() {
    if (!this.props.marketStats) return <span />
    if (this.props.marketStats.length < 2) return <span />
    const axisStyle = {
      line: {stroke: 'rgba(255, 255, 255, 0.4)'},
      text: {fill: '#fff', fontWeight: 600}
    }
    const domain = this.getDomain()
    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.options}>{this.props.options}</div>
          {this.renderStats()}
        </div>
        <XYPlot
          animation
          margin={{left: 0, right: this.getRightPadding(domain[1]), top: 20, bottom: 30}}
          height={this.props.height - 2 - 23}
          width={this.props.width}
          yDomain={domain}
          onMouseLeave={this.onMouseLeave}>
          <CandleStick
            colorType="literal"
            data={this.getData()}
            lowest={domain[0]}
            highest={domain[1]}
            highestVolume={this.getHighestVolume()}
            onValueMouseOver={this.onMouseOver}
          />
          <XAxis
            tickValues={this.getTickValues()}
            tickFormat={this.formatX}
            style={axisStyle}
            tickSizeInner={0}
          />
          <YAxis
            tickFormat={this.formatY}
            hideLine
            style={axisStyle}
            tickSizeInner={0}
            orientation="right"
          />
        </XYPlot>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/Candle/Chart/index.js