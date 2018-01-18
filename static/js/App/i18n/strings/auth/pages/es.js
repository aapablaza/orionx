import React from 'react'
import { Link } from 'react-router'

export default {
  login: 'Entrar',
  email: 'Email',
  twoFactor: 'Two factor code',
  password: 'Contrase�a',
  confirmPassword: 'Confirmar contrase�a',
  register: 'Registrarse',
  passwordDoesntMatch: 'Las contrase�as no coinciden',
  otherLinksInRegister: () => (
    <div>Si ya tienes cuenta <Link to='/login'>entra</Link></div>
  ),
  otherLinksInLogin: () => (
    <div>
      Si no tienes cuenta
      {' '}
      <Link to='/register'>registrate</Link>
      . Si olvidaste tu clave
      {' '}
      <Link to='/forgot'>haz click aqu�</Link>
    </div>
  )
}



// WEBPACK FOOTER //
// ./src/App/i18n/strings/auth/pages/es.js