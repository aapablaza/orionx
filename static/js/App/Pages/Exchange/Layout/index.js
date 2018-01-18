import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import withSize from 'orionsoft-parts/lib/decorators/withSize'
import Navbar from './Navbar'
import Idle from './Idle'
import Pusher from './Pusher'

@withSize
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    innerHeight: PropTypes.number,
    innerWidth: PropTypes.number,
    params: PropTypes.object
  }

  componentDidMount() {
    document.body.style.backgroundColor = 'rgb(40, 44, 52)'
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = '#fafafa'
  }

  render() {
    const height = this.props.innerHeight
    const navbarHeight = 60
    return (
      <div className={styles.container} style={{height}}>
        <Idle height={height} code={this.props.params.code}>
          <Pusher />
          <Navbar
            height={navbarHeight}
            width={this.props.innerWidth}
            code={this.props.params.code}
          />
          <div className={styles.children} style={{height: height - navbarHeight}}>
            {this.props.children}
          </div>
        </Idle>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Exchange/Layout/index.js