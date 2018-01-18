import React from 'react'
import styles from '../Full/styles.css'
import PropTypes from 'prop-types'
import Balance from '../../Balance'
import CreateOrder from '../../CreateOrder'
import OrderBook from '../../OrderBook'
import History from '../../History'
import MyOrders from '../../MyOrders'
import autobind from 'autobind-decorator'

export default class Tiny extends React.Component {
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
    const flexWidth = this.props.width - 240
    return (
      <div className={styles.container} style={{height: this.props.height}}>
        <div className={styles.column} style={{width: 240}}>
          <Balance me={this.props.me} market={this.props.market} />
          <CreateOrder ref="createOrder" market={this.props.market} />
        </div>
        <div className={styles.column} style={{width: flexWidth}}>
          <div className={styles.row}>
            <div className={styles.column} style={{width: flexWidth / 2}}>
              <OrderBook
                onSelectPrice={this.selectPrice}
                market={this.props.market}
                height={this.props.height / 2}
                width={flexWidth / 2 - 2}
              />
            </div>
            <div className={styles.column} style={{width: flexWidth / 2}}>
              <History market={this.props.market} height={this.props.height / 2} />
            </div>
          </div>
          <div className={styles.row}>
            <MyOrders market={this.props.market} width={flexWidth} height={this.props.height / 2} />
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Layouts/Small/index.js