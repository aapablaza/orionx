import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import Transition from 'react-transition-group/Transition'
import sleep from 'orionsoft-parts/lib/helpers/sleep'

export default class Sheet extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  static childContextTypes = {
    showSheet: PropTypes.func
  }

  state = {
    values: []
  }

  getChildContext() {
    return {
      showSheet: this.activate
    }
  }

  @autobind
  async activate({title, values, bottom}) {
    return new Promise(resolve => {
      this.setState({
        open: true,
        title,
        values,
        bottom,
        resolve
      })
    })
  }

  @autobind
  close() {
    if (!this.state.open) return
    this.clear()
    this.state.resolve()
  }

  async clear() {
    this.setState({open: false})
    await sleep(500)
    this.setState({
      title: null,
      values: [],
      resolve: null
    })
  }

  renderValues() {
    return this.state.values.map((value, index) => {
      return (
        <div key={index} className={styles.item}>
          <div className={styles.label}>{value.label}</div>
          <div className={styles.value}>{value.value}</div>
        </div>
      )
    })
  }

  renderBottom() {
    return this.state.bottom
  }

  renderDialog(state) {
    if (state === 'exited') return <span />
    return (
      <div className={styles.container + ' ' + styles['container_' + state]}>
        <div className={styles.topSeparator} />
        <div className={styles.dialog + ' ' + styles['dialog_' + state]}>
          <div className={styles.top}>
            <div className={styles.title}>{this.state.title}</div>
            <div className={styles.close} onClick={this.close}>
              Cerrar
            </div>
          </div>
          <div className={styles.values}>{this.renderValues()}</div>
          <div className={styles.bottom}>{this.renderBottom()}</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Transition in={this.state.open} timeout={500}>
          {state => this.renderDialog(state)}
        </Transition>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/Sheet/index.js