import React from 'react'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
  return class WithConfirmationDialog extends React.Component {
    static contextTypes = {
      confirm: PropTypes.func.isRequired
    }

    render() {
      return <ComposedComponent {...this.props} confirm={this.context.confirm} />
    }
  }
}



// WEBPACK FOOTER //
// ./src/App/helpers/withConfirmationDialog.js