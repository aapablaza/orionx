import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import Buttons from './Buttons'

export default class Exchange extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <img className={styles.city} alt="" src="/images/city.svg" />
            <div className={styles.text}>
              <div className={styles.title}>Criptomonedas para todos</div>
              <div className={styles.divider} />
              <div className={styles.description}>
                Orionx es la plataforma más simple y avanzada para comprar y vender criptomonedas en
                latinoamérica
              </div>
              <Buttons />
            </div>
            <div className={styles.data} />
          </div>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/Top/index.js