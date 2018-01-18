import React from 'react'
import Open from './Open'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import SegmentedControl from 'App/components/fields/SegmentedControl'
import Closed from './Closed'

export default class MyOrders extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
  }

  state = {
    type: 'open'
  }

  renderOrders() {
    const props = {
      marketCode: this.props.market.code,
      market: this.props.market,
      width: this.props.width,
      height: this.props.height,
      page: 1,
      renderHeader: header => this.setState({header})
    }
    if (this.state.type === 'open') {
      return <Open {...props} />
    } else if (this.state.type === 'closed') {
      return <Closed {...props} />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="header">
          <div className=" header-flex">
            <div className="header-title">Órdenes</div>
            <div className="header-options">
              <Form state={this.state} onChange={changes => this.setState(changes)}>
                <Field
                  fieldName="type"
                  type={SegmentedControl}
                  options={[
                    {label: 'Abiertas', value: 'open'},
                    {label: 'Cerradas', value: 'closed'}
                  ]}
                />
              </Form>
            </div>
          </div>
          {this.state.header}
        </div>
        <div className="box">{this.renderOrders()}</div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/MyOrders/index.js