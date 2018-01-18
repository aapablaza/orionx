import React from 'react'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import MarketOrLimitCheckbox from 'App/components/fields/MarketOrLimitCheckbox'
import PropTypes from 'prop-types'
import Limit from './Limit'
import Market from './Market'

export default class Stop extends React.Component {
  static propTypes = {
    market: PropTypes.object,
    sell: PropTypes.bool
  }

  state = {limit: false}

  renderForm() {
    if (this.state.limit) {
      return <Limit {...this.props} />
    } else {
      return <Market {...this.props} />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName="limit"
            type={MarketOrLimitCheckbox}
            label="Establecer un límite de precio"
          />
        </Form>
        {this.renderForm()}
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/CreateOrder/Stop/index.js