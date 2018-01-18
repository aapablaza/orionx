import React from 'react'

export default class Puser extends React.Component {
  static propTypes = {}

  componentDidMount() {
    // Enable pusher logging - don't include this in production
    // global.Pusher.logToConsole = true

    var pusher = new global.Pusher('75db70ade74c21ad715d', {
      cluster: 'us2',
      encrypted: true
    })

    global.pusher = pusher
  }

  componentWillUnmount() {
    global.pusher.disconnect()
  }

  render() {
    return <span />
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/Pusher/index.js