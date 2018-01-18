import ApolloClient from 'apollo-client'
import {getLoginToken, onTokenChange} from 'meteor-apollo-accounts'
import baseURL from './url'
import {createBatchingNetworkInterface} from 'apollo-upload-client'
// import {createNetworkInterface} from 'apollo-upload-client'
import getFingerprint from 'App/helpers/getFingerprint'

export const createMeteorNetworkInterface = () => {
  const networkInterface = createBatchingNetworkInterface({
    uri: baseURL + '/graphql',
    batchingInterface: true,
    batchInterval: 100
  })

  /* const networkInterface = createNetworkInterface({
    uri: baseURL + '/graphql'
  }) */

  networkInterface.use([
    {
      async applyBatchMiddleware(request, next) {
        // async applyMiddleware(request, next) {
        if (!request.options.headers) {
          request.options.headers = {}
        }

        const currentUserToken = await getLoginToken()
        if (currentUserToken) {
          request.options.headers['login-token'] = currentUserToken
        }

        request.options.headers.fingerprint = await getFingerprint()

        next()
        // setTimeout(next, 1000)
      }
    }
  ])

  return networkInterface
}

const config = {
  networkInterface: createMeteorNetworkInterface(),
  queryDeduplication: true,
  dataIdFromObject: result => {
    if (result._id && result.__typename) {
      return result.__typename + ':' + result._id
    }
    if (result.id && result.__typename) {
      return result.__typename + ':' + result.id
    }
  },
  shouldBatch: false
}

const apollo = new ApolloClient(config)
global.apollo = apollo

onTokenChange(function() {
  apollo.resetStore()
})

export default apollo



// WEBPACK FOOTER //
// ./src/App/Root/apollo.js