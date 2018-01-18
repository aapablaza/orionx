import React from 'react'
import autobind from 'autobind-decorator'
import url from '../url'

export default class Version extends React.Component {
  static propTypes = {}

  componentDidMount() {
    this.checkVersion()
    this.interval = setInterval(this.checkVersion, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  @autobind
  async checkVersion() {
    const path = url + '/client-version'
    const response = await fetch(path)
    const {version} = await response.json()
    this.saveVersion(version)
  }

  saveVersion(newVersion) {
    const oldVersion = localStorage.getItem('clientVersion')
    localStorage.setItem('clientVersion', newVersion)
    if (!Number(newVersion)) return
    if (!oldVersion) {
      console.log('no old version saved, reloading')
      window.location.reload(true)
    } else if (Number(oldVersion) !== Number(newVersion)) {
      console.log(`upgrading from version ${oldVersion} to ${newVersion}`)
      window.location.reload(true)
    }
  }

  render() {
    return <span />
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/Version/index.js