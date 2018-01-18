import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'
import ArrowIcon from 'react-icons/lib/md/arrow-forward'

export default class Welcome extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Bienvenidos a la revolución</div>
        <Link to="/accounts" className={styles.link}>
          Entrar a Orionx{' '}
          <ArrowIcon size={22} style={{top: -1, marginLeft: 6, position: 'relative'}} />
        </Link>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/Welcome/index.js