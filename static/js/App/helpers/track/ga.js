export default function(eventType, data) {
  if (!window.ga) return
  if (eventType === 'view') {
    window.ga('send', 'pageview')
  } else {
    window.ga('send', 'event', eventType)
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/track/ga.js