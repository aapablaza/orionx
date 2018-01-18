import Fingerprint2 from 'fingerprintjs2'

export default async function() {
  if (localStorage.getItem('fingerprint')) {
    return localStorage.getItem('fingerprint')
  }

  const fingerprint = await new Promise(function(resolve) {
    new Fingerprint2().get(function(result, components) {
      resolve(result)
    })
  })

  localStorage.setItem('fingerprint', fingerprint)
  return fingerprint
}



// WEBPACK FOOTER //
// ./src/App/helpers/getFingerprint.js