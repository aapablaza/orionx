import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'
import WalletIcon from 'react-icons/lib/md/account-balance-wallet'
import InstantIcon from 'react-icons/lib/md/monetization-on'
import ExchangeIcon from 'react-icons/lib/md/compare'

export default class Currencies extends React.Component {
  static propTypes = {}

  renderProduct(Icon, path, title, description) {
    return (
      <Link to={path} className={styles.currency}>
        <div className={styles.icon}>
          <Icon size={60} />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderProduct(
          WalletIcon,
          '/products/wallet',
          'Billetera',
          'Almacenamiento seguro de cryptomonedas'
        )}
        {this.renderProduct(
          InstantIcon,
          '/products/buy',
          'Compra / Venta',
          'Compra y venta de cryptomonedas de la forma más simple'
        )}
        {this.renderProduct(
          ExchangeIcon,
          '/products/exchange',
          'Exchange',
          'La plataforma más avanzada para la compra y venta de cryptomonedas de latinoamerica'
        )}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Layout/Nav/Products/index.js