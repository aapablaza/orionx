import React from 'react'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import PropTypes from 'prop-types'
import moment from 'moment'
import reverse from 'lodash/reverse'
import cloneDeep from 'lodash/cloneDeep'
import UpIcon from 'react-icons/lib/md/arrow-upward'
import DownIcon from 'react-icons/lib/md/arrow-downward'
import AmountOpacity from 'App/components/AmountOpacity'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import Loading from 'App/Pages/Exchange/Loading'
import formatCurrency from 'App/helpers/formatCurrency'
import query from '../query'

@withGraphQL(query, {loading: <Loading />})
export default class Data extends React.Component {
  static propTypes = {
    history: PropTypes.array,
    market: PropTypes.object,
    height: PropTypes.number
  }

  getTitle() {
    const lastTrade = this.props.history[0]
    if (!lastTrade) return `${this.props.market.code} · Orionx`
    const {secondaryCurrency} = this.props.market
    const price = formatCurrency(lastTrade.price, secondaryCurrency, {long: true})
    return `$${price} · ${this.props.market.code} · Orionx`
  }

  renderItems() {
    const {market} = this.props
    const {mainCurrency, secondaryCurrency} = market
    let lastPrice = 0
    let up = true
    const history = reverse(cloneDeep(this.props.history))
    const items = history.map(trade => {
      if (lastPrice > trade.price) {
        up = false
      } else if (lastPrice < trade.price) {
        up = true
      }

      lastPrice = trade.price
      const Icon = up ? UpIcon : DownIcon
      return (
        <div key={trade._id} className={styles.trade}>
          <div className={styles.amount + ' amount'}>
            <AmountOpacity value={trade.amount} currency={mainCurrency} />
          </div>
          <div className={up ? styles.priceUp : styles.priceDown}>
            {formatCurrency(trade.price, secondaryCurrency, {long: true})}
            <Icon />
          </div>
          <div className={styles.date}>{moment(trade.date).format('HH:mm:ss')}</div>
        </div>
      )
    })
    return reverse(items)
  }

  render() {
    return (
      <div className={styles.container} style={{height: this.props.height - 41 - 20 - 2}}>
        <DocumentTitle title={this.getTitle()} />
        <ReactCSSTransitionGroup
          transitionName="orders-list"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.renderItems()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/History/Data/index.js