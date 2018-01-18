import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import autobind from 'autobind-decorator'
import Transition from 'react-transition-group/Transition'
import sleep from 'orionsoft-parts/lib/helpers/sleep'
import moment from 'moment'
import LockIcon from 'react-icons/lib/md/lock'
import {Form, Field} from 'simple-react-form'
import TwoFactorButton from 'App/components/fields/TwoFactorButton'
import withKeyboardEvent from 'orionsoft-parts/lib/decorators/withKeyboardEvent'
import withSize from 'orionsoft-parts/lib/decorators/withSize'

class ConfirmationDialog extends React.Component {
  static propTypes = {
    children: PropTypes.object,
    me: PropTypes.object,
    innerWidth: PropTypes.number
  }

  static childContextTypes = {
    confirm: PropTypes.func
  }

  state = {
    /* open: true,
    title: 'Confirmar transferencia',
    description: 'Quieres confirmar la transferencia de $1.000.000 CLP',
    values: [
      {label: 'Monto', value: '$1.000.000 CLP'},
      {label: 'Dirección', value: '123412341234'}
    ],
    reject: () => {},
    resolve: () => {} */
  }

  getChildContext() {
    return {
      confirm: this.activate
    }
  }

  @autobind
  async activate({title, disableTwoFactor, description, values}) {
    return new Promise((resolve, reject) => {
      this.setState({
        open: true,
        disableTwoFactor,
        title,
        description,
        values,
        resolve,
        reject
      })
    })
  }

  @autobind
  cancel() {
    if (!this.state.open) return
    this.clear()
    this.state.reject(new Error('[dialog-cancel]'))
  }

  @autobind
  confirm() {
    this.clear()
    this.state.resolve(this.state.twoFactor)
  }

  async clear() {
    this.setState({open: false})
    await sleep(500)
    this.setState({
      title: null,
      resolve: null,
      reject: null,
      twoFactor: '',
      disableTwoFactor: null
    })
  }

  renderValues() {
    return (this.state.values || []).map((value, index) => {
      return (
        <div key={index} className={styles.valueItem}>
          <div className={styles.label}>{value.label}</div>
          <div className={styles.value}>{value.value}</div>
        </div>
      )
    })
  }

  renderUser() {
    if (!this.props.me) return
    const {profile} = this.props.me
    return (
      <div className={styles.bottom}>
        <span className={styles.cancel} onClick={this.cancel}>
          Cancelar
        </span>
        <span className={styles.bottomSeparator}>-</span>
        <span className={styles.user}>
          Conectado como {profile.firstName} {profile.lastName}
        </span>
      </div>
    )
  }

  renderTwoFactor() {
    if (this.state.disableTwoFactor) return
    if (!this.props.me) return
    if (!this.props.me.hasTwoFactor) return
    return (
      <div className={styles.twoFactor}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName="twoFactor"
            type={TwoFactorButton}
            label="Confirmar"
            onClick={this.confirm}
          />
        </Form>
      </div>
    )
  }

  renderButton() {
    if (!this.props.me) return
    if (this.props.me.hasTwoFactor && !this.state.disableTwoFactor) return
    return (
      <div className={styles.confirm} onClick={this.confirm}>
        <LockIcon />
        <span>Confirmar</span>
      </div>
    )
  }

  renderInfo() {
    return (
      <div className={styles.values}>
        {this.renderValues()}
        <div className={styles.separator} />
        <div className={styles.date}>{moment().format('LL')}</div>
      </div>
    )
  }
  renderSmallInfo() {
    return (
      <div className={styles.smallValues}>
        {this.renderValues()}
        <div className={styles.separator} />
        <div className={styles.date}>{moment().format('LL')}</div>
      </div>
    )
  }
  renderDialog(state) {
    if (state === 'exited') return <span />
    return (
      <div className={styles.container + ' ' + styles['container_' + state]}>
        <div className={styles.dialog + ' ' + styles['dialog_' + state]}>
          <div className={styles.main}>
            <div className={styles.title}>{this.state.title}</div>
            <div className={styles.description}>{this.state.description}</div>
            {this.props.innerWidth > 600 ? null : this.renderSmallInfo()}
            <div className={styles.separator} />
            {this.renderTwoFactor()}
            {this.renderButton()}
            {this.renderUser()}
          </div>
          {this.props.innerWidth > 600 ? this.renderInfo() : null}
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

const withEvent = withKeyboardEvent('escape', 'cancel')(ConfirmationDialog)
const WithSize = withSize(withEvent)

export default withGraphQL(
  gql`
    query getMyTwoFactorSettings {
      me {
        _id
        profile {
          firstName
          lastName
        }
        hasTwoFactor
      }
    }
  `,
  {loading: null}
)(WithSize)



// WEBPACK FOOTER //
// ./src/App/Root/ConfirmationDialog/index.js