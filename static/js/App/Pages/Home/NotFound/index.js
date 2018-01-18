import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'
import ArrowIcon from 'react-icons/lib/md/arrow-forward'
import DocumentTitle from 'react-document-title'

export default class Exchange extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container} style={{height: window.innerHeight}}>
        <DocumentTitle title="Orionx - Error 404" />
        <div className={styles.content}>
          <div className={styles.title}>No encontrado</div>
          <div className={styles.description}>¡Lo sentimos! Aún estamos en construcción</div>
          <Link to="/accounts" className={styles.link}>
            Entrar a Orionx{' '}
            <ArrowIcon size={22} style={{top: -1, marginLeft: 6, position: 'relative'}} />
          </Link>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/NotFound/index.js