import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import {Link} from 'react-router'

export default class Footer extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <div className={styles.title}>Compañía</div>
              <a
                className={styles.link}
                href="https://orionsoft.io"
                rel="noopener noreferrer"
                target="_blank">
                Orionsoft
              </a>

              <Link className={styles.link} to="/global">
                Países
              </Link>
              {/* <Link className={styles.link} to="/about-us">
                Nosotros
              </Link> */}
              {/* <Link className={styles.link} to="/work-with-us">
                Trabaja con nosotros
              </Link> */}
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className={styles.title}>Productos</div>
              <Link className={styles.link} to="/products/wallet">
                Billetera
              </Link>
              <Link className={styles.link} to="/products/buy">
                Compra y venta
              </Link>
              <Link className={styles.link} to="/products/exchange">
                Exchange
              </Link>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className={styles.title}>Recursos</div>
              <a
                className={styles.link}
                href="https://support.orionx.io"
                rel="noopener noreferrer"
                target="_blank">
                Soporte
              </a>
              <Link className={styles.link} to="/security">
                Seguridad
              </Link>
              <Link className={styles.link} to="/rates">
                Tarifas
              </Link>
              {/* <Link className={styles.link} to="/api">
                API
              </Link> */}
              <Link className={styles.link} to="/terms-and-conditions">
                Terminos y condiciones
              </Link>
              <Link className={styles.link} to="/privacy-policy">
                Política de privacidad
              </Link>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className={styles.title}>Mi cuenta</div>
              <Link className={styles.link} to="/accounts">
                Mis cuentas
              </Link>
              <Link className={styles.link} to="/instant">
                Comprar y vender
              </Link>
              <Link className={styles.link} to="/settings/security">
                Seguridad
              </Link>
              <Link className={styles.link} to="/settings/verification">
                Verificación
              </Link>
            </div>
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/logo-white.svg" alt="logo" />
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Layout/Footer/index.js