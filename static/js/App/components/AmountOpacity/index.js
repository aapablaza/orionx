import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import formatCurrency from 'App/helpers/formatCurrency'
import numeral from 'numeral'

const regex = /0+$/g

export default class Amount extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    currency: PropTypes.object,
    code: PropTypes.bool,
    long: PropTypes.bool
  }

  static defaultProps = {
    code: false,
    long: true
  }

  getDelimiter() {
    return numeral.localeData().delimiters.decimal
  }

  getNormalPart(text) {
    const delimiter = this.getDelimiter()
    const parts = text.split(delimiter)
    if (!parts[1]) return parts[0]
    const nonCeros = parts[1].replace(regex, '')
    return parts[0] + delimiter + nonCeros
  }

  getOpacityPart(text) {
    const normalPart = this.getNormalPart(text)
    return text.replace(normalPart, '')
  }

  renderCode() {
    if (!this.props.code) return
    return <span> {this.props.currency.code}</span>
  }

  render() {
    const text = formatCurrency(this.props.value, this.props.currency, {
      long: this.props.long,
      code: false
    })
    return (
      <span className={styles.container}>
        <span>{this.getNormalPart(text)}</span>
        <span style={{opacity: 0.2}}>{this.getOpacityPart(text)}</span>
        {this.renderCode()}
      </span>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/AmountOpacity/index.js