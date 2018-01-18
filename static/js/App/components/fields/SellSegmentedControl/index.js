import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

export default class SellSegmentedControl extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
  }

  render() {
    return (
      <div className={styles.container}>
        <div
          onClick={() => this.props.onChange(false)}
          className={this.props.value ? styles.item : styles.buy}>
          Comprar
        </div>
        <div
          onClick={() => this.props.onChange(true)}
          className={this.props.value ? styles.sell : styles.item}>
          Vender
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/SellSegmentedControl/index.js