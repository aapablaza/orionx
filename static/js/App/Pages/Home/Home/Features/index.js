import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import planet from './planet.svg'
import rocket from './rocket.svg'
import shield from './shield.svg'

export default class Features extends React.Component {
  static propTypes = {}

  renderFeature(Icon, title, description) {
    return (
      <div className="col-xs-12 col-sm-4">
        <div className={styles.icon}>
          <Icon size={100} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.mainTitle}>Estás en buenas manos.</div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className={styles.image}>
                <img src={rocket} alt="" />
              </div>
              <div className={styles.title}>Más rápido</div>
              <div className={styles.description}>
                En Orionx las cuentas y las transferencias se aprueban instantáneamente. Estarás
                transando criptomonedas en pocos minutos
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className={styles.image}>
                <img src={shield} alt="" />
              </div>
              <div className={styles.title}>Más seguro</div>
              <div className={styles.description}>
                Usamos los más altos estándares de seguridad para proteger tus criptomonedas
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className={styles.image}>
                <img src={planet} alt="" />
              </div>
              <div className={styles.title}>Más avanzado</div>
              <div className={styles.description}>
                Somos la plataforma con la tecnología más moderna y con más funcionalidades para
                transar
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/Features/index.js