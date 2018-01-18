import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import TwoFactorIcon from 'react-icons/lib/md/vpn-key'
import autobind from 'autobind-decorator'

export default class TwoFactor extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    label: PropTypes.string,
    showText: PropTypes.bool
  }

  static defaultProps = {
    showText: true
  }

  state = {}

  @autobind
  onChange(event) {
    const value = event.target.value
    this.props.onChange(value)
    if (value.length === 6) this.refs.input.blur()
  }

  isReady() {
    return this.props.value && this.props.value.length === 6
  }

  getClassName() {
    if (this.isReady()) return styles.ready
    if (this.state.focus) return styles.focus
    return styles.container
  }

  @autobind
  onClick() {
    if (this.isReady()) {
      this.props.onClick()
    } else {
      this.refs.input.focus()
    }
  }

  renderText() {
    if (!this.props.showText) return
    return <div className={styles.text}>{this.isReady() ? 'Confirmar' : 'Escribe el código'}</div>
  }

  render() {
    return (
      <div className={this.getClassName()} onClick={this.onClick}>
        <div className={styles.icon}>
          <TwoFactorIcon size={20} />
        </div>
        <input
          className={styles.input}
          ref="input"
          maxLength={6}
          type="tel"
          autoComplete="off"
          name="twofactor"
          placeholder="XXXXXX"
          disabled={this.isReady()}
          onFocus={() => this.setState({focus: true})}
          onBlur={() => this.setState({focus: false})}
          onChange={this.onChange}
          value={this.props.value || ''}
        />
        {this.renderText()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/TwoFactorButton/index.js