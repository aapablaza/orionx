import gql from 'graphql-tag'

export default gql`
  query getOrderBook($marketCode: ID!) {
    orderBook: marketOrderBook(marketCode: $marketCode, limit: 50) {
      buy {
        limitPrice
        amount
      }
      sell {
        limitPrice
        amount
      }
    }
  }
`



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/OrderBook/query.js