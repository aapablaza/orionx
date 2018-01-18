import React from 'react'
import styles from './styles.css'
import {Link} from 'react-router'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import DropOver from 'orionsoft-parts/lib/components/DropOver'
import Currencies from './Currencies'
import Container from 'orionsoft-parts/lib/components/Container'
import ArrowIcon from 'react-icons/lib/md/arrow-forward'
import Products from './Products'

@withGraphQL(
  gql`
    query getMe {
      me {
        _id
      }
    }
  `,
  {loading: null}
)
export default class Nav extends React.Component {
  static propTypes = {
    me: PropTypes.object
  }

  state = {
    // open: 'currencies'
  }

  renderAccount() {
    const icon = <ArrowIcon style={{top: -1, marginLeft: 6, position: 'relative'}} />
    if (this.props.me) {
      return <Link to="/accounts">Mi Cuenta {icon}</Link>
    }

    return <Link to="/accounts">Entrar {icon}</Link>
  }

  render() {
    return (
      <div className={styles.nav}>
        <Container>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="/logo-white.svg" alt="logo" />
              </Link>
            </div>
            <div className={styles.links}>
              <div
                onMouseOver={() => this.setState({open: 'products'})}
                onMouseLeave={() => this.setState({open: null})}
                onClick={() => this.setState({open: null})}>
                <a>Productos</a>
                <DropOver open={this.state.open === 'products'}>
                  <Products />
                </DropOver>
              </div>
              <div
                onMouseOver={() => this.setState({open: 'currencies'})}
                onMouseLeave={() => this.setState({open: null})}
                onClick={() => this.setState({open: null})}>
                <a>Monedas</a>
                <DropOver open={this.state.open === 'currencies'}>
                  <Currencies />
                </DropOver>
              </div>
              <div>
                <Link to="/prices">Precios</Link>
              </div>
              <div>
                <a href="https://support.orionx.io/" target="_blank" rel="noopener noreferrer">
                  Soporte
                </a>
              </div>
              <div>{this.renderAccount()}</div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}



// WEBPACK FOOTER //
// ./src/App/Pages/Home/Layout/Nav/index.js