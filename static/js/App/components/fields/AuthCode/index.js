import React from 'react'
import styles from './styles.css'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import KeyIcon from 'react-icons/lib/md/vpn-key'

export default class AuthCode extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  }

  @autobind
  onChange(event) {
    const text = event.target.value.toUpperCase()
    this.props.onChange(text)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <KeyIcon size={30} />
        </div>
        <input
          className={styles.input}
          placeholder={this.props.placeholder}
          value={this.props.value || ''}
          onChange={this.onChange}
        />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/AuthCode/index.js