import React from 'react'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import ArrowIcon from 'react-icons/lib/md/chevron-right'
import {Link} from 'react-router'

export default class DontKnow extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <Link to="/bitcoin" className={styles.flex}>
            <div className={styles.text}>
              Si quieres aprender sobre el Bitcoin y otras criptomonedas entra aquí
            </div>
            <div className={styles.icon}>
              <ArrowIcon size={30} />
            </div>
          </Link>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/DontKnow/index.js