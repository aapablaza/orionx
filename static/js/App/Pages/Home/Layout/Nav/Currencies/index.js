import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'
import CoinCircle from 'App/components/CoinCircle'

export default class Currencies extends React.Component {
  static propTypes = {}

  renderCoin(path, code, title, description) {
    return (
      <Link to={`/${path}`} className={styles.currency}>
        <div className={styles.icon}>
          <CoinCircle currencyCode={code} />
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
        {this.renderCoin(
          'bitcoin',
          'BTC',
          'Bitcoin',
          'Bitcoin es una moneda, como el euro o el dólar. Es la primera y la más importante de todas las criptomonedas'
        )}
        {this.renderCoin(
          'ethereum',
          'ETH',
          'Ether',
          'Ethereum es una plataforma para construir aplicaciones descentralizadas y Ether la moneda que se usa para ejecutarlas'
        )}
        {/* this.renderCoin(
          'litecoin',
          'LTC',
          'Litecoin',
          'La plata de las criptomonedas'
        ) */}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Layout/Nav/Currencies/index.js