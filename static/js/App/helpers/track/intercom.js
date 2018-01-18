export default function(eventType, data) {
  if (!window.Intercom) return
  if (eventType === 'view') {
    window.Intercom('update')
  } else {
    window.Intercom('trackEvent', eventType, data)
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/track/intercom.js