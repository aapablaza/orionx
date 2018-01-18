import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Loadable from 'react-loadable'
import Loading from 'App/components/RouteLoading'
import Users from './Users'
import Unlock from './Unlock'
import Approval from './Approval'
import Withdrawals from './Withdrawals'
import AddressVerification from './AddressVerification'
import Balances from './Balances'
import Trades from './Trades'
import Wallets from './Wallets'
import Transactions from './Transactions'
import Outputs from './Outputs'
import NotFoundPayments from './NotFoundPayments'
import AdminPayments from './AdminPayments'

const comp = loader => Loadable({loader, loading: Loading})

export default (
  <Route path="/admin" component={comp(() => import('./Layout'))}>
    <IndexRoute component={comp(() => import('./Main'))} />
    {Users}
    {Wallets}
    {Trades}
    {Approval}
    {Unlock}
    {Withdrawals}
    {AddressVerification}
    {Balances}
    {Transactions}
    {Outputs}
    {AdminPayments}
    {NotFoundPayments}
  </Route>
)



// WEBPACK FOOTER //
// ./src/App/Pages/Admin/index.js