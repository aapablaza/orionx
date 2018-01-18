import React from 'react'
import styles from './styles.css'
import SimpleIcon from 'react-icons/lib/md/graphic-eq'
import ComplexIcon from 'react-icons/lib/md/memory'

export default class SimpleComplex extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.simple}>
            <div className={styles.icon}>
              <SimpleIcon size={100} />
            </div>
            <div className={styles.title}>Diseñado para ser simple</div>
            <div className={styles.description}>
              No es necesario ser un experto en criptomonedas para usar Orionx. Te ofrecemos
              funciones intuitivas y amigables
            </div>
          </div>
          <div className={styles.complex}>
            <div className={styles.icon}>
              <ComplexIcon size={100} />
            </div>
            <div className={styles.title}>Y para llegar más lejos</div>
            <div className={styles.description}>
              Si eres experto, te ofrecemos funcionalidades más avanzadas, como órdenes stop,
              verificación instantanea y mayor variedad en criptomonedas
            </div>
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/SimpleComplex/index.js