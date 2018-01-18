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
    this.channel = global.pusher.subscribe(`${env}-${this.props.marketCode}-orderBook`)
    this.channel.bind('new', this.onNew)
    this.channel.bind('updated', this.onUpdated)
    this.channel.bind('deleted', this.onDeleted)
  }

  componentWillUnmount() {
    const env = getEnv()
    this.channel.unbind('new', this.onNew)
    this.channel.unbind('updated', this.onUpdated)
    this.channel.unbind('deleted', this.onDeleted)
    global.pusher.unsubscribe(`${env}-${this.props.marketCode}-orderBook`)
  }

  @autobind
  onNew(newItem) {
    const data = this.props.client.readQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      }
    })

    const key = newItem.sell ? 'sell' : 'buy'
    let index = 0
    for (var i = 0; i < data.orderBook[key].length; i++) {
      const item = data.orderBook[key][i]
      if (newItem.sell && item.limitPrice > newItem.limitPrice) {
        index = i
        break
      }
      if (!newItem.sell && item.limitPrice < newItem.limitPrice) {
        index = i
        break
      }
      index = i + 1
    }

    data.orderBook[key].splice(index, 0, {
      limitPrice: newItem.limitPrice,
      amount: newItem.amount,
      __typename: 'MarketBookOrder'
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

  @autobind
  onUpdated(updatedItem) {
    const data = this.props.client.readQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      }
    })

    const key = updatedItem.sell ? 'sell' : 'buy'
    for (var i = 0; i < data.orderBook[key].length; i++) {
      const item = data.orderBook[key][i]
      if (item.limitPrice === updatedItem.limitPrice) {
        data.orderBook[key][i].amount = updatedItem.amount
      }
    }

    // Write our data back to the cache.
    this.props.client.writeQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      },
      data
    })
  }

  @autobind
  onDeleted(deleteItem) {
    const data = this.props.client.readQuery({
      query,
      variables: {
        marketCode: this.props.marketCode
      }
    })

    const key = deleteItem.sell ? 'sell' : 'buy'
    for (var i = 0; i < data.orderBook[key].length; i++) {
      const item = data.orderBook[key][i]
      if (item.limitPrice === deleteItem.limitPrice) {
        data.orderBook[key].splice(i, 1)
      }
    }

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
// ./src/App/Pages/Exchange/Market/OrderBook/RealTime/index.js