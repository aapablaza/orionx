import React from 'react'
import styles from './styles.css'
import Chart from './Chart'
import PropTypes from 'prop-types'

export default class Candle extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    market: PropTypes.object
  }

  getAggregation() {
    return localStorage.getItem('exchange.candleAggregation') || 'h1'
  }

  setAggregation(aggregation) {
    localStorage.setItem('exchange.candleAggregation', aggregation)
    this.forceUpdate()
  }

  renderOptions() {
    return (
      <div>
        <select
          className={styles.select}
          value={this.getAggregation()}
          onChange={event => this.setAggregation(event.target.value)}>
          <option value="m1">1m</option>
          <option value="m5">5m</option>
          <option value="m15">15m</option>
          <option value="m30">30m</option>
          <option value="h1">1h</option>
          <option value="h4">4h</option>
          <option value="h6">6h</option>
          <option value="d1">1d</option>
        </select>
      </div>
    )
  }

  renderChart() {
    return (
      <Chart
        width={this.props.width}
        height={this.props.height}
        marketCode={this.props.market.code}
        market={this.props.market}
        aggregation={this.getAggregation()}
        options={this.renderOptions()}
      />
    )
  }

  render() {
    return (
      <div className={styles.container} style={{height: this.props.height}}>
        <div className={styles.options} />
        {this.renderChart()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/Candle/index.js