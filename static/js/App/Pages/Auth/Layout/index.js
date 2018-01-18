import React from 'react'
import styles from './styles.css'
import Logo from '../Logo'
import autobind from 'autobind-decorator'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'

@withRouter
export default class Layout extends React.Component {
  state = {isLoading: false, error: null}

  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
    router: PropTypes.object,
    params: PropTypes.object
  }

  @autobind
  onSuccess() {
    const {location} = this.props
    if (location.state && location.state.nextPathname) {
      this.props.router.replace(location.state.nextPathname)
    } else {
      this.props.router.replace('/accounts')
    }
  }

  renderLogo() {
    return (
      <div className={styles.logo}>
        <Logo color="black" isLoading={this.state.isLoading} />
      </div>
    )
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      setError: error => {
        if (error && typeof error === 'string') {
          error = error.replace('GraphQL error: ', '')
          error = error.replace(/ \[.+\]$/g, '')
        }
        this.setState({error})
      },
      setLoading: isLoading => this.setState({isLoading}),
      isLoading: this.state.isLoading,
      onSuccess: this.onSuccess,
      ...this.props.params
    })
  }

  renderError() {
    if (!this.state.error) return
    return <div className={styles.error}>{this.state.error}</div>
  }

  render() {
    return (
      <div className={styles.container} style={{minHeight: window.innerHeight}}>
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-4 col-lg-6">
            <div className={styles.icon} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-offset-1 col-md-6 col-lg-offset-1 col-lg-4">
            <div className={styles.inner} style={{minHeight: window.innerHeight}}>
              {this.renderLogo()}
              {this.renderError()}
              {this.renderChildren()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Auth/Layout/index.js