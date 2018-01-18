import React from 'react'
import styles from './styles.css'
import Top from './Top'
import Features from './Features'
import SimpleComplex from './SimpleComplex'
import Welcome from './Welcome'
import DontKnow from './DontKnow'
import DocumentTitle from 'react-document-title'
import Prices from './Prices'

export default class Home extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <DocumentTitle title="Orionx - Criptomonedas para todos" />
        <Top />
        <DontKnow />
        <Prices />
        <Features />
        <SimpleComplex />
        <Welcome />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Home/index.js