import React from 'react'
import styles from './styles.css'
import Loading from 'orionsoft-parts/lib/components/Loading'
import DocumentTitle from 'react-document-title'

export default class LoadingComp extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <DocumentTitle title="Orionx - Cargando..." />
        <Loading />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/components/RouteLoading/index.js