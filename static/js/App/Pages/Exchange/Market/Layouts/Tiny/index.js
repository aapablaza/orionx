import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import {Form, Field} from 'simple-react-form'
import Tabs from 'App/components/fields/Tabs'
import Balance from '../../Balance'
import CreateOrder from '../../CreateOrder'
import OrderBook from '../../OrderBook'
import Charts from '../../Charts'
import History from '../../History'
import MyOrders from '../../MyOrders'
import autobind from 'autobind-decorator'
import sleep from 'orionsoft-parts/lib/helpers/sleep'

export default class Tiny extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    me: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number,
    wallet: PropTypes.object
  }

  state = {section: 'charts'}

  getSections() {
    return [
      {label: 'Crear', value: 'createOrder'},
      {label: 'Libro', value: 'orderBook'},
      {label: 'Gráficos', value: 'charts'},
      {label: 'Órdenes', value: 'myOrders'},
      {label: 'Historial', value: 'history'}
    ]
  }

  @autobind
  async selectPrice({price, sell}) {
    this.setState({section: 'createOrder'})
    await sleep(100)
    this.refs.createOrder.selectPrice({price, sell})
  }

  renderActive() {
    if (this.state.section === 'createOrder') {
      return (
        <div>
          <Balance me={this.props.me} market={this.props.market} wallet={this.props.wallet} />
          <CreateOrder ref="createOrder" market={this.props.market} wallet={this.props.wallet} />
        </div>
      )
    }
    if (this.state.section === 'orderBook') {
      return (
        <OrderBook
          market={this.props.market}
          onSelectPrice={this.selectPrice}
          height={this.props.height - 35 - 1}
          width={this.props.width}
        />
      )
    }
    if (this.state.section === 'charts') {
      return (
        <Charts
          market={this.props.market}
          height={this.props.height - 35 - 1}
          width={this.props.width}
        />
      )
    }
    if (this.state.section === 'myOrders') {
      return (
        <MyOrders
          market={this.props.market}
          height={this.props.height - 35 - 1}
          width={this.props.width}
        />
      )
    }
    if (this.state.section === 'history') {
      return <History market={this.props.market} height={this.props.height - 35 - 1} />
    }
  }

  render() {
    return (
      <div className={styles.container} style={{height: this.props.height}}>
        <div className={styles.active}>{this.renderActive()}</div>
        <div className={styles.tabs}>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <Field fieldName="section" type={Tabs} options={this.getSections()} />
          </Form>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/Layouts/Tiny/index.js