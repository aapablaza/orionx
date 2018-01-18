import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import SegmentedControl from 'App/components/fields/SegmentedControl'
import Depth from './Depth'
import PropTypes from 'prop-types'
import Candle from './Candle'

export default class Charts extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
  }

  state = {type: 'candle'}

  renderChart() {
    const height = this.props.height - 41 - 4
    const width = this.props.width - 2
    if (this.state.type === 'depth') {
      return (
        <Depth
          width={width}
          height={height}
          market={this.props.market}
          marketCode={this.props.market.code}
        />
      )
    }
    if (this.state.type === 'candle') {
      return (
        <Candle
          width={width}
          height={height}
          market={this.props.market}
          marketCode={this.props.market.code}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <div className="header header-flex">
          <div className="header-title">Gráficos</div>
          <div className="header-options">
            <Form state={this.state} onChange={changes => this.setState(changes)}>
              <Field
                fieldName="type"
                type={SegmentedControl}
                options={[{label: 'Vela', value: 'candle'}, {label: 'Profundidad', value: 'depth'}]}
              />
            </Form>
          </div>
        </div>
        <div className="box" ref="container">
          <div className={styles.container}>{this.renderChart()}</div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Charts/index.js