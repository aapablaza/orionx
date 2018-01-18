import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import formatCurrency from 'App/helpers/formatCurrency'
import numeral from 'numeral'
import {withRouter} from 'react-router'
import Button from 'orionsoft-parts/lib/components/Button'

@withRouter
export default class Balance extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    market: PropTypes.object,
    me: PropTypes.object
  }

  renderFees() {
    if (!this.props.me) return
    const {marketFees: {taker, maker}} = this.props.me
    return (
      <div className={styles.commissions}>
        <div className={styles.commission}>
          <div className={styles.code}>Comisión taker</div>
          <div className={styles.value}>{numeral(taker).format('0.[000]%')}</div>
        </div>
        <div className={styles.commission}>
          <div className={styles.code}>Comisión maker</div>
          <div className={styles.value}>{numeral(maker).format('0.[000]%')}</div>
        </div>
      </div>
    )
  }

  renderCreateAccount() {
    return (
      <div>
        <div className="header">
          <div className="header-title">Registrate en Orionx</div>
        </div>
        <div className="box">
          <div className={styles.container}>
            <Button onClick={() => this.props.router.push('/register')} primary>
              Crear una cuenta
            </Button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.me) return this.renderCreateAccount()
    const {market} = this.props
    const {mainCurrency, secondaryCurrency} = market
    const {wallet: mainWallet} = mainCurrency
    const {wallet: secondaryWallet} = secondaryCurrency
    return (
      <div>
        <div className="header">
          <div className="header-title">Balance disponible</div>
        </div>
        <div className="box">
          <div className={styles.container}>
            <div className={styles.balance}>
              <div className={styles.code}>{mainCurrency.code}</div>
              <div className={styles.value}>
                {formatCurrency(mainWallet.availableBalance, mainCurrency, {long: true})}
              </div>
            </div>
            <div className={styles.balance}>
              <div className={styles.code}>{secondaryCurrency.code}</div>
              <div className={styles.value}>
                {formatCurrency(secondaryWallet.availableBalance, secondaryCurrency, {long: true})}
              </div>
            </div>
            {this.renderFees()}
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Balance/index.js