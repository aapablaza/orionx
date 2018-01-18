import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

export default class OrderTypeSegmentedControl extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
  }

  renderOptions() {
    return this.props.options.map((option, index) => {
      const select = type => event => this.props.onChange(type)
      const className = type => (this.props.value === type ? styles.active : styles.item)
      return (
        <div key={index} className={className(option.value)} onClick={select(option.value)}>
          {option.label}
        </div>
      )
    })
  }

  render() {
    return <div className={styles.container}>{this.renderOptions()}</div>
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/SegmentedControl/index.js