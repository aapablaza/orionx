import React from 'react'
import getEnv from 'App/Root/getEnv'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import query from '../query'
import {withApollo} from 'react-apollo'

@withApollo
export default class RealTime extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    marketCode: PropTypes.string
  }

  componentDidMount() {
    const env = getEnv()
    this.channel = global.pusher.subscribe(`${env}-${this.props.marketCode}-trades`)
    this.channel.bind('new-trade', this.newTrade)
  }

  componentWillUnmount() {
    const env = getEnv()
    this.channel.unbind('new-trade', this.newTrade)
    global.pusher.unsubscribe(`${env}-${this.props.marketCode}-trades`)
  }

  @autobind
  newTrade(newTrade) {
    console.log('new trade', newTrade)
    const data = this.props.client.readQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      }
    })
    // Add our todo from the mutation to the end.
    data.history.unshift({
      _id: newTrade._id,
      amount: newTrade.amount,
      date: new Date(newTrade.date),
      price: newTrade.price,
      __typename: 'MarketTrade'
    })

    // Write our data back to the cache.
    this.props.client.writeQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      },
      data
    })
  }

  render() {
    return <span />
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/History/RealTime/index.js