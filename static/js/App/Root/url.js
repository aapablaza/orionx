import getEnv from './getEnv'

const urls = {
  local: `http://${window.location.hostname}:4000`,
  // local: 'https://api2.orionx.io',
  dev: 'https://api2.orionx.io',
  prod: 'https://api2.orionx.io'
}

const env = getEnv()

export default urls[env]



// WEBPACK FOOTER //
// ./src/App/Root/url.js