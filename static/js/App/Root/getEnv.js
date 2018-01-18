const isBeta = window.location.hostname.includes('dev')
const isProduction = !isBeta && window.location.hostname.includes('orionx.io')

export default () => (isProduction ? 'prod' : isBeta ? 'dev' : 'local')



// WEBPACK FOOTER //
// ./src/App/Root/getEnv.js