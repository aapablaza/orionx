import gql from 'graphql-tag'

export default gql`
  query getHistory($marketCode: ID!) {
    history: marketTradeHistory(marketCode: $marketCode) {
      _id
      amount
      price
      date
    }
  }
`



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Market/History/query.js