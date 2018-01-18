export default function(eventType, data) {
  if (!window.fbq) return
  if (eventType === 'view') {
    window.fbq('track', 'PageView')
  } else if (eventType === 'register') {
    window.fbq('track', 'CompleteRegistration')
  } else {
    window.fbq('trackCustom', eventType, data)
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/track/pixel.js