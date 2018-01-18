import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import numeral from 'numeral'
import round from 'lodash/round'

export default class TraderNumber extends React.Component {
  static propTypes = {
    currency: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.number
  }

  constructor(props) {
    super(props)
    this.state = {value: this.getValueText(props.value), number: props.value}
  }

  componentDidUpdate(prevProps) {
    if (this.state.number === this.props.value) return
    this.resetState()
  }

  resetState() {
    const multiplier = Math.pow(10, -this.props.currency.units)
    this.setState({
      value: this.getValueText(this.props.value * multiplier),
      number: this.props.value
    })
  }

  getValueText(text) {
    const value = this.getValueNumber(text)
    if (value) {
      const multiplier = Math.pow(10, this.props.currency.units)
      const calculatedAmount = value / multiplier
      return numeral(calculatedAmount).format(this.props.currency.format)
    } else {
      return ''
    }
  }

  getValueNumber(text) {
    const multiplier = Math.pow(10, this.props.currency.units)
    const value = numeral(text).value() * multiplier
    if (value) {
      return round(value)
    } else {
      return null
    }
  }

  @autobind
  onChange(event) {
    const text = event.target.value
    const value = this.getValueText(text)
    const number = this.getValueNumber(text)
    this.setState({value, number})
    this.props.onChange(number)
    event.stopPropagation()
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.label}>{this.props.currency.code}</div>
        <input
          className={styles.input}
          placeholder={numeral(0).format(this.props.currency.format)}
          onChange={event => this.setState({value: event.target.value})}
          value={this.state.value}
          onBlur={this.onChange}
          onKeyPress={event => event.key === 'Enter' && this.onChange(event)}
        />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/TraderNumber/index.js