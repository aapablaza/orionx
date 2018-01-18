import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import {XYPlot, LineSeries} from 'react-vis'

export default class PriceChart extends React.Component {
  static propTypes = {
    marketStats: PropTypes.array
  }

  state = {}

  componentDidMount() {
    this.setWidth()
  }

  componentDidUpdate(prevProps, prevState) {
    this.setWidth()
  }

  setWidth() {
    if (this.state.width !== this.refs.container.clientWidth) {
      this.setState({width: this.refs.container.clientWidth})
    }
  }

  getData() {
    const points = this.props.marketStats.filter(point => !!point.average)
    return points.map(point => {
      return {
        x: point.fromDate,
        y: point.average
      }
    })
  }

  renderChart() {
    if (!this.state.width) return
    return (
      <XYPlot margin={10} width={this.state.width} height={100}>
        <LineSeries color="#0069ff" data={this.getData()} />
      </XYPlot>
    )
  }

  render() {
    return (
      <div className={styles.container} ref="container">
        {this.renderChart()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Prices/Market/PriceChart/index.js