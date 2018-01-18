import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import data from './data'

export default class CoinCircle extends React.Component {
  static propTypes = {
    currencyCode: PropTypes.string,
    size: PropTypes.number
  }

  static defaultProps = {
    size: 40
  }

  getData() {
    return data[this.props.currencyCode] || data['BTC']
  }

  getStyle() {
    return {
      height: this.props.size,
      width: this.props.size,
      backgroundColor: this.getData().color,
      backgroundImage: this.getData().full ? `url(${this.getData().icon})` : null
    }
  }

  getIconStyle() {
    const multiplier = 0.6
    return {
      height: this.props.size * multiplier,
      width: this.props.size * multiplier,
      backgroundImage: `url(${this.getData().icon})`
    }
  }

  renderIcon() {
    if (this.getData().full) return
    return <div className={styles.icon} style={this.getIconStyle()} />
  }

  render() {
    return (
      <div className={styles.container} style={this.getStyle()}>
        {this.renderIcon()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/CoinCircle/index.js