import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'

export default class Tabs extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
  }

  renderSections() {
    return this.props.options.map(section => {
      const selected = section.value === this.props.value
      return (
        <div
          onClick={() => this.props.onChange(section.value)}
          className={selected ? styles.selected : styles.section}
          key={section.value}>
          {section.label}
        </div>
      )
    })
  }

  render() {
    return <div className={styles.container}>{this.renderSections()}</div>
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/Tabs/index.js