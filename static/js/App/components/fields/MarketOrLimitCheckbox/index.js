import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'

export default class MarketOrLimitCheckbox extends React.Component {
  static propTypes = {
    value: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func
  }

  @autobind
  onCheck(event) {
    this.props.onChange(event.target.checked)
  }

  render() {
    return (
      <div className={styles.container}>
        <label className={styles.label}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={this.props.value}
            onClick={this.onCheck}
          />
          <span className={styles.label}>{this.props.label}</span>
        </label>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/MarketOrLimitCheckbox/index.js