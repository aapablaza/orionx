import React from 'react'
import Loading from '../Loading'

export default class Loader extends React.Component {
  static propTypes = {}

  state = {}

  async componentDidMount() {
    const {default: Market} = await import('./Market')
    this.setState({market: Market})
  }

  render() {
    if (this.state.market) return <this.state.market {...this.props} />
    return <Loading />
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/index.js