import React from 'react'
import styles from './styles.css'
import BounceLoading from 'orionsoft-parts/lib/components/BounceLoading'

export default class Loading extends React.Component {
  static propTypes = {}

  render() {
    return (
      <div className={styles.container}>
        <BounceLoading />
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Loading/index.js