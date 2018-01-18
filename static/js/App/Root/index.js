import React from 'react'
import apolloClient from './apollo'
import {ApolloProvider} from 'react-apollo'
import OrionsoftProvider from 'orionsoft-parts/lib/components/Provider'
import './locale'
import PropTypes from 'prop-types'
import ConfirmationDialog from './ConfirmationDialog'
import Sheet from './Sheet'
import TrackProvider from 'App/helpers/track/Provider'
import DocumentTitle from 'react-document-title'
import ApolloError from './ApolloError'
import UserProvider from './UserProvider'
import ApolloNetworkError from './ApolloNetworkError'
import Version from './Version'

global.apolloErrorComponent = ApolloError
global.apolloNetworkErrorComponent = ApolloNetworkError

export default class Root extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <OrionsoftProvider meProvider={false}>
          <Version />
          <UserProvider>
            <DocumentTitle title="Orionx" />
            <TrackProvider>
              <ConfirmationDialog>
                <Sheet>{this.props.children}</Sheet>
              </ConfirmationDialog>
            </TrackProvider>
          </UserProvider>
        </OrionsoftProvider>
      </ApolloProvider>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Root/index.js