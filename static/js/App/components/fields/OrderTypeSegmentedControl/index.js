import React from 'react'
import SegmentedControl from '../SegmentedControl'

export default class OrderTypeSegmentedControl extends React.Component {
  static propTypes = {}

  render() {
    const options = [
      {label: 'Market', value: 'market'},
      {label: 'Limit', value: 'limit'},
      {label: 'Stop', value: 'stop'}
    ]
    return <SegmentedControl {...this.props} options={options} />
  }
}



// WEBPACK FOOTER //
// ./src/App/components/fields/OrderTypeSegmentedControl/index.js