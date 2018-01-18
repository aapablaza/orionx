import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import Balance from '../../Balance'
import CreateOrder from '../../CreateOrder'
import OrderBook from '../../OrderBook'
import Charts from '../../Charts'
import History from '../../History'
import MyOrders from '../../MyOrders'
import autobind from 'autobind-decorator'

export default class Full extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    me: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    wallet: PropTypes.object
  }

  @autobind
  async selectPrice({price, sell}) {
    this.refs.createOrder.selectPrice({price, sell})
  }

  render() {
    const flexWidth = this.props.width - 240 - 280 - 280
    return (
      <div className={styles.container} style={{height: this.props.height}}>
        <div className={styles.column} style={{width: 240}}>
          <Balance me={this.props.me} market={this.props.market} />
          <CreateOrder ref="createOrder" market={this.props.market} />
        </div>
        <div className={styles.column} style={{width: 280}}>
          <OrderBook
            onSelectPrice={this.selectPrice}
            market={this.props.market}
            height={this.props.height}
            width={280 - 2}
          />
        </div>
        <div className={styles.column} style={{width: flexWidth}}>
          <Charts market={this.props.market} width={flexWidth} height={this.props.height / 2} />
          <MyOrders market={this.props.market} width={flexWidth} height={this.props.height / 2} />
        </div>
        <div className={styles.column} style={{width: 280, height: this.props.height}}>
          <History market={this.props.market} height={this.props.height} />
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Layouts/Full/index.js