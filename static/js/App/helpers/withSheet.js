import React from 'react'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
  return class WithSheet extends React.Component {
    static contextTypes = {
      showSheet: PropTypes.func.isRequired
    }

    render() {
      return <ComposedComponent {...this.props} showSheet={this.context.showSheet} />
    }
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/withSheet.js