import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import Limit from './Limit'
import Market from './Market'
import Stop from './Stop'
import OrderTypeSegmentedControl from 'App/components/fields/OrderTypeSegmentedControl'
import SellSegmentedControl from 'App/components/fields/SellSegmentedControl'
import autobind from 'autobind-decorator'
import sleep from 'orionsoft-parts/lib/helpers/sleep'

export default class CreateOrder extends React.Component {
  static propTypes = {}

  getType() {
    return localStorage.getItem('exchange.createOrderType') || 'limit'
  }

  setType(type) {
    localStorage.setItem('exchange.createOrderType', type)
    this.forceUpdate()
  }

  getSell() {
    return localStorage.getItem('exchange.createOrderSell') === 'sell'
  }

  setSell(sell) {
    localStorage.setItem('exchange.createOrderSell', sell ? 'sell' : 'buy')
    this.forceUpdate()
  }

  @autobind
  async selectPrice({price, sell}) {
    this.setType('limit')
    this.setSell(sell)
    await sleep(10)
    this.limit.setState({limitPrice: price})
  }

  renderForm() {
    const props = {
      ...this.props,
      sell: this.getSell(),
      loggedIn: !!localStorage.getItem('Meteor.userId')
    }
    if (this.getType() === 'market') return <Market {...props} />
    if (this.getType() === 'stop') return <Stop {...props} />
    if (this.getType() === 'limit') {
      return <Limit setRef={limit => (this.limit = limit)} {...props} />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="header">
          <div className="header-title">Crear orden</div>
        </div>
        <div className="box">
          <div className={styles.content}>
            <Form
              state={{type: this.getType(), sell: this.getSell()}}
              onChange={({type, sell}) => {
                this.setSell(sell)
                this.setType(type)
              }}>
              <Field fieldName="type" type={OrderTypeSegmentedControl} />
              <br />
              <Field fieldName="sell" type={SellSegmentedControl} />
            </Form>
            <br />
            {this.renderForm()}
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/CreateOrder/index.js